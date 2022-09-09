<template>
 <PlayersTable :players="players" />
</template>

<script>
export default {
  name: "PlayersTable",
  data() {
    return {
      players: []
    }
  },
  methods: {
    getPlayers() {}
  },
  mounted() {
    this.players = this.getPlayers();
  }
}
</script>

<style scoped>

</style>