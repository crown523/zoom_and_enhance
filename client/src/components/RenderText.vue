<template>
<div>
    <p id="render-text-area">
    </p>
  </div>
</template>


<script>
import { eventBus } from "../main";
export default {
    data() {
        return {
            highlightColor: "",
            highlightTextColor: "black"
        };
    },
    created(){
        eventBus.$on("renderClicked", (color) => { 
            let textData = this.$store.state.text;
            let bStarted = false;
            let iStarted = false;
            let hStarted = false;
            let renderedStr = "";
            for (let c of textData) {
                if (c == "*") {
                    bStarted ? renderedStr += "</b>" : renderedStr += "<b>";
                    bStarted = !bStarted;
                    //  block of code to be executed if condition1 is true
                } else if (c=="_") {
                    iStarted ? renderedStr += "</i>" : renderedStr += "<i>";
                    iStarted = !iStarted;
                } else if (c=="|") {
                    hStarted ? renderedStr += "</mark>" : renderedStr += "<mark>";
                    hStarted = !hStarted;
                } else {
                    renderedStr += c
                }
            }
            document.getElementById('render-text-area').innerHTML = renderedStr;
            // let hslarray = color.split(','); // hsl(120,100%,50%)
            // if(){
            //     this.highlightTextColor = "white" 
            // } else{
            //     this.highlightTextColor = "black";
            // }
            let marks = document.querySelectorAll("mark")
            if (marks != null){
                marks.forEach(function(mark) { mark.style.background = color; });
            }
        })
  }
};

</script>


<style scoped>
#render-text-area{
    margin-top: 60px;
    margin-left: 100px;
    height: 60vh;
    background: #f7f7f7;
    text-indent: 10px;
}
</style>