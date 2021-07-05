<template>
  <div>
    <h1>my first step</h1>
    <button @click="send">点我试试</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FirstStep',
  data () {
    return {
      zxc: {
        asd: 123,
        qwe: 456
      },
      msg: 'Welcome to my Fiest_step'
    }
  },
  methods: {
    send () {
      axios.patch('url', this.zxc)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
