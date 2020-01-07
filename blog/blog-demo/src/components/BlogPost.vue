<template>
  <div class="blogpost" :class="{hightlighted: post.hightlighted}">
    <h2>{{post.title}}</h2>
    <p v-if="post.hightlighted">This post is hightlight</p>
    <p>{{post.body}}</p>
    <p class="meta">Written by {{post.author}} on {{date}}</p>
  </div>
</template>

<script lang='ts'>
  import { Vue, Prop, Component } from 'vue-property-decorator';
  
  export interface Post {
    title: string;
    body: string;
    author: string;
    datePosted: Date;
    hightlighted?: boolean;
  }
  @Component
  export default class BlogPost extends Vue {
    @Prop() private post!: Post;
    //  相当于
    // props: {
    //   type: String,
    //   default:''
    // }

    // computed
    get date() {
      return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`;
    }
  }
</script>

<style lang="stylus">
.blogpost
  width 400px
  margin 0 auto
  h2
    text-decoration underline
  .meta
    font-style italic
.hightlighted
  border 1px solid #f4d942
  background #fff3b2

</style>