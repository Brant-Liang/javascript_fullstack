<template>
  <div class="a-test">A
    <testB></testB>
  </div>
</template>

<script>
import B from './b'
export default {
  provide:{
    name: 'Brant'
  },
  components: {
    'testB': B
  }
}
</script>

<style>

</style>