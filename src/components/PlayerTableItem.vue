<template>
  <td>{{ player.firstname }}</td>
  <td>{{ player.lastname }}</td>
  <td><div class="color-box player-color"></div></td>
</template>

<script>
export default {
  name: "PlayerTableItem",
  props:{
    player: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
.color-box{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: v-bind('player.color');
}
</style>