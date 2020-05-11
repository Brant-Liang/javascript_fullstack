<template>
  <div class="home">
    <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addClass">添加</el-button>
    <v-table></v-table>
    <v-form></v-form>
  </div>
</template>

<script>
// @ is an alias to /src
import vTable from '../components/Table'
import vForm from '../components/form'
export default {
  name: 'Home',
  components: {
    vTable,
    vForm
  },
  methods: {
    addClass () {
    }
  }
}
</script>

<style scoped>
  el-button {
    position: absolute;
    right: 0;
  }
</style>
