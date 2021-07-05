<template>
  <div class="my-input">
    <input type="text" @input="handleInput"  v-model="val">
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      val: null
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.val)
    }
  },
  model: {
    prop: 'val',
    event: 'input'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-input{
    height:20px;
    width:100px;
    border:1px solid #ddd;
  }
</style>
