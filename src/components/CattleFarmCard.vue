<template>
  <div class="cow-card">
    <div class="card-title">{{data.name}}</div>
    <div class="card-body">
      <div class="cow-count">{{data.cow}}</div>
      <div class="cow-unit">奶牛(头)</div>
      <div class="count-list">
        <div class="list-item">
          <div class="list-count">{{data.c}}</div>
          <div class="list-unit">牛场(个)</div>
        </div>
        <div class="list-item list-line">
          <div class="list-count">{{data.n}}</div>
          <div class="list-unit">年产奶量(万吨)</div>
        </div>
        <div class="list-item">
          <div class="list-count">{{data.t}}</div>
          <div class="list-unit">成乳牛(头)</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return { name: "延庆", cow: 9159, c: 10, n: 3.26, t: 5282 };
      }
    }
  }
};
</script>
<style lang="less" >
.cow-card {
  display: inline-block;
  text-align: center;
  opacity: 0.75;
  margin: 0 10px 30px;
  .card-title {
    font-size: 32px;
    line-height: 2;
  }
  .card-body {
    background: #0c0f22;
    border: 2px solid #ffffff;
    width: 390px;
    height: 220px;
    padding: 20px;
    .cow-count {
      font-size: 48px;
      line-height: 1.2;
    }
    .cow-unit {
      color: #b4b4b4;
      font-size: 24px;
    }
    .count-list {
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
    }
    .list-line {
      border-left: 1px solid #929292;
      border-right: 1px solid #929292;
      padding: 0 30px;
    }
    .list-count {
      font-size: 32px;
    }
    .list-unit {
      color: #b4b4b4;
      font-size: 16px;
    }
  }
}
</style>
