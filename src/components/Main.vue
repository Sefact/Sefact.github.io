<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { Game, createGameInstance } from "@/utils/game";

export default defineComponent({
  name: "Main",
  components: {},
  setup() {
    const gameCanvas = ref<HTMLDivElement | undefined>(undefined);
    const game = ref<Game | undefined>(undefined);

    onMounted(() => {
      game.value = createGameInstance(800, 600, 'gameCanvas');
      game.value.loadContent();
    });

    onUnmounted(() => {
      if(game.value) {
        game.value.destroy();
        game.value = undefined;
      }
    });

    return {
      gameCanvas,
    };
  },
});
</script>

<template>
  <section class="canvas-wrapper">
    <div id="game" ref="gameCanvas"></div>
  </section>
</template>

<style scoped></style>
