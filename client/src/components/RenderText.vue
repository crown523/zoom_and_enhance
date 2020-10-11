<template>
  <div>
    <p>
      Here is an example of <mark>highlighted text</mark> using the tag
       <i>This text is italic</i> 
        <b>This text is bold</b> 
        Here is an example of <mark1>highlighted mark1 text</mark1> using the tag
    </p>
  </div>
</template>


<script>
//import { eventBus } from "../../main";
export default {

  methods: {
    // renderClicked() {
    //     eventBus.$on("renderClicked", (text) => {
    //         //this.texttoberendered = text
    // })
    // }

  }
};

</script>

<style scoped>
    mark1 {
    background-color: red;
    color: black;
    }
</style>