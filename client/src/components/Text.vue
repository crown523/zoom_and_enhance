<template>
  <div class="outer col-4">
    <div>
      <button
        dark
        @click.stop="bold()"
        icon
        :color=grey
      >
        Bold 
      </button>
      <button
        dark
        @click.stop="italicize()"
        icon
        :color=grey
      >
        Italicize 
      </button>
      <button
        dark
        @click.stop="highlight()"
        icon
        :color=grey
      >
        Highlight
      </button>
      <button
        dark
        @click.stop="render()"
        icon
        :color=grey
      >
        Render
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
    addSymbol(symbol) {
      //console.log(window.getSelection().toString());
      let txtarea = document.getElementById("message");
      console.log(txtarea.selectionStart);
      console.log(txtarea.selectionEnd);
      console.log(this.text.substring(txtarea.selectionStart, txtarea.selectionEnd));
      this.text = (this.text.substring(0, txtarea.selectionStart)+symbol
      +this.text.substring(txtarea.selectionStart, txtarea.selectionEnd)+symbol
      +this.text.substring(txtarea.selectionEnd, this.text.length));
      return window.getSelection().toString();
    },
    bold() {
      this.addSymbol("*");

    },
    italicize() {
      this.addSymbol("_");

    },
    highlight() {
      this.addSymbol("/");

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