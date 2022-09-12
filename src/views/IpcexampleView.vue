<template>
  <div class="ipcexampleView">
    <h1>This is an IPC Communication Example</h1>
    <p>check console - sends foo via IPC - returns BAR from Electron "Backend":</p>
    <div class="uk-alert">{{backendMsg}}</div>
    <div>Simple Addition via Backend:</div>
    <div class="uk-flex uk-flex-middle">
      <div><input id="n1" type="number" class="uk-input"></div>
      <div>+</div>
      <div><input id="n2" type="number" class="uk-input"></div>
      <div><div @click="calculate" class="uk-button uk-button-primary">Calculate</div></div>
    </div>
    <div class="uk-alert" v-if="calcRes">{{calcRes}}</div>
  </div>
</template>

<script>
export default {
  name: 'IpcexampleView',
  components: {},
  data() {
    return {
      backendMsg: '',
      calcRes:0
    }
  },
  computed: {},
  mounted() {
    this.inOut();
  },
  methods: {
    calculate() {
      let n1 = document.getElementById('n1').value;
      let n2 = document.getElementById('n2').value;
      window.ipcRenderer.invoke('calculate', {n1, n2}).then((res) => {
        this.calcRes = res;
      })
    },
    inOut(){
      window.ipcRenderer.invoke('inOut','FOO').then((result) => {
        console.log('Result: ', result)
        this.backendMsg = result;
      })
    }
  }
}
</script>
