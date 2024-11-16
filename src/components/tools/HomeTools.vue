<template>
  <div id="toolbar">

     <!-- Copy and Paste Buttons -->
     <button @click="copyText" class="ql-copy"><i class="mdi mdi-format-copy"></i> Copy</button>
    <button @click="pasteText" class="ql-paste"><i class="mdi mdi-format-paste"></i> Paste</button>    

    <!-- Header Dropdown -->
    <select class="ql-header" aria-label="Header Size" @change="applyFormat('header', $event.target.value)">
      <option value="1">H1</option>
      <option value="2">H2</option>
      <option value="3">H3</option>
      <option value="4">H4</option>
      <option value="5">H5</option>
      <option value="6">H6</option>
      <option selected>Normal</option>
    </select>
    
    <!-- Font Dropdown -->
    <select class="ql-font" aria-label="Font" @change="applyFormat('font', $event.target.value)">
      <option selected>Default</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
      <option value="pyidaungsu">Pyidaungsu</option>
      <option value="times-new-roman">Times New Roman</option>
    </select>

    <!-- List Buttons -->
    <button @click="applyFormat('list', 'ordered')" class="ql-list" value="ordered"><i class="mdi mdi-format-list-numbered"></i> Ordered List</button>
    <button @click="applyFormat('list', 'bullet')" class="ql-list" value="bullet"><i class="mdi mdi-format-list-bulleted"></i> Bullet List</button>

    <!-- Formatting Buttons -->
    <button @click="applyFormat('bold', true)" class="ql-bold"><i class="mdi mdi-format-bold"></i> Bold</button>
    <button @click="applyFormat('italic', true)" class="ql-italic"><i class="mdi mdi-format-italic"></i> Italic</button>
    <button @click="applyFormat('underline', true)" class="ql-underline"><i class="mdi mdi-format-underline"></i> Underline</button>

    <!-- Table Button (New) -->
    <button @click="insertTable" class="ql-table"><i class="mdi mdi-table"></i> Insert Table</button>

    
    <!-- Color and text Dropdowns -->
    <select class="ql-color" aria-label="Text Color" @change="applyFormat('color', $event.target.value)">
  <!-- Red Palette -->
  <option value="red" style="background-color: #ff4d4d;">Red</option>
  <option value="#ff6347" style="background-color: #ff6347;">Tomato</option>
  <option value="#f44336" style="background-color: #f44336;">Crimson</option>

  <!-- Green Palette -->
  <option value="green" style="background-color: #4caf50;">Green</option>
  <option value="#32cd32" style="background-color: #32cd32;">Lime Green</option>
  <option value="#228b22" style="background-color: #228b22;">Forest Green</option>

  <!-- Blue Palette -->
  <option value="blue" style="background-color: #2196f3;">Blue</option>
  <option value="#3b8fd2" style="background-color: #3b8fd2;">Sky Blue</option>
  <option value="#1e88e5" style="background-color: #1e88e5;">Light Blue</option>

  <!-- Yellow and Orange Palettes -->
  <option value="yellow" style="background-color: #ffeb3b;">Yellow</option>
  <option value="orange" style="background-color: #ff9800;">Orange</option>
  <option value="#ff5722" style="background-color: #ff5722;">Deep Orange</option>

  <!-- Neutral and Other Colors -->
  <option value="black" style="background-color: #000000; color: white;">Black</option>
  <option value="gray" style="background-color: #9e9e9e;">Gray</option>
  <option value="brown" style="background-color: #795548;">Brown</option>
  <option value="transparent" style="background-color: transparent;">Clear</option>

  <!-- Default Option -->
  <option selected>Default</option>
</select>


    <select class="ql-background" aria-label="Background Color" @change="applyFormat('background', $event.target.value)">
      <option value="yellow"></option>
      <option value="lightblue"></option>
      <option value="lightgreen"></option>
      <option selected></option>
    </select>

    <!-- Script Buttons (Subscript and Superscript) -->
    <button @click="applyFormat('script', 'sub')" class="ql-script" value="sub"><i class="mdi mdi-subscript"></i> </button>
    <button @click="applyFormat('script', 'super')" class="ql-script" value="super"> <i class="mdi mdi-superscript"></i> </button>

    <!-- Alignment Dropdown -->
    <select class="ql-align" aria-label="Text Alignment" @change="applyFormat('align', $event.target.value)">
      <option value="left" selected>Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
      <option value="justify">Justify</option>
    </select>

    <!-- Other Options -->
    <button @click="applyFormat('image', true)" class="ql-image"><i class="mdi mdi-image"></i> Image</button>
    <button @click="applyFormat('blockquote', true)" class="ql-blockquote"><i class="mdi mdi-format-quote-open"></i> Blockquote</button>
    <button @click="applyFormat('code-block', true)" class="ql-code-block"><i class="mdi mdi-code-braces"></i> Code Block</button>
    <button @click="applyFormat('clean', true)" class="ql-clean"><i class="mdi mdi-format-clear"></i> Clear Formatting</button>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus';

export default {
  name: 'HomeTools',

  
  data() {
    return {
      clipboardContent: "", // To store copied text
    };
  },
  methods: {
    // Emit event to apply format when tool is clicked
    applyFormat(type, value) {
      console.log(`Emitting event with type: ${type}, value: ${value}`);
      eventBus.emit('formatChange', { type, value });
      this.$eventBus.emit('formatChange', { type, value });

    },
    insertTable() {
      // Insert a table with 3 rows and 3 columns as an example
      const table = '<table border="1"><tr><td>Row 1, Col 1</td><td>Row 1, Col 2</td><td>Row 1, Col 3</td></tr><tr><td>Row 2, Col 1</td><td>Row 2, Col 2</td><td>Row 2, Col 3</td></tr><tr><td>Row 3, Col 1</td><td>Row 3, Col 2</td><td>Row 3, Col 3</td></tr></table>';
      // Emitting event to insert table into QuillEditor
      eventBus.emit('insertTable', table);
    },

     // Copy text logic
     copyText() {
      const quill = this.$refs.quillEditor.quill;
      const range = quill.getSelection();
      if (range) {
        this.clipboardContent = quill.getText(range.index, range.length);
        alert("Text copied to clipboard!");
      } else {
        alert("No text selected to copy!");
      }
    },
    // Paste text logic
    pasteText() {
      const quill = this.$refs.quillEditor.quill;
      const range = quill.getSelection();
      if (range) {
        quill.insertText(range.index, this.clipboardContent);
        alert("Pasted text!");
      } else {
        alert("Place the cursor to paste the text!");
      }
    },
  },
};
</script>


<style scoped>
#toolbar {
  display: flex;
  flex-wrap: wrap;  /* Allow items to wrap to the next line */
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  background-color: #f5f5f5;
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
 

}

#toolbar button,
#toolbar select {
  margin: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  min-width: 100px;  /* Ensure elements have a minimum width */
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

/* Click effect for buttons */
#toolbar button:active {
  background-color: #e0e0e0;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transform: scale(0.98); /* Slightly shrink to indicate a click */
}

/* Style for selected dropdowns */
#toolbar select:focus {
  background-color: #e0e0e0;
  box-shadow: 0 0 0 2px #007BFF; /* Add a blue outline */
}

/* Adding icon spacing */
#toolbar i {
  margin-right: 5px;
}

#toolbar select {
  max-width: 120px;
}

.ql-toolbar .ql-snow{
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */

}

.container .ql-toolbar .ql-snow{
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1; /* Ensures it's above other elements */
  background-color: #f5f5f5;


}

.ql-font-pyidaungsu {
    font-family: 'Pyidaungsu', sans-serif;
  }
  .ql-font-times-new-roman {
    font-family: 'Times New Roman', serif;
  }

#toolbar .ql-table {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

#toolbar button.ql-table:hover {
  background-color: #e0e0e0;
}

/* Media Query for small screens */
@media (max-width: 768px) {
  #toolbar {
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start;
  }

  #toolbar button,
  #toolbar select {
    width: 100%; /* Make buttons and selects fill the width */
    margin: 5px 0; /* Adjust margins for better spacing */
  }
}

/* Media Query for very small screens (mobile portrait) */
@media (max-width: 480px) {
  #toolbar {
    padding: 5px;
  }

  #toolbar select,
  #toolbar button {
    font-size: 14px; /* Reduce font size for smaller screens */
  }
}
</style>
