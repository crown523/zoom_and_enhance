<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="row outer1 flex-nowrap" style="height: auto">
      <div class="col-1"></div>
      <app-video-player id="videoPlayer" class="col-6"></app-video-player>
      <app-text class="col-4"></app-text>
      <app-render-text id="renderText" class="col-6"></app-render-text>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import Text from "./components/Text.vue";
import RenderText from "./components/RenderText.vue";

export default {
  components: {
    appNav: Nav,
    appVideoPlayer: VideoPlayer,
    appText: Text,
    appRenderText: RenderText
  }
};
</script>

<style>
#app {
  overflow: scroll;
}
.outer1 {
  padding-top: 100px;
}
</style>
