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
                </li>
            </ul>
        
            <!-- Comments -->
            <CommentsComponent v-bind:post="post.idpost"></CommentsComponent>
        </div>
    </div>
    </div>
</template>

<script>
import api from '@/api.js'

import CommentsComponent from "@/components/comments.vue";

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
            postList: null
        }
    },
    components: {
        CommentsComponent
    },
    created(){
        this.getPost()
    },
    mounted(){ 
        setTimeout(() => this.getPost(), 30000)
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
        },
    }
}
</script>