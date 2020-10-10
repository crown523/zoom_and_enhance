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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addSymbol(symbol) {
      //console.log(window.getSelection().toString());
      let txtarea = document.getElementById("message");
      let start = txtarea.selectionStart;
      let end = txtarea.selectionEnd;
      console.log(start);
      console.log(end);
      console.log(this.text.substring(start, end));
      if (start != end) {
        this.text = (this.text.substring(0, start)+symbol+this.text.substring(start, end)+symbol+this.text.substring(end, this.text.length));
        return window.getSelection().toString();
      }
      
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