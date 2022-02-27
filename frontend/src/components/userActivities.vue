<template>
    <div class="userActivities">
    <div class="i" v-for="post in postList" :key="post.idpost">
        <div class="image">
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" width="44" height="44">
        </div>
        <div class="activityContent">
            <ul class="simpleListings status">
                <li>
                <div class="title">
                    <a>{{ post.fullName }}</a>
                </div>
                <div class="info">{{ post.date }}</div>
                <p>{{ post.description }}</p>
                <div class="share">
                    <a href="#" title="#"><i class="las la-comments"></i> 14 comments</a>
                </div>
                </li>
            </ul>
        

            <!-- Comments -->
            <ul class="simpleListings comments">
                <li class="showComments">
                <a href="#" title="#"><i class="las la-comments"></i> Ver comentarios</a>
                </li>
                <li>
                <a href="#" title="#" class="image">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" width="44" height="44">
                </a>
                <div class="c">
                    <div class="title"><a href="#" title="#">Jessica Whore</a></div>
                    <div class="info">4 hours ago</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien at risus commodo varius vel ut sapien. Aenean sodales non ex et venenatis. In hac habitasse platea dictumst. Donec vitae tellus non erat dapibus hendrerit. Class aptent taciti bold text lorem ipsum per conubia nostra, per inceptos.</p>
                </div>
                </li>
                <li>
                <a href="#" title="#" class="image">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" width="44" height="44">
                </a>
                <div class="c">
                    <div class="title"><a href="#" title="#">Muhammad Motherfucker II.</a></div>
                    <div class="info">3 hours ago</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </li>
                <li>
                <a href="#" title="#" class="image">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="#" width="44" height="44">
                </a>
                <div class="c">
                    <form>
                    <textarea rows="1" placeholder="Start typing here..." class="form-control js-autogrow" style="overflow: hidden; word-wrap: break-word; height: 42px;"></textarea>
                    <button type="submit" class="btn btn-sm btn-primary">Comentar</button>
                    </form>
                </div>
                </li>
            </ul> 
        </div>
    </div>
    </div>
</template>

<script>
import api from '@/api.js'

export default {
    name: "UserActivitiesComponent",
    props: {
        type: {
            type:String,
            default:"default"
        },
    },
    data() {
        return {
            postList: null,
        }
    },
    created(){
        this.getPost()
    },
    mounted(){ 
        setTimeout(() => this.getPost(), 60000)
    },
    methods: {
        getPost(){
            if(this.type == 'profile'){
                this.getPostProfile();
            }

            if(this.type == 'home'){
                this.getPostHome();
            }
        },
        getPostProfile(){
            api.post(
                '/post/getPostProfile', 
                {
                    userId : this.$store.getters.loggedId
                }
            ).then(result => {
                this.postList = result.data
            }) 
        },
        getPostHome(){
            api.post(
                '/post/getPostHome', 
                {
                    userId : this.$store.getters.loggedId
                }
            ).then(result => {
                this.postList = result.data
            }) 
        }
    }
}
</script>