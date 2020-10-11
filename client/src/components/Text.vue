<template>
  <div class="outer">
    <app-toolbar></app-toolbar>
    <textarea
      id="message"
      rows="15"
      class="form-control"
      v-model="text"
    ></textarea>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";

export default {
  data() {
    return {};
  },
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(value) {
        this.$store.commit("updateText", value);
      }
    }
  },
  components: {
    appToolbar: Toolbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 60vh;
}
textarea {
  height: 60vh;
}
#toolbar {
  display: flex;
  flex-direction: row;
}
button {
  margin-right: 10px;
}
</style>