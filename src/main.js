import Vue from 'vue'
import vhCheck from 'vh-check'
import particles from "./components/particles";

Vue.config.productionTip = false

import "./styles.css";

const app = () => {
  new Vue({
    el: "#app",
    components: {
      particles
    },
    mounted() {
      vhCheck();
    }
  })
}

// Loads JS asynchronously
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app); // Document still loading so DomContentLoaded can still fire
} else {
  app()
}