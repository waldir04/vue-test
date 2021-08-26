<template>
  <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

    <FavoritesCard v-for="favorite of favorites" v-bind:key="favorite.id" v-bind:favorite="favorite"/>

    <div class="group w-full">
      <div class="group-hover:opacity-75 cursor-pointer">
        <div class="flex flex-wrap justify-center content-center h-48 bg-indigo-50 rounded-lg">
          <UiIconsPlus />
        </div>

        <div class="mt-4">
          <h3 class="text-lg leading-5 font-semibold text-center text-blue-600">
            Crear una nueva lista
          </h3>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites.data;
    }
  },
  methods: {
    jsonToString(json) {
      return JSON.stringify(json);
    }
  }
}
</script>
