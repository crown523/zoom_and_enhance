<template>
  <div id="toolbar" class="btn-dark rounded flex-wrap">
    <div>
      <div class="btn-group" role="group" aria-label="styling">
        <b-button
          class="btn-light"
          v-b-tooltip.hover
          title="Bold (Option/Alt-B)"
          dark
          @click.stop="bold()"
          icon
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-type-bold"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"
            />
          </svg>
        </b-button>
        <b-button
          class="btn-light"
          v-b-tooltip.hover
          title="Italicize (Option/Alt-I)"
          dark
          @click.stop="italicize()"
          icon
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-type-italic"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"
            />
          </svg>
        </b-button>
        <b-button
          class="btn-light"
          :style="{ backgroundColor: highlightColors[selectedColor] }"
          v-b-tooltip.hover
          title="Highlight (Option/Alt-H)"
          dark
          @click.stop="highlight()"
          icon
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-brush"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z"
            />
          </svg>
        </b-button>

        <div
          class="highlighterGroup btn-group"
          role="group1"
          aria-label="highlightColors"
        >
          <b-button
            class="btn-light highlightButton"
            v-for="(color, index) in highlightColors"
            :key="index"
            :style="{ backgroundColor: color }"
            @click="selectedColor = index"
          ></b-button>
        </div>
      </div>
    </div>
    <div>
      <b-button
        class="btn-success"
        v-b-tooltip.hover
        title="Export (Option/Alt-E)"
        dark
        @click.stop="exportFile()"
        icon
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-box-arrow-up"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
          />
        </svg>
      </b-button>
      <b-button
        class="btn-info"
        v-b-tooltip.hover
        title="Render (Option/Alt-R)"
        dark
        @click.stop="render()"
        icon
        style="margin-left: 5px"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-repeat"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
          />
          <path
            fill-rule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          />
        </svg>
      </b-button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { eventBus } from "../main";

export default {
  data() {
    return {
      highlightColors: [
        "hsl(60, 80%, 80%)",
        "hsl(90, 80%, 80%)",
        "hsl(180, 80%, 90%)",
        "hsl(240, 80%, 90%)",
        "hsl(300, 80%, 90%)",
        "hsl(0, 80%, 90%)"
      ],
      selectedColor: 0
    };
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
        this.text =
          this.text.substring(0, start) +
          symbol +
          this.text.substring(start, end) +
          symbol +
          this.text.substring(end, this.text.length);
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
    },
    render() {
      eventBus.renderText(this.highlightColors[this.selectedColor]);
      $("#app").animate({ scrollLeft: 1000 }, 1000);
    },
    exportFile() {
      var blob = new Blob([this.text], {
        type: "text/plain;charset=utf-8"
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = "zoom_and_enhance.md";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert("Your file has downloaded!");
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
#toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
}
.highlighterGroup {
  padding-left: 5px;
}
.highlightButton {
  width: 10px;
  min-width: 10px;
}
button {
  padding-left: 8px;
  padding-right: 8px;
}
</style>