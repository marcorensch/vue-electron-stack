<template>
  <PlayersTable :players="players" />
</template>

<script>
import PlayersTable from "@/components/PlayersTable";

export default {
  name: "PlayersView",
  components: { PlayersTable },
  data() {
    return {
      players: []
    }
  },
  methods: {
    getPlayers() {
      window.ipcRenderer.invoke("getPlayers",null).then((players) => {
        this.players = players
      });
    }
  },
  mounted() {
    this.players = this.getPlayers();
  }

}
</script>

<style scoped>

</style>