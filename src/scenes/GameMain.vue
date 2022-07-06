<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { Game, createGameInstance } from "@/utils/game";

export default defineComponent({
  name: "GameMain",
  components: {},
  setup() {
    const gameCanvas = ref<HTMLDivElement | undefined>(undefined);
    const game = ref<Game | undefined>(undefined);

    onMounted(() => {
      game.value = createGameInstance(1200, 600, 'gameCanvas');
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
