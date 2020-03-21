<template>
    <panel title="YouTube Video">
        <v-row slot="content-1">
            <v-col>
                <iframe
                    id="ytplayer"
                    type="text/html"
                    width="540"
                    height="260"
                    v-bind:src="youTubeId"
                    frameborder="0"
                >
                </iframe>
            </v-col>
        </v-row>
    </panel>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'

export default {
  name: 'youTube',
  props: [
    'youTubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
