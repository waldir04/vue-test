<!-- Please remove this file from your project -->
<template>
  <p>{{jsonToString(favorites)}}</p>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites.info.data;
    }
  },
  methods: {
    jsonToString(json) {
      return JSON.stringify(json);
    }
  }
}
</script>
