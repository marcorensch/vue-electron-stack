<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="uk-section uk-section-primary">

  </div>
  <router-view/>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
export default {name: 'App',};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
