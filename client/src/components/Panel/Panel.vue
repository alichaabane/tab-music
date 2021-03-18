<template>
<div>
       <div class="white elevation-2">
      <v-toolbar  dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="div-custom pl-4 pr-4 pt-2 pb-2">
        <slot>
            No slot content defined
        </slot>
    </div>
       </div>
</div>
</template>

<script>
export default {
  props: [
    'title'
  ]

}
</script>

<style scoped>
.div-custom{
  text-align: center;
}
</style>
