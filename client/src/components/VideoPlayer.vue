<template>
  <div class="outer col-6">
    <input
      class="form-control"
      type="text"
      placeholder="Enter URL here"
      v-model="vidURL"
    />
    <iframe
      class="form-control"
      :src="vidURL"
      title="W3Schools Free Online Web Tutorials"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vidURL: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 60vh;
}
input {
  width: 100%;
  margin-bottom: 10px;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
