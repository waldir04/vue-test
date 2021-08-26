<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-green-900 text-center">Lista de favoritos</h1>

      <FavoritesList class="mt-14 pb-14" />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const data = await this.$favorites.getFavorites();

    this.$store.commit('favorites/set', { data });
  }
};
</script>
