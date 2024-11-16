<template>
  <div class="tab-content" v-show="title == selectedTitle">
   
    <slot />
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  props: ['title'], 
  setup () {
    const selectedTitle = inject("selectedTitle")

    return{
      selectedTitle
    }
  }
  
}
</script>

<style scoped>
.tabs-content{
  max-height: 100%;
  padding: 20px;
  box-shadow: 0 3px 5px 5px rgb(0, 0, 0, 0.05);
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
  background-color: #F3F3F3;
}
</style>