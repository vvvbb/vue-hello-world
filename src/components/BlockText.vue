<template>
  <div
    :id="[myId ? 'container-' + myId : '']"
    :class="border"
    class="bg-secondary py-5 px-3"
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
      minus.
    </p>
    <p v-bind:class="[textClass]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur
      nisi sed, laborum vel molestias assumenda, fugit temporibus obcaecati vero
      quas, minus hic quam aut.
    </p>
    <button
      :id="[myId ? 'btn-' + myId : '']"
      class="btn btn-outline-light btn-block"
    >
      Lorem, ipsum dolor.
    </button>
  </div>
</template>

<script>
export default {
  props: ["myId", "textClass"],
  data() {
    return {
      border: "border border-dark text-white",
    };
  },
};
</script>

<style lang="scss">
.active {
  filter: drop-shadow(0px 16px 20px gray) invert(15%);

  p {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
  }
  button {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 1rem;
      outline: 14px double yellowgreen;
      outline-offset: 0.5rem;
    }
  }
}
</style>