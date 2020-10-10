<template>
  <div class="outer col-4">
    <textarea
      id="message"
      rows="15"
      class="form-control"
      v-model="text"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(value) {
        this.$store.commit("updateText", value);
      }
    }
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
</style>