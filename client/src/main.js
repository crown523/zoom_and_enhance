import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

// IN COMPONENT
// import { eventBus } from "../../main"; <- import in script in components
// 
// eventBus.serverClicked({ <- in method in component to push to event bus
//   index: index,
//   status: status,
// });
//
// created() { <- in export default in component to listen to event bus
//   eventBus.$on("serverClicked", (data) => {
//     this.status = data.status;
//     this.index = data.index;
//   });
// },


// export const eventBus = new Vue({
//   methods: {
//     renderText(serverData) {
//       console.log(serverData);
//       this.$emit('serverClicked', serverData);
//     }
//   }
// });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
