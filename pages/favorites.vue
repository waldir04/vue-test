<template>
  <div>
    <Tutorial />
  </div>
</template>

<script>
export default {
  async fetch() {
    const { data } = await this.$favorites.getFavorites();

    this.$store.commit('favorites/info/set', { data });
  }
};
</script>
