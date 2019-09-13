import Vue from 'vue'
import vhCheck from 'vh-check'
import particles from "./components/particles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Init and add fontawesome icons
library.add(faTwitter, faFacebookF, faInstagram, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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