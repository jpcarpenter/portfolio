import Vue from 'vue'
import vhCheck from 'vh-check'
// import AccordionItem from './components/AccordionItem.vue'
// import MainNav from './components/MainNav.vue'

Vue.config.productionTip = false

import "./styles.css";

const app = () => {
  new Vue({
    el: "#app",
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