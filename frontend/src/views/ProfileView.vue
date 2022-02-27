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
                                  <span class="profile-name">Amiah Burton</span>
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
                              <p class="text-muted">me@nobleui.com</p>
                          </div>
                          <div class="mt-3">
                              <label class="tx-11 font-weight-bold mb-0 text-uppercase">Sitio Web:</label>
                              <p class="text-muted">www.nobleui.com</p>
                          </div>
                      </div>
                  </div>
              </div>

              
              <div class="col-md-8 col-xl-6 middle-wrapper">
                <div class="row">
                  <Form @submit="onSubmit">
                    <div class="form-group pb-2">
                        <label>Que estas pensando?</label>
                        <Field type="text" class="form-control" name="activity" :rules="validateRequire" />
                        <ErrorMessage name="activity" class="text-danger"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Publicar</button>
                  </Form>
                  <UserActivitiesComponent></UserActivitiesComponent>
                </div>
              </div>

              <div class="d-none d-xl-block col-xl-3 right-wrapper">
                  <div class="row">
                      <div class="col-md-12 grid-margin">
                          <div class="card rounded">
                              <div class="card-body">
                                  <h6 class="card-title">Sugerencias para ti</h6>
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>
                                  <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                      <div class="d-flex align-items-center hover-pointer">
                                          <img class="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="">
                                          <div class="ml-2">
                                              Mike Popescu
                                          </div>
                                      </div>
                                      <button class="btn btn-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" data-toggle="tooltip" title="" data-original-title="Connect">
                                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                              <circle cx="8.5" cy="7" r="4"></circle>
                                              <line x1="20" y1="8" x2="20" y2="14"></line>
                                              <line x1="23" y1="11" x2="17" y2="11"></line>
                                          </svg>
                                      </button>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- right wrapper end -->
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
      components: {
        Form,
        Field,
        ErrorMessage,
        HeaderComponent,
        UserActivitiesComponent
    },
    methods: {
        onSubmit(values) {
            api.post('/users/register', values).then(result => {
                if(result.data.token) {
                    this.$store.commit('setToken', result.data.token)
                    this.$store.commit('setId', result.data.id)
                    this.$store.commit('setUsername', result.data.username)
                    this.$router.push('/home')
                } else if(result.data.error){
                    alert(result.data.error);
                }
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
