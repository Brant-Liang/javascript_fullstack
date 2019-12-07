<template>
  <button :class="'i-button-size' + size" @click="handleClick">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, arr){
  if(arr.includes(value)) return true
  else return false
}

export default {
  props: {
    size: {
      // type: String,
      //校验父组件传入的值是否为特定的值
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data() {
    return {
      message: '子组件的内容'
    }
  },
  methods: {
    handleClick () {
      this.$emit('on-click')
    },
    confirm (){
      // console.log('123');
      this.$emit('message', this.message)
    }
  }
};
</script>

<style scoped>
button {
  border: 1px solid orange;
  background-color: yellow;
  color: rgb(255, 255, 255);
  border-radius: 5px;
}
.i-button-sizelarge {
  padding: 8px 10px;
}
.i-button-sizedefult{
  padding: 6px 8px;
}
.i-button-sizesmall{
  padding: 4px 6px;
}
</style>