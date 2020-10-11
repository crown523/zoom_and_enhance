<template>
  <div class="row" style="margin-top: 10px">
    <app-speech-to-text></app-speech-to-text>
    <button v-if="toggle" class="btn btn-secondary" @click="toggleImportance">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-chevron-bar-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
        />
      </svg>
      Mark as important
    </button>
    <button v-else class="btn btn-danger" @click="toggleImportance">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-chevron-bar-left"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
        />
      </svg>
      Stop marking as important
    </button>
  </div>
</template>

<script>
import SpeechToText from "./SpeechToText.vue";
export default {
  data() {
    return {
      toggle: true
    };
  },
  components: {
    appSpeechToText: SpeechToText
  },
  methods: {
    toggleImportance() {
      this.toggle = !this.toggle;
      if (this.toggle) {
        this.$store.commit("updateText", `${this.$store.state.text}|`);
      } else {
        this.$store.commit("updateText", `${this.$store.state.text}|`);
      }
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>