<template>
  <div class="header">
    <div class="header-l"></div>
    <div class="header-input">
      <input type="text" name="" id="">
    </div>
    <div class="header-right">
      {{this.city}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
export default {
  data() {
    return {
      city: 'Beijin'
    }
  },
}
</script>

<style>

</style>