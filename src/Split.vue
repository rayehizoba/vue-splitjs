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
      // Array of target split element ids
      type: Array,
      required: true,
      validator(value) {
        // must be array of strings
        const isValid = value.every(i => typeof i === "string")
        if (!isValid) {
          console.error(`VueSplitJs: Invalid elements - "${value}". Must be array of strings`)
        }
        return isValid
      }
    },

    direction: {
      // Direction to split: horizontal or vertical.
      type: String,
      default: 'horizontal',
      validator(value) {
        let allowedValues = ['horizontal', 'vertical']
        const isValid = allowedValues.includes(value)
        if (!isValid) {
          console.error(`VueSplitJs: Invalid direction - "${value}". Possible values are "horizontal" or "vertical"`)
        }
        return isValid
      }
    },

    sizes: {
      // Initial sizes of each element in percents.
      type: Array,
      default: null,
      validator(value) {
        // must be array of numbers
        const isValid = value.every(i => typeof i === "number")
        if (!isValid) {
          console.error(`VueSplitJs: Invalid sizes - "${value}". Must be array of numbers`)
        }
        return isValid
      }
    },

    minSize: {
      // Minimum size of each element.
      type: [Number, Array],
      default: 100
    },

    gutterSize: {
      // Gutter size in pixels.
      type: Number,
      default: 10
    },

    snapOffset: {
      // Snap to minimum size offset.
      type: Number,
      default: 30
    },

    cursor: {
      // Cursor to display while dragging.
      type: String,
      default: 'grabbing'
    }
  },

  mounted () {
    Split(this.elements, {
      direction: 'vertical'
    })
  },

  methods: {
    onDrag() {
      this.$emit('drag')
    },

    onDragEnd() {
      this.$emit('dragEnd')
    },

    onDragStart() {
      this.$emit('dragStart')
    }
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
