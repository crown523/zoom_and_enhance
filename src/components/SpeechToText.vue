<template>
  <div>
    <button
      dark
      @click.stop="toggle ? endSpeechRecognition() : startSpeechRecognition()"
      icon
      :color="!toggle ? 'grey' : speaking ? 'red' : 'red darken-3'"
      :class="{
        'animated infinite pulse': toggle,
        'btn-secondary': !toggle,
        'btn-primary': toggle
      }"
      class="btn"
    >
      <div v-if="!toggle">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-mic"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
          />
          <path
            fill-rule="evenodd"
            d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
          />
        </svg>
        Start listening
      </div>
      <div v-else>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-mic-mute"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 0 1 5 8V6.121l1 1V8a2 2 0 0 0 2.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z"
          />
        </svg>
        Stop listening
      </div>
    </button>
    {{ runtimeTranscription }}
  </div>
</template>

<script>
let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = SpeechRecognition ? new SpeechRecognition() : false;

export default {
  props: {
    lang: {
      type: String,
      default: "en-US"
    }
  },
  data() {
    return {
      error: false,
      speaking: false,
      toggle: false,
      runtimeTranscription: "",
      sentences: []
    };
  },
  watch: {
    lang: function(newVal, oldVal) {
      console.log("new: " + newVal + ", old: " + oldVal);
      recognition.lang = newVal;
    }
  },
  methods: {
    checkCompatibility() {
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
      }
    },
    endSpeechRecognition() {
      recognition.stop();
      this.toggle = false;
    },
    startSpeechRecognition() {
      if (!recognition) {
        this.error =
          "Speech Recognition is not available on this browser. Please use Chrome or Firefox";
        return false;
      }
      this.toggle = true;
      recognition.lang = this.lang;
      recognition.interimResults = true;

      var final_transcript = "";

      recognition.addEventListener("result", event => {
        final_transcript = this.$store.state.text;
        var interim_transcript = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript +=
              this.capitalizeFirstLetter(event.results[i][0].transcript) + ". ";
              console.log("[final_transcript] += " + this.capitalizeFirstLetter(event.results[i][0].transcript) + ". ");
          } else {
            interim_transcript += event.results[i][0].transcript;
            console.log("[interim_transcript] += " + event.results[i][0].transcript);
          }
        }
        this.$store.commit("updateText", final_transcript);
        this.$store.commit("updateInterimText", interim_transcript);
      });

      recognition.addEventListener("end", () => {
        if (this.toggle) {
          // keep it going.
          recognition.stop();
          recognition.start();
        }
      });
      recognition.start();
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  mounted() {
    this.checkCompatibility();
  }
};
</script>