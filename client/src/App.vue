<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="row outer1 flex-nowrap" style="height: auto">
      <div class="col-1"></div>
      <app-video-player></app-video-player>
      <app-text></app-text>
      <app-render-text class="col-5" style="height: 100px;"></app-render-text>
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
  overflow-y: scroll;
}
.outer1 {
  padding-top: 100px;
}
</style>
