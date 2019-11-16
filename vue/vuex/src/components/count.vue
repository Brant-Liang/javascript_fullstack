<template>
  <div class="count">
    {{count}}
    <button @click="addAction(10)">+</button>
    <button @click="minusAction">-</button>
    {{getCount}}
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      //myCount: null
    }
  },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  //computed: mapState (['count']),
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
    
  },
  methods: {
    ...mapMutations([
      'add',
      'minus'
    ]),
    ...mapActions([
      'addAction',
      'minusAction'
    ])
    // test () {
    //   this.myCount++;
    // }
  }
}
</script>

<style>

</style>