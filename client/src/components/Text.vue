<template>
  <div class="outer col-4">
    <div>
      <button
        dark
        @click.stop="bold()"
        icon
        :color='grey'
      >
        Bold 
      </button>
      <button
        dark
        @click.stop="italicize()"
        icon
        :color='grey'
      >
        Italicize 
      </button>
      <button
        dark
        @click.stop="highlight()"
        icon
        :color='grey'
      >
        Highlight
      </button>
      <button
        dark
        @click.stop="render()"
        icon
        :color='grey'
      >
        Highlight
      </button>
    </div>
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
  methods: {
    getSelection() {
      console.log(window.getSelection);
      return window.getSelection();
    },
    bold() {
      let text = getSelection();

    },
    italicize() {
      let text = getSelection();

    },
    highlight() {
      let text = getSelection();

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