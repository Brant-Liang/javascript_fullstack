<template>
  <div id="app">
    <div id="nav">
      <h1>Brant's blog</h1>
      <button @click="showHide">show/hide hightlighted post</button>
      <BlogPost v-for="blogPost in blogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script lang='ts'>
  import BlogPost, { Post } from './components/BlogPost.vue';
  import { Component, Vue} from 'vue-property-decorator';
  @Component({
    components: {
      BlogPost,
    },
  })
  export default class App extends Vue {
    private blogPosts: Post[] = [
      {
        title: 'MY FIRST BLOGPOST EVER!',
        body: 'welcome to my first blog!',
        author: 'brant',
        datePosted: new Date(2020, 1, 7),
      },
      {
        title: 'MY SECOND BLOGPOST EVER!',
        body: 'welcome to my second blog!',
        author: 'brant',
        datePosted: new Date(2020, 1, 8),
        hightlighted: true,
      },
      {
        title: 'MY THIRD BLOGPOST EVER!',
        body: 'welcome to my third blog!',
        author: 'brant',
        datePosted: new Date(2020, 1, 9),
      },
    ];
    public showHighLighted: boolean = true;
    get visibleBlogPosts() {
      return this.blogPosts.filter((post: Post) => post.hightlighted === undefined || post.hightlighted === this.showHighLighted);
    }
    public showHide() {
      this.showHighLighted = !this.showHighLighted;
    }
  }
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
