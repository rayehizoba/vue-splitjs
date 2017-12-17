<template lang="html">
  <div style="height: 100vh">
    <vue-splitjs>
      <div slot="top-pane">
        <h2>world</h2>
      </div>
      <div slot="bottom-pane">
        <h2>world</h2>
      </div>
    </vue-splitjs>
  </div>
</template>
 
<script type="text/javascript">
import VueSplitjs from '../src/index.js'
 
export default{
  components:{
    VueSplitjs
  }
}
</script>