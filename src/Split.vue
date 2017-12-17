<template lang="html">
  <div class="split-container">
    <div class="split" :id="el1">
      <slot name="top-pane"></slot>
    </div>
    <div class="split" :id="el2">
      <slot name="bottom-pane"></slot>
    </div>
  </div>
</template>
 
<script type="text/javascript">
import Split from 'split.js'

export default {
  data() {
    let el1 = this.randStr()
    let el2 = this.randStr()
    return {
      el1: el1,
      el2: el2,
    }
  },

  methods: {
    randStr () {
      let text = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return text
    }
  },

  mounted() {
    Split([`#${this.el1}`, `#${this.el2}`], {
      direction: 'vertical'
    });
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
