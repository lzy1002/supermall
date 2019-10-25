<template>
  <div class="comment-info">
    <div class="comment-title">
      <span>用户评价</span><span>更多</span>
    </div>
    <div class="comment-message">
      <div class="user">
        <img :src="commentinfo.user.avatar" alt="">
        <span>{{commentinfo.user.uname}}</span>
      </div>
      <p class="message">{{commentinfo.content}}</p>
      <p class="info"><span>{{commentinfo.created | showDate}}</span><span>{{commentinfo.style}}</span></p>
      <div class="imgs">
        <img v-for="item in commentinfo.images" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentinfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.commentinfo);
    },
    filters: {
      showDate(value){
        const date = new Date(value * 1000);
        return formatDate(date, "yyyy-MM-dd");
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px;
    width: 100%;
    border-bottom: 5px solid #eee;
  }
  .comment-title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    padding: 0 5px;
  }
  .comment-message {
    padding: 5px;
  }
  .comment-message .user {
    margin-top: 10px;
  }
  .comment-message .user img {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid lightcoral;
    margin-right: 5px;
  }
  .comment-message .message {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  .comment-message .info {
    margin-top: 10px;
    font-size: 14px;
  }
  .comment-message .info span {
    margin-right: 5px;
  }
  .imgs {
    overflow: hidden;
    margin-top: 10px;
  }
  .imgs img {
    width: 30%;
    margin-right: 5px;
  }
</style>
