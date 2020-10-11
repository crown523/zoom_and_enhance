<template>
  <div class="outer">
    <app-toolbar @addSymbol="attemptToAddSymbol" @render="render"></app-toolbar>
    <div class="alert alert-danger" v-if="error">{{ errorMessage }}</div>
    <textarea
      id="message"
      rows="20"
      class="form-control"
      v-model="text"
    ></textarea>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import { eventBus } from "../main";
import $ from "jquery";

export default {
  data() {
    return {
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    removeRedundancy() {
      for (let i = 0; i < this.text.length; i++) {
        if (
          this.text.charAt(i) == "*" ||
          this.text.charAt(i) == "_" ||
          this.text.charAt(i) == "|"
        ) {
          if (this.text.charAt(i) == this.text.charAt(i + 1)) {
            this.text = this.text.slice(0, i) + this.text.slice(i + 2);
            i--;
          }
        }
      }
    },
    attemptToAddSymbol(symbol) {
      let txtarea = document.getElementById("message");
      let start = txtarea.selectionStart;
      let end = txtarea.selectionEnd;

      //case where delimiters were selected and we want to remove
      let removing = false;
      if (
        this.text.charAt(start) == symbol &&
        this.text.charAt(end - 1) == symbol
      ) {
        removing = true;
        this.text =
          this.text.slice(0, start) +
          this.text.slice(start + 1, end - 1) +
          this.text.slice(end);
      } else if (start != 0 && end != this.text.length) {
        //case where only the text is selected and we want to remove
        if (
          this.text.charAt(start - 1) == symbol &&
          this.text.charAt(end) == symbol
        ) {
          removing = true;
          this.text =
            this.text.slice(0, start - 1) +
            this.text.slice(start, end) +
            this.text.slice(end + 1);
        }
      }
      if (!removing && start != end) {
        //add symbols
        this.text =
          this.text.substring(0, start) +
          symbol +
          this.text.substring(start, end) +
          symbol +
          this.text.substring(end);
      }
      this.removeRedundancy();
    },
    fixOverlapAndCheckValidity() {
      //custom method for delimiter checking, uses stack + boolean for each symbol type
      let stack = [];
      let boldOpen = false;
      let italOpen = false;
      let hiliOpen = false;
      // Traversing the Expression
      for (let i = 0; i < this.text.length; i++) {
        let x = this.text.charAt(i);

        if (
          (!boldOpen && x == "*") ||
          (!italOpen && x == "_") ||
          (!hiliOpen && x == "|")
        ) {
          // Push the element in the stack
          switch (x) {
            case "*":
              boldOpen = true;
              break;
            case "_":
              italOpen = true;
              break;
            case "|":
              hiliOpen = true;
              break;
          }
          stack.push(x);
          continue;
        }
        if (
          (boldOpen && x == "*") ||
          (italOpen && x == "_") ||
          (hiliOpen && x == "|")
        ) {
          let prev = stack.pop(stack.length - 1);
          switch (x) {
            case "*":
              if (prev == "_" || prev == "|") {
                if (stack.length - stack.indexOf(x) > 1) {
                  return "t";
                }
                this.text =
                  this.text.slice(0, i) +
                  prev +
                  this.text.charAt(i) +
                  prev +
                  this.text.slice(i + 1);
                stack.push(prev);
                i++;
              }
              boldOpen = false;
              break;

            case "_":
              if (prev == "*" || prev == "|") {
                if (stack.length - stack.indexOf(x) > 1) {
                  return "t";
                }
                this.text =
                  this.text.slice(0, i) +
                  prev +
                  this.text.charAt(i) +
                  prev +
                  this.text.slice(i + 1);
                stack.push(prev);
                i++;
              }
              italOpen = false;
              break;

            case "|":
              if (prev == "*" || prev == "_") {
                if (stack.length - stack.indexOf(x) > 1) {
                  return "t";
                }
                this.text =
                  this.text.slice(0, i) +
                  prev +
                  this.text.charAt(i) +
                  prev +
                  this.text.slice(i + 1);
                stack.push(prev);
                i++;
              }
              hiliOpen = false;
              break;
          }
        }
      }
      // Check Empty Stack
      // missing opening/closing if false
      if (stack.length == 0) {
        return null;
      } else {
        return stack[stack.length - 1];
      }
    },
    render(color) {
      let result = this.fixOverlapAndCheckValidity();
      if (result == null) {
        //success
        this.error = false;
        eventBus.renderText(color);
        $("#app").animate({ scrollLeft: 1000 }, 1000);
      } else if (result == "t") {
        console.log("triple overlap type error");
        this.errorMessage =
          "Make sure there is no more than 1 unpaired delimiter between each delimiter pair (e.g. '* a _ a | a * ...' is invalid but '* a _ a *  ...' is valid).";
        this.error = true;
      } else {
        console.log("unpaired delimiter");
        this.errorMessage = 'Unpaired delimiter: "' + result + '".';
        this.error = true;
      }
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
  },
  mounted() {
    document.getElementById("message").addEventListener("keydown", e => {
      if (e.ctrlKey) {
        switch (e.keyCode) {
          case 66:
            e.preventDefault();
            this.attemptToAddSymbol("*");
            break;
          case 73:
            e.preventDefault();
            this.attemptToAddSymbol("_");
            break;
          case 72:
            e.preventDefault();
            this.attemptToAddSymbol("|");
            break;
          case 82:
            e.preventDefault();
            this.render();
            break;
        }
      }
    });
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