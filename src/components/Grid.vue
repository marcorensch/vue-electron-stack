<template>
  <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid uk-scrollspy="target: >div; cls: uk-animation-fade; delay:100">
    <div v-for="(player, index) in players" :key="index">
      <div class="uk-card uk-card-default uk-card-small uk-card-body" :style="'border-top:3px solid '+player.color">
        <div class="uk-card-title">
          <h3>{{ player.firstname }} {{ player.lastname }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props:{
    players: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>