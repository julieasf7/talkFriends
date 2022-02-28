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
            <Form @submit="addComment">
            <div class="c">
                <Field type="comment" v-model="commentText" placeholder="Ingrese su comentario" class="form-control js-autogrow" name="comment" :rules="validateRequire" />
                <ErrorMessage name="comment" class="text-danger"/>
                <button type="submit" class="btn btn-sm btn-primary">Comentar</button>                    
            </div>
            </Form>
        </li>
    </ul> 
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import api from '@/api.js'

export default {
    name: "CommentsComponent",
    props: {
        post: {
            type    : Number,
            default : 0
        },
    },
     components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            commentList : null,
            commentText : null,
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
        addComment(values, actions){
            api.post(
                '/comments/addComment', 
                {
                    userId  : this.$store.getters.loggedId,
                    idPost  : this.post,
                    comment : values.comment
                }
            ).then(result => {
                actions.setFieldValue('commentText', '')
                this.getComment()
            }) 
        },
        validateRequire(value){
            if (!value) {
                return 'Este campo es requerido';
            }

            return true;
        },
    }
}
</script>