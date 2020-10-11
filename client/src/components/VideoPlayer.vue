<template>
  <div class="outer">
    <div class="row">
      <input
        class="form-control col-8"
        type="text"
        placeholder="Enter URL here"
        v-model="vidURL"
      />
      <input
        class="form-control col-4"
        type="text"
        placeholder="Or Zoom Meeting ID"
        v-model="zoomID"
      />
    </div>
    <div class="iframe-container rounded">
      <iframe
        class="form-control"
        style="border:none; width: 100%;"
        :src="iframeURL"
        sandbox="allow-forms allow-scripts allow-same-origin"
        allow="microphone; camera"
      ></iframe>
    </div>
    <app-interaction-buttons></app-interaction-buttons>
  </div>
</template>

<script>
import InteractionButtons from "./InteractionButtons";

export default {
  data() {
    return {
      vidURL: "",
      zoomID: ""
    };
  },
  computed: {
    iframeURL() {
      if (this.zoomID != "") {
        return (
          "https://zoom.us/wc/" + this.zoomID + "/join?prefer=0&un=TWluZGF1Z2Fz"
        );
      } else {
        return this.vidURL;
      }
    }
  },
  components: {
    appInteractionButtons: InteractionButtons
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
}
input {
  margin-bottom: 10px;
}
iframe {
  width: 100%;
  height: 100%;
  height: 60vh;
}
.iframe-container {
  overflow: scroll;
  position: relative;
  height: 60vh;
  border: 1px solid grey;
}
input {
  height: 58px;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
