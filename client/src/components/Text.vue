<template>
  <div class="outer col-4">
    <textarea
      id="message"
      rows="15"
      class="form-control"
      v-model="text"
    ></textarea>
    <v-container fluid>
      <v-layout row wrap justify-center class="mt-4">
        <v-flex xs12 sm10 text-xs-center>
          <v-text-field label="The text" v-model="text" textarea></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 md4 text-xs-center>
          <speech-to-text
            :text.sync="text"
            @speechend="speechEnd"
          ></speech-to-text>
        </v-flex>
        <v-flex xs12 text-xs-center class="mt-4">
          {{ sentences }}
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SpeechToText from "./SpeechToText.vue";
export default {
  components: {
    speechToText: SpeechToText
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    speechEnd({ sentences, text }) {
      console.log("text", text);
      console.log("sentences", sentences);
      this.sentences = sentences;
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