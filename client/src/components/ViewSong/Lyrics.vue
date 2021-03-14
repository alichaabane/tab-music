<template>
  <panel title="Lyrics">
    <textarea
      readonly
      v-model="song.lyrics"
    ></textarea>
  </panel>
</template>

<script>
import Panel from '../Panel.vue'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea {
 width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
  cursor: pointer;
}
</style>
