<template>
  <div class="home">
      
    <HeaderComponent></HeaderComponent>
    
    <div class='row p-5 mt-5'>
      <UserActivitiesComponent  type="home"></UserActivitiesComponent> 
    </div>
  
  </div>
</template>

<script>
  import HeaderComponent from "@/components/header.vue";
  import UserActivitiesComponent from "@/components/userActivities.vue";

  export default {
    name: "home",
      components: {
        HeaderComponent,
        UserActivitiesComponent
    }
  };
</script>
