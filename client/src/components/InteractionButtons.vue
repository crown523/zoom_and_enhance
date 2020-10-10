<template>
  <div class="row">
    <app-speech-to-text></app-speech-to-text>
    <button v-if="toggle" class="btn btn-danger" @click="toggleImportance">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-exclamation-circle-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        />
      </svg>
      Mark as important
    </button>
    <button v-else class="btn btn-danger" @click="toggleImportance">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-exclamation-circle-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
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
      this.$store.commit("updateText", `${this.$store.state.text}*`);
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>