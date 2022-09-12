<template>
  <div class="uk-section nx-head-section uk-padding-small">
    <div class="uk-container">
      <div class="uk-flex uk-flex-middle uk-grid-small">
        <div>
          <img alt="Vue logo" src="@/assets/logo.png" width="30">
        </div>
        <div>
          <h3 class="uk-margin-remove nx-head-section__title">Electron App</h3>
        </div>
      </div>

    </div>
  </div>


  <div class="uk-position-relative" uk-height-viewport="offset-top:true; offset-bottom:true;">
    <div class="uk-position-cover uk-grid">
      <div class="sidebar uk-height-1-1 uk-overflow-auto" style="background: #202021">
        <Navigation />
        <div class="resizer uk-flex uk-flex-middle uk-flex-center">
          <font-awesome-icon icon="grip-lines-vertical" />
        </div>
      </div>
      <div class="uk-width-expand uk-height-1-1 uk-overflow-auto">
        <router-view></router-view>
      </div>
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
import Navigation from "@/components/Navigation";

UIkit.use(Icons);
export default {name: 'App',
  components: {Navigation},
  mounted() {
    this.$nextTick(() => {
      this.initResizer();
    });
  },
  methods: {
    initResizer() {
      const resizer = document.querySelector('.resizer');
      const sidebar = document.querySelector('.sidebar');
      let isDown = false;
      let startX;
      let startWidth;

      const minWidth = 99;
      const maxWidth = 250;

      resizer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        startWidth = sidebar.offsetWidth;

        window.addEventListener('mouseup', () => {
          isDown = false;
        });

        window.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX;
          const walk = (x - startX);
          if(startWidth + walk > 0) {
            console.log(startWidth);
            if(startWidth + walk < minWidth) {
              sidebar.style.width = minWidth + 'px';
            } else if (startWidth + walk > maxWidth) {
              sidebar.style.width = maxWidth + 'px';
            } else {
              sidebar.style.width = startWidth + walk + 'px';
            }
          }

        });
      });


    }
  }
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
@import "assets/styles/style.less";

.sidebar {
  width: 250px;
  position: relative;
}
.sidebar .resizer {
  width: 10px;
  position: absolute;
  top:0;
  right:0;
  bottom: 0;
  cursor: ew-resize;
  opacity: .2;
}
.sidebar .resizer:hover {
  opacity: 1;
}

</style>
