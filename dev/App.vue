<template lang="html">
  <div style="height: 100vh">
    <vue-split
      :elements="[
        '#slotOne',
        '#slotTwo'
      ]"
    >
      <div id="slotOne">
        <h2>hello</h2>
      </div>
      <div id="slotTwo">
        <h2>world</h2>
      </div>
    </vue-split>
  </div>
</template>
 
<script type="text/javascript">
  import VueSplit from '../src/index.js'
  
  export default{
    components:{
      VueSplit
    }
  }
</script>