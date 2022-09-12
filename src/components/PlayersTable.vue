<template>
 <div>
    <table class="uk-table uk-table-small uk-table-divider">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player,index) in players" :key="index">
          <PlayerTableItem :player="player" />
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import PlayerTableItem from "@/components/PlayerTableItem";
export default {
  name: "PlayersTable",
  components: {PlayerTableItem},
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