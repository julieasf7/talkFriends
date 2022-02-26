<template>
  <div class='row'>
        <div class="login-main-img col-md-8 col-sm-12">
            <img src='@/assets/img/login/fondo2.jpg'/>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="register-form">
                <Form @submit="onSubmit">
                    <div class="form-group">
                        <h1><i class="las la-users"></i> Registrarse</h1>
                    </div>
                    <div class="form-group pb-2">
                        <label>Nombre completo *</label>
                        <Field type="text" class="form-control" name="fullName" :rules="validateRequire" />
                        <ErrorMessage name="fullName" class="text-danger"/>
                    </div>
                    <div class="form-group pb-2">
                        <label>Email *</label>
                        <Field type="email" class="form-control" name="email" :rules="validateEmail" />
                        <ErrorMessage name="email" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Contraseña *</label>
                        <Field type="password" class="form-control" name="password" :rules="validateRequire" v-model="password"/>
                        <ErrorMessage name="password" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Confirmar contraseña *</label>
                        <Field type="password" class="form-control" name="password2" :rules="validatePassword"/>
                        <ErrorMessage name="password2" class="text-danger"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Registrar</button>
                    <router-link to="/" class="btn btn-light">Iniciar sesion</router-link>
                </Form>
            </div>
        </div>
  </div>
</template>

<script>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import api from '@/api.js'

    export default {
        data() {
            return {
                password: "",
            }
        },
        components: {
            Form,
            Field,
            ErrorMessage 
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
            validateEmail(value) {
                if (!value) {
                    return 'Este campo es requerido';
                }
                
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'Este campo debe ser un Email valido';
                }
                
                return true;
            },
            validateRequire(value){
                if (!value) {
                    return 'Este campo es requerido';
                }

                return true;
            },
            validatePassword(value){
                if (!value) {
                    return 'Este campo es requerido';
                }

                if(this.password != value){
                    return 'Los campos de contraseña no coinciden';
                }

                return true;
            }
        },
    }
</script>

<style>

</style>