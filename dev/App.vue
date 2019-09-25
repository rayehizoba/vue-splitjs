<template lang="html">
  <div style="height: 90vh">
    <vue-split
      :elements="[
        '#slotOne',
        '#slotTwo'
      ]"
      direction="vertical"
      :min-size="100"
      :gutter-size="10"
      :snap-offset="50"
      @onDragStart="onDragStart"
      @onDrag="onDrag"
      @onDragEnd="onDragEnd"
    >
      <div id="slotOne">
        <h2>hello world</h2>
      </div>
      <div id="slotTwo">
        <vue-split
          :elements="[
            '#foo',
            '#bar'
          ]"
          @onDragStart="onDragStart"
          @onDrag="onDrag"
          @onDragEnd="onDragEnd"
        >
          <div id="foo">
            <h2>foo</h2>
          </div>
          <div id="bar">
            <h2>bar</h2>
          </div>
        </vue-split>
      </div>
    </vue-split>
  </div>
</template>
 
<script type="text/javascript">
import VueSplit from '../src/index.js';

export default {
  components: {
    VueSplit
  },
  methods: {
    onDragStart(arg) {
      console.log('onDragStart', arg);
    },
    onDrag(arg) {
      console.log('onDrag', arg);
    },
    onDragEnd(arg) {
      console.log('onDragEnd', arg);
    }
  }
};
</script>