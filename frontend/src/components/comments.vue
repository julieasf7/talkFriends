<template>
    <ul class="simpleListings comments">
        <li v-for="comments in commentList" :key="comments.idcomments">
            <a href="#" title="#" class="image">
                <img v-bind:src="'https://bootdey.com/img/Content/avatar/avatar'+ (( count == 7 )? count = 1 : count += 1 )+'.png'" alt="#" width="44" height="44">
            </a>
            <div class="c">
                <div class="title">{{comments.fullName}}</div>
                <div class="info">{{comments.date}}</div>
                <p>{{comments.comment}}</p>
            </div>
        </li>
        <li>
            <a href="#" title="#" class="image">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" width="44" height="44">
            </a>
            <div class="c">
                <textarea rows="1" placeholder="Ingrese su comentario" v-model="comment" class="form-control js-autogrow" style="overflow: hidden; word-wrap: break-word; height: 42px;"></textarea>
                <button v-on:click="addComment(post,comment)" class="btn btn-sm btn-primary">Comentar</button>                    
            </div>
        </li>
    </ul> 
</template>

<script>
import api from '@/api.js'

export default {
    name: "CommentsComponent",
    props: {
        post: {
            type    : Number,
            default : 0
        },
    },
    data() {
        return {
            commentList : null,
            comment     : null,
            count       : 0
        }
    },
    created(){
        this.getComment()
    },
    methods: {
        getComment(){
            api.post(
                '/comments/getComment', 
                {
                    idPost : this.post
                }
            ).then(result => {
                this.commentList = result.data
            }) 
        },
        addComment(idPost,comment){
            if(comment){
                api.post(
                    '/comments/addComment', 
                    {
                        userId  : this.$store.getters.loggedId,
                        idPost  : idPost,
                        comment : comment
                    }
                ).then(result => {
                    this.comment = ''
                    this.getComment()
                }) 
            }
        }
    }
}
</script>