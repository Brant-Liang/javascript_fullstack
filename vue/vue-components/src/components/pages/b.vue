<template>
  <div class="b-test">B{{name}}
    <div>
      <testC></testC>
    </div>
  </div>
</template>

<script>
import C from './c'
export default {
  inject: ['name'],
  mounted() {
    console.log(this.name);
  },
  components: {
    'testC': C
  }
}
</script>

<style>

</style>