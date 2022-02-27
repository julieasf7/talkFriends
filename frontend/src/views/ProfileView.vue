<template>
  <div class="profile">
    <HeaderComponent></HeaderComponent>

    <div class="container">
      <div class="profile-page tx-13">
          <div class="row">
              <div class="col-12 grid-margin">
                  <div class="profile-header">
                      <div class="cover">
                          <div class="gray-shade"></div>
                          <figure>
                              <img src="@/assets/img/profile/fondoHeader.jpg" class="img-fluid" alt="profile cover">
                          </figure>
                          <div class="cover-body d-flex justify-content-between align-items-center">
                              <div>
                                  <img class="profile-pic" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="profile">
                                  <span class="profile-name">{{ username }}</span>
                              </div>
                              <div class="d-none d-md-block">
                                  <router-link to="/editProfile" class="btn btn-primary"><i class="las la-edit"></i> Editar perfil</router-link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row profile-body">
              <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                  <div class="card rounded">
                      <div class="card-body">
                          <div class="d-flex align-items-center justify-content-between mb-2">
                              <h6 class="card-title mb-0">Acerca de mi</h6>
                          </div>
                          <p>Hi! I'm Amiah the Senior UI Designer at Vibrant. We hope you enjoy the design and quality of Social.</p>
                          <div class="mt-3">
                              <label class="tx-11 font-weight-bold mb-0 text-uppercase">Fecha de nacimiento:</label>
                              <p class="text-muted">November 15, 2015</p>
                          </div>
                          <div class="mt-3">
                              <label class="tx-11 font-weight-bold mb-0 text-uppercase">Donde vive:</label>
                              <p class="text-muted">New York, USA</p>
                          </div>
                          <div class="mt-3">
                              <label class="tx-11 font-weight-bold mb-0 text-uppercase">Email:</label>
                              <p class="text-muted"> {{ email }}</p>
                          </div>
                          <div class="mt-3">
                              <label class="tx-11 font-weight-bold mb-0 text-uppercase">Sitio Web:</label>
                              <p class="text-muted">www.nobleui.com</p>
                          </div>
                      </div>
                  </div>

                   <div class="card rounded mt-2">
                        <div class="card-body">
                            <h6 class="card-title">Amigos</h6>
                            
                            <div class="d-flex justify-content-between mb-2 pb-2 border-bottom" v-for="friends in userFriends" :key="friends.idfriends">
                                <div class="d-flex align-items-center hover-pointer">
                                    <img class="img-xs rounded-circle" v-bind:src="'https://bootdey.com/img/Content/avatar/avatar'+ (( count == 7 )? count = 1 : count += 1 )+'.png'" alt="">
                                    <div class="ml-2">
                                        {{ friends.fullName }}
                                    </div>
                                </div>
                                <button class="btn btn-icon" v-on:click="deleteFriends(friends.idfriends)">
                                    <h3><i class="las la-user-minus"></i></h3>
                                </button>
                            </div>

                        </div>
                    </div>
                  
              </div>
              
              <div class="col-md-8 col-xl-6 middle-wrapper">
                <div class="row">
                  <Form @submit="addPost">
                    <div class="form-group pb-2">
                        <div class="alert alert-info" role="alert" v-show="message">
                            {{message}}
                        </div>
                    </div>
                    <div class="form-group pb-2">
                        <label>Que estas pensando?</label>
                        <Field type="text" class="form-control" name="activity" :rules="validateRequire" v-model="activity"/>
                        <ErrorMessage name="activity" class="text-danger"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Publicar</button>
                  </Form>
                  <UserActivitiesComponent type="profile"></UserActivitiesComponent>
                </div>
              </div>

              <div class="d-none d-xl-block col-xl-3 right-wrapper">
                  <div class="row">
                      <div class="col-md-12 grid-margin">
                          <div class="card rounded">
                              <div class="card-body">
                                  <h6 class="card-title">Sugerencias para ti</h6>
                                  
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom" v-for="users in userList" :key="users.userId">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" v-bind:src="'https://bootdey.com/img/Content/avatar/avatar'+ (( count == 7 )? count = 1 : count += 1 )+'.png'" alt="">
                                          <div class="ml-2">
                                              {{ users.fullName }}
                                          </div>
                                      </div>
                                      <button class="btn btn-icon" v-on:click="addFriends(users.userId)">
                                          <h2><i class="las la-user-plus"></i></h2>
                                      </button>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import api from '@/api.js'
  import HeaderComponent from "@/components/header.vue";
  import UserActivitiesComponent from "@/components/userActivities.vue";

  export default {
    name: "profile",
    data() {
        return {
            username     : this.$store.getters.username,
            email        : this.$store.getters.email,
            userList     : null,
            userFriends  : null,
            activity     : null,
            message      : null,
            count        : 0
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        HeaderComponent,
        UserActivitiesComponent
    },
    created(){
        this.getListUsers()
        this.getListFriends()
    },
    methods: {
        getListUsers(){
            api.post(
                '/users/listUsers', 
                {
                    userId : this.$store.getters.loggedId
                }
            ).then(result => {
                this.userList = result.data
            }) 
        },
        getListFriends(){
            api.post(
                '/friends/listFriends', 
                {
                    userId : this.$store.getters.loggedId
                }
            ).then(result => {
                this.userFriends = result.data
            }) 
        },
        deleteFriends(value){
            api.post(
                '/friends/deleteFriends', 
                {
                    idFriends : value
                }
            ).then(result => {
                this.getListUsers()
                this.getListFriends()
            }) 
        },
        addFriends(value){
            api.post(
                '/friends/addFriends', 
                {
                    userId    : this.$store.getters.loggedId,
                    userIdAdd : value
                }
            ).then(result => {
                this.getListUsers()
                this.getListFriends()
            })
        },
        addPost(value, actions){
            this.message = ""
            api.post(
                '/post/addPost', 
                {
                    userId      : this.$store.getters.loggedId,
                    description : value.activity
                }
            ).then(result => {
                 actions.setFieldValue('activity', '');
                 this.message = "Post Generado. Por favor, espere un momento para visualizarlo en su perfil"
            })
        },
        validateRequire(value){
            if (!value) {
                return 'Este campo es requerido';
            }

            return true;
        },
    },
  };
</script>
