<template>
  <div class="outer col-6">
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
        placeholder="Or enter Zoom Meeting ID"
        v-model="zoomID"
      />
    </div>
    <div
      class="iframe-container"
      style="overflow: scroll; position: relative; height:60vh, border: 1px solid black"
    >
      <iframe
        class="form-control"
        style="border:none; width: 100%;"
        :src="iframeURL"
        sandbox="allow-forms allow-scripts allow-same-origin"
        allow="microphone; camera"
      ></iframe>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 60vh;
}
input {
  margin-bottom: 10px;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
