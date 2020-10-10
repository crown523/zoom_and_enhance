<template></template>

<script>
import { eventBus } from "../../main"

export default {

  methods: {
    renderClicked() {
        eventBus.$on("renderClicked", (text) => {
            this.texttoberendered = text
    });

  }
};

</script>

<style scoped></style>