<template>
  <div class="outer col-4">
    <textarea
      id="message"
      rows="15"
      class="form-control"
      v-model="text"
    ></textarea>
    <speech-to-text :text.sync="text"></speech-to-text>
  </div>
</template>

<script>
import SpeechToText from "./SpeechToText.vue";
export default {
  components: {
    speechToText: SpeechToText
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {}
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