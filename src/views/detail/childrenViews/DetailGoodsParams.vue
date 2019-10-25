<template>
  <div class="goods-params">
    <table class="size" cellspacing="0" cellpadding="0">
      <tr v-for="(item1, index) in goodsparams.sizes[0]">
        <td v-for="(item2, index) in item1">{{item2}}</td>
      </tr>
    </table>
    <table class="info" cellspacing="0" cellpadding="0">
      <tr v-for="(item, index) in goodsparams.infos">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsParams",
    props: {
      goodsparams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      console.log(this.goodsparams);
    }
  }
</script>

<style scoped>
  .goods-params {
    padding: 5px;
  }

  .size {
    width: 100%;
  }

  .size tr {
    height: 50px;
  }

  .size tr td {
    width: 20%;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  .info {
    width: 100%;
  }

  .info tr {
    height: 50px;
  }

  .info tr td:first-child {
    width: 25%;
    text-align: center;
  }

  .info tr td:last-child {
    color: lightcoral;
  }

  .info tr td {
    border-bottom: 1px solid #ccc;
  }
</style>
