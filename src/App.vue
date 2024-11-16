<template>
  
    <TabsWrapper>
      <Tab title= "File">
         <!-- Inside File Tab, include tool components -->
       New File
      </Tab>
      
      <Tab title= "Home">
        <div>
          <HomeTools />  <!-- Your toolbar component goes here -->
          
        </div>
      </Tab>
      <Tab title= "Insert">
        Insert 
      </Tab>
      <Tab title= "Design">
        Design
      </Tab>
      <Tab title= "Layout">
        Layout
      </Tab>
      <Tab title= "Reference">
        Reference
      </Tab>
      <Tab title= "Mailings">
        Mailings
      </Tab>
      <Tab title= "Review">
        Review
      </Tab>
      <Tab title= "View">
        View 
      </Tab>
    </TabsWrapper>
   
    <QuillEditor />

</template>
<script setup>

import Tab from './components/Tab.vue';
import TabsWrapper from './components/TabsWrapper.vue';
import HomeTools from './components/tools/HomeTools.vue';  
import QuillEditor from './components/QuillEditor.vue';

</script>
<style>
#app {
  width: 100%;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
  background-color: #F3F3F3;
}
</style>