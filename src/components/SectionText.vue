<template>
  <div class="border border-white border-0">
    <div class="d-flex">
      <BlockText myId="one" textClass="text-warning" />
      <BlockText myId="two" textClass="text-info" />
    </div>
    <BlockText myId="three" />
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
  },
};
</script>

<style>
</style>