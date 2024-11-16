<template>
  <div>
    <!-- The Quill editor container -->
    <div class="container">
      <div ref="editor" class="editor-a4"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Quill from 'quill';
import QuillTableModule from 'quill-table-module';

// Register the table module locally in the component
Quill.register('modules/table', QuillTableModule);

export default {
  name: 'QuillEditor',
  setup() {
    const editor = ref(null);

    // Check if Quill is being initialized correctly
    onMounted(() => {
      if (editor.value) {
        try {
          const quill = new Quill(editor.value, {
            theme: 'snow',
            modules: {
              toolbar: '#toolbar', // Bind your toolbar
              table: true, // Enable table module
            },
          });

          eventBus.on('insertTable', (tableHtml) => {
          const range = quill.getSelection();
          if (range) {
            // Insert the table HTML at the current cursor position
            quill.clipboard.dangerouslyPasteHTML(range.index, tableHtml);
          }
        });
        
        } catch (error) {
          console.error('Error initializing Quill:', error);
        }
      }
    });

    return { editor };
  },
};


</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #F3F3F3;
  margin: 0;
}

.container .ql-editor {
  width: 8.5in;
  min-height: 11in;
  padding: 1in;
  margin: 1rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
  background-color: white;
}

.container .ql-container.ql-snow {
  border: none;
  display: flex;
  justify-content: center;
  
  
}

@page {
  margin: 1in;
}

@media print {
  body {
    background: none;
  }

  .container .ql-editor {
    width: 6.5in;
    height: 9in;
    padding: 0;
    margin: 0;
    box-shadow: none;
    align-self: flex-start;
  }

}
</style>
