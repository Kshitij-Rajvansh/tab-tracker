<template>
  <v-container>
    <v-card
    id="panel"
    class="mx-auto"
    max-width="800"
  >
    <v-toolbar dark color="deep-purple lighten-3">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="slot-toolbar-button">
      </slot>
    </v-toolbar>
    <slot name="content-1">
      This is a image content slot
    </slot>
    <!-- <div class="pt-4 pb-4 pl-2 pr-2">
      <slot name="content-2">
        no slot content defined
      </slot>
    </div> -->
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'panel',
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
