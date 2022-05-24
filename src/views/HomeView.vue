<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="uk-section uk-section-primary">
      <div class="uk-margin">
        <!-- implicit style (fas is assumed) -->
        <font-awesome-icon icon="phone" />
        <a href="https://www.google.de" target="_blank">Google External</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
