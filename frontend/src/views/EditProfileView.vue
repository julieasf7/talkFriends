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
                    </div>
                    <div class="form-group pb-2">
                        <label>Acerca de mi</label>
                        <Field type="text" class="form-control" name="about" :rules="validateRequire" />
                        <ErrorMessage name="about" class="text-danger"/>
                    </div>
                    <div class="form-group pb-2">
                        <label>Fecha de nacimiento *</label>
                        <Field type="date" class="form-control" name="date" :rules="validateRequire" />
                        <ErrorMessage name="date" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Donde vive *</label>
                        <Field type="text" class="form-control" name="live" :rules="validateRequire" />
                        <ErrorMessage name="live" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Sitio web *</label>
                        <Field type="text" class="form-control" name="site" :rules="validateRequire"/>
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
      components: {
        Form,
        Field,
        ErrorMessage,
        HeaderComponent
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