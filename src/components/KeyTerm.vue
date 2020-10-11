<template>
    <div>
        <button class="btn btn-info" @click="identifyKeyTerms">
            Identify key terms
        </button>
        <p id="key-terms-list"></p>
        <p> {{ keyTerms }}</p>
    </div>
</template>

<script>
import rake from 'rake-js';
export default {
    data() {
        return {
            keyTerms: ""
        };
  },
    methods: {
    identifyKeyTerms() {
        let extraction_result = rake(this.$store.state.text)
        this.keyTerms = extraction_result;
        
        }
    }
}

</script>

<style>
</style>