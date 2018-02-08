<template lang="html">
  <div class="split-container">
    <slot></slot>
  </div>
</template>
 
<script type="text/javascript">
import Split from 'split.js'

export default {
  props: {
    elements: {
      type: Array,
      validator(value) {
        // validate that prop is an array of strings
        return value.every(i => typeof i === "string")
      }
    }
  },

  mounted () {
    Split(this.elements, {
      direction: 'vertical'
    })
  }
}
</script>

<style>
.split-container {
  height: 100%;
}

.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-vertical {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  cursor: ns-resize;
}

.gutter.gutter-horizontal {
  cursor: ew-resize;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==')
}

.split {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
