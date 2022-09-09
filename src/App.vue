<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>

  <div class="uk-section app" uk-height-viewport="offset-top:true; offset-bottom:true;">
    <div class="uk-container">
      <router-view></router-view>
    </div>
  </div>

  <div class="uk-section uk-section-secondary uk-padding-small">
    <div class="uk-container">
      <div class="uk-flex uk-flex-center uk-grid-small">
        <div class="">
          <font-awesome-icon icon="phone" class="uk-margin-small-right" />
          <a href="https://www.google.de" target="_blank">Google External URL</a>
        </div>
        <div class="">
          <font-awesome-icon icon="globe" class="uk-margin-small-right"/>
          <a href="https://www.nx-designs.ch" target="_blank">nx-designs</a>
        </div>
      </div>
    </div>
  </div>
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
