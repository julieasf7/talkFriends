<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand m-2" href="#">
            <h3><i class="las la-users"></i> TalkFriends</h3>
            </a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/profile" class="nav-link">Perfil</router-link>
                </li>
                <li class="nav-item">
                    <a href="#" v-on:click="logout" class="nav-link">Cerrar sesion</a>
                </li>
            </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name    : "HeaderComponent",
    methods : {
        logout(){
            this.$store.commit('setToken', null)
            this.$store.commit('setId', null)
            this.$store.commit('setUsername', null)
            this.$router.push('/')
        }
    } 
}
</script>