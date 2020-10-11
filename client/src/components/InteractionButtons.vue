<template>
  <div class="row myButtons" style="margin-top: 10px">
    <div class="row">
      <app-speech-to-text :lang="selectedLang.code"></app-speech-to-text>
      <button v-if="toggle" class="btn btn-secondary" @click="toggleImportance">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-chevron-bar-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        Mark as important
      </button>
      <button v-else class="btn btn-danger" @click="toggleImportance">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-chevron-bar-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
          />
        </svg>
        Stop marking as important
      </button>
    </div>
    <div class="dropdown">
      <button class="btn btn-info">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-caret-down-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          />
        </svg>
        {{ selectedLang.name }}
      </button>
      <div class="dropdown-content">
        <a
          v-for="(lang, index) in langs"
          :key="index"
          @click="selectedLang = lang"
          >{{ lang.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import SpeechToText from "./SpeechToText.vue";
export default {
  data() {
    return {
      toggle: true,
      dropdownOpen: false,
      selectedLang: { name: "English", code: "en-US" },
      langs: [
        { name: "Afrikaans", code: "af" },
        { name: "Catalan", code: "ca" },
        { name: "Arabic", code: "ar-EG" },
        { name: "Czech", code: "cs" },
        { name: "Dutch", code: "nl-NL" },
        { name: "English", code: "en-US" },
        { name: "Finnish", code: "fi" },
        { name: "French", code: "fr-FR" },
        { name: "German", code: "de-DE" },
        { name: "Hebrew", code: "he" },
        { name: "Hungarian", code: "hu" },
        { name: "Italian", code: "it-IT" },
        { name: "Indonesian", code: "id" },
        { name: "Korean", code: "ko" },
        { name: "Mandarin Chinese", code: "zh-CN" },
        { name: "Malaysian", code: "ms-MY" },
        { name: "Norwegian", code: "no-NO" },
        { name: "Polish", code: "pl" },
        { name: "Portuguese", code: "pt-PT" },
        { name: "Russian", code: "ru" },
        { name: "Serbian", code: "sr-SP" },
        { name: "Spanish", code: "es-AR" },
        { name: "Swedish", code: "sv-SE" },
        { name: "Turkish", code: "tr" }
      ]
    };
  },
  components: {
    appSpeechToText: SpeechToText
  },
  methods: {
    toggleImportance() {
      this.toggle = !this.toggle;
      if (this.toggle) {
        this.$store.commit("updateText", `${this.$store.state.text}|`);
      } else {
        this.$store.commit("updateText", `${this.$store.state.text}|`);
      }
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 200px;
  overflow: scroll;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
.myButtons {
  display: flex;
  justify-content: space-between;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>