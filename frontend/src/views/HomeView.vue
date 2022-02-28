<template>
  <div class="home">
      
    <HeaderComponent></HeaderComponent>
    
    <div class='row p-5 mt-5'>
      <UserActivitiesComponent :key="activites" type="home"></UserActivitiesComponent> 
    </div>
  
  </div>
</template>

<script>
  import HeaderComponent from "@/components/header.vue";
  import UserActivitiesComponent from "@/components/userActivities.vue";

  export default {
    name: "home",
      data() {
          return {
              activites : true
          }
      },
      mounted(){ 
        setTimeout(function () { this.activites = this.activites? false:true }.bind(this), 30000)
      },
      components: {
        HeaderComponent,
        UserActivitiesComponent
    }
  };
</script>
