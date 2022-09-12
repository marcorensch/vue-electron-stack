<template>
  <div>
    <h1>Players</h1>
    <Grid :players="players" />
  </div>
</template>

<script>
import Grid from "@/components/Grid";

export default {
  name: "GridView",
  components: { Grid },
  data() {
    return {
      players: []
    }
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
    getPlayers() {
      window.ipcRenderer.invoke("getPlayers",null).then((players) => {
        this.players = players
      });
    }
  },
}
</script>

<style scoped>

</style>