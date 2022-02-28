<template>
  <div class="profile">
    <HeaderComponent></HeaderComponent>

    <div class='row'>
      <div class="col-md-3 col-sm-3"></div>
        <div class="col-md-6 col-sm-6">
            <div class="register-form">
                <Form @submit="onSubmit">
                    <div class="form-group">
                        <h1><i class="las la-users"></i> Datos de perfil</h1>
                        <Field type="hidden" class="form-control" name="numProfile" v-model="numProfile"/>
                        <Field type="hidden" class="form-control" name="user" v-model="user"/>
                    </div>
                    <div class="form-group pb-2">
                        <label>Acerca de mi</label>
                        <Field type="text" class="form-control" name="about" :rules="validateRequire" v-model="about"/>
                        <ErrorMessage name="about" class="text-danger"/>
                    </div>
                    <div class="form-group pb-2">
                        <label>Fecha de nacimiento *</label>
                        <Field type="date" class="form-control" name="date" :rules="validateRequire" v-model="date"/>
                        <ErrorMessage name="date" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Donde vive *</label>
                        <Field type="text" class="form-control" name="live" :rules="validateRequire" v-model="live"/>
                        <ErrorMessage name="live" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Sitio web *</label>
                        <Field type="text" class="form-control" name="site" :rules="validateRequire" v-model="site"/>
                        <ErrorMessage name="site" class="text-danger"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Guardar</button>
                    <router-link to="/profile" class="btn btn-light">Cancelar</router-link>
                </Form>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import api from '@/api.js'
  import HeaderComponent from "@/components/header.vue";

  export default {
    name: "profile",
    data() {
        return {
            about      : null,
            numProfile : null,
            date       : null,
            live       : null,
            site       : null,
            user       : this.$store.getters.loggedId
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        HeaderComponent
    },
    created(){
        this.getProfile()
    },
    methods: {
        onSubmit(values) {
            if(!values.numProfile){
                api.post('profile/addProfile', values).then(result => {
                    if(result.data) {
                        this.$router.push('/profile')
                    } else if(result.data.error){
                        alert(result.data.error)
                    }
                })
            } else {
                api.post('profile/updateProfile', values).then(result => {
                    if(result.data) {
                        this.$router.push('/profile')
                    } else if(result.data.error){
                        alert(result.data.error)
                    }
                })
            }
        },
        getProfile() {
            api.post(
                '/profile/getInfo', 
                {
                    userId : this.$store.getters.loggedId
                }
            ).then(result => {
                if(result.data) {
                    this.about      = result.data.about
                    this.numProfile = result.data.idprofile
                    this.date       = result.data.birthdayDate
                    this.live       = result.data.live
                    this.site       = result.data.web
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