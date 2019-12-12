<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @on-click="log">
      <i slot="icon">*</i>
      按钮
    </i-button>
    <i-button size="small" @on-click="log2">提交</i-button>
    <!-- <div @click="oConfirm">
      <i-button size="default" ref="confirm">确认</i-button>
    </div> -->
    <i-button size="default" ref="confirm" @click.native="oConfirm" @message="message">确认</i-button>
    <button @click="showToast">toast</button>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    log() {
      console.log('hello');
      
    },
    log2 () {
      console.log('你好');
      
    },
    oConfirm () {
      this.$refs.confirm0.confirm()
    },
    message(e) {
      console.log(e);
      
    },
    showToast(e){
      console.log(this);
      
      this.$toast('网络异常')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
