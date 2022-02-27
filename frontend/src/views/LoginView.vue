<template>
  <div class='row'>
        <div class="login-main-img col-md-8 col-sm-12">
            <img src='@/assets/img/login/fondo.jpg'/>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="login-form">
                <Form @submit="onSubmit">
                    <div class="form-group">
                        <h1><i class="las la-users"></i> TalkFriends</h1>
                    </div>
                    <div class="form-group pb-2">
                        <div class="alert alert-danger" role="alert" v-show="error">
                            {{error}}
                        </div>
                    </div>
                    <div class="form-group pb-2">
                        <label>Email</label>
                        <Field type="email" class="form-control" name="email" :rules="validateEmail" />
                        <ErrorMessage name="email" class="text-danger"/>
                    </div>
                    <div class="form-group pb-3">
                        <label>Contraseña</label>
                        <Field type="password" class="form-control" name="password" :rules="validatePassword"/>
                        <ErrorMessage name="password" class="text-danger"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Ingresar</button>
                    <router-link to="/register" class="btn btn-light">Registrarse</router-link>
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
                error: false,
            }
        },
        components: {
            Form,
            Field,
            ErrorMessage 
        },
        methods: {
            onSubmit(values) {
                api.post('/users/login', values).then(result => {
                    if(result.data.token) {
                        this.error = false;
                        this.$store.commit('setToken', result.data.token)
                        this.$store.commit('setId', result.data.id)
                        this.$store.commit('setUsername', result.data.username)
                        this.$store.commit('setEmail', result.data.email)
                        this.$router.push('/home')
                    } else if(result.data.error){
                        this.error = result.data.error;
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
            validatePassword(value){
                if (!value) {
                    return 'Este campo es requerido';
                }

                return true;
            }
        },
    }
</script>

<style>

</style>