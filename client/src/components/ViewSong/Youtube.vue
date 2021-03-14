<template>
  <panel title="YouTube Video">
    <youtube
    class="youtube-custom"
      :video-id="youtubeId"
      :player-width="'100% !important'">
    </youtube>
  </panel>
</template>

<script>
import Panel from '../Panel.vue'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
