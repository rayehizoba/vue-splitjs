<p align="center">
  <img width="100" src="./assets/vue.png">
  <img width="300" src="./assets/splitjs.svg">
</p>

# vue-splitjs
tiny unopinionated utility for resizeable split views, based on [split.js](https://github.com/nathancahill/Split.js)

## Compatibility
Compatible with Vue.js 2.x

## Install
`npm install vue-splitjs --save`

Or if you want to use it directly in the browser add
```html
<script src="https://unpkg.com/vue-splitjs/dist/vue-splitjs.min.js"></script>
```
to your scripts

### Browser

## How to use
You can import and register component globally
```javascript
import VueSplit from 'vue-splitjs'
Vue.use(VueSplit)
```
or from a component
```javascript
// MyComponent.vue
import VueSplit from 'vue-splitjs'

export default {
  components: { VueSplit },
  // ...
}
```
You can use it in your vue app like this
```html
<template>
  <vue-split
    :elements="[
      '#slotOne',
      '#slotTwo'
    ]"
    direction="vertical"
    :min-size="100"
    :gutter-size="10"
    :snap-offset="50"
  >
    <div id="slotOne">
      <h2>foo</h2>
    </div>
    <div id="slotTwo">
      <h2>bar</h2>
    </div>
  </vue-split>
</template>
```