<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li 
      v-for="title in tabTitles" 
      :key="title"
      :class="{ selected: title == selectedTitle }"
      @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    
    <slot />
  </div>
</template>

<script>
import { provide, ref } from 'vue'
export default {
  setup (props, { slots }) {
    //use map array
    const tabTitles = ref(slots.default().map((tab)=>tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide("selectedTitle", selectedTitle)
    return{
      selectedTitle,
      tabTitles
    }
  }

}
</script>

<style scoped>
.tabs{
  max-width: 100%;
  margin: 0 auto;
  position: sticky; /* Makes the header sticky */
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
 
}
.tabs__header{
  margin-bottom: 0;
  list-style: none;
  padding: 0;
  display: flex;
  position: sticky; /* Makes the header sticky */
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
 
}

.tabs__header li {
  width: 400px;
  text-align: center;
  padding: 10px;
  margin-right: 0;
  background-color: #ddd;
  cursor: pointer;
  transition: 0.4s all ease-out;
  position: sticky; /* Makes the header sticky */
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */

 
}

.tabs__header li.selected {
  background-color: #0984e3;
  color: white;
  position: sticky; /* Makes the header sticky */
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */

}
</style>