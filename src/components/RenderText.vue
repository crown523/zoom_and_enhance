<template>
    <div>
      <div class="text-area rounded">
          <p id="render-text-area"></p>
      </div>
      <app-key-term></app-key-term>
    </div>
</template>


<script>
import { eventBus } from "../main";
import KeyTerm from "./KeyTerm.vue";
export default {
  components: {
    appKeyTerm: KeyTerm
  },
  data() {
    return {
      highlightColor: "",
      highlightTextColor: "black"
    };
  },
  created() {
    eventBus.$on("renderClicked", color => {
      console.log(this.$store.state.text);
      let textData = this.$store.state.text;
      let bStarted = false;
      let iStarted = false;
      let hStarted = false;
      let renderedStr = "";
      for (let c of textData) {
        if (c == "*") {
          bStarted ? (renderedStr += "</b>") : (renderedStr += "<b>");
          bStarted = !bStarted;
          //  block of code to be executed if condition1 is true
        } else if (c == "_") {
          iStarted ? (renderedStr += "</i>") : (renderedStr += "<i>");
          iStarted = !iStarted;
        } else if (c == "|") {
          hStarted ? (renderedStr += "</mark>") : (renderedStr += "<mark>");
          hStarted = !hStarted;
        } else if (c == "\n") {
          renderedStr += "<br/>";
        } else {
          renderedStr += c;
        }
      }
      document.getElementById("render-text-area").innerHTML = renderedStr;
      // let hslarray = color.split(','); // hsl(120,100%,50%)
      // if(){
      //     this.highlightTextColor = "white"
      // } else{
      //     this.highlightTextColor = "black";
      // }
      let marks = document.querySelectorAll("mark");
      if (marks != null) {
        marks.forEach(function(mark) {
          mark.style.background = color;
        });
      }
    });
  }
};
</script>


<style scoped>
.text-area {
  height: calc(60vh + 58px);
  overflow: scroll;
  background: #f7f7f7;
  padding: 30px;
}
</style>