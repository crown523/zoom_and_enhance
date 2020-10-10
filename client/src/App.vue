<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="row outer1" style="height: auto">
      <div class="col-1"></div>
      <app-video-player></app-video-player>
      <app-text></app-text>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import Text from "./components/Text.vue";

export default {
  components: {
    appNav: Nav,
    appVideoPlayer: VideoPlayer,
    appText: Text
  }
};
</script>

<style>
.outer1 {
  padding-top: 50px;
}
</style>
