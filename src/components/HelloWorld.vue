<template>
  <div class="hello">
    <my-input v-model="val" />
    <div>{{val}}</div>
  </div>
</template>

<script>
import myInput from './my-input'
export default {
  name: 'HelloWorld',
  components: {
    myInput
  },
  data () {
    return {
      val: 'haha'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
