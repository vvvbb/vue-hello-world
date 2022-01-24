<template>
  <div class="border border-white border-0">
    <div class="grid">
      <BlockText myId="one" textClass="text-warning" />
      <BlockText myId="two" textClass="text-info" />
      <BlockText myId="three" />
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import BlockText from "./BlockText.vue";
export default {
  name: "SectionText",
  components: { BlockText },

  mounted() {
    $("button").on("click", function () {});

    $("#btn-one").click(function () {
      console.log("TOOGLE");
      $("#container-one").toggleClass("active");
    });

    $("#btn-two").click(function () {
      $("#container-two p").slideToggle();
      $("#container-two button").fadeOut(800);
      $("#container-two button").fadeIn(800);
    });
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 300px);
}

div:nth-child(3) {
  grid-column: 1 / span 2;
  grid-row: 2 / 3;
}
</style>