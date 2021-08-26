<template>
  <div class="group w-full">
    <div class="group-hover:opacity-75 cursor-pointer">
      <div class="relative h-48 bg-green-50 rounded-lg">
        <div v-if="!hasSavedItems()" class="flex justify-center w-full absolute bottom-0">
          <UiIllustrativeHouse />
        </div>

        <FavoritesGalleryPreview v-else v-bind:images="getPreviewImages()" v-bind:totalItems="getNumberItems()" />
      </div>

      <div class="mt-4">
        <h3 class="text-lg leading-5 font-semibold text-green-900 mb-3 truncate">
          {{ favorite.name }}
        </h3>
        <p class="text-sm text-gray-500">{{ getNumberItems() }} propiedades guardadas</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorite: { type: Object, default: null }
  },
  methods: {
    getNumberItems() {
      return this.favorite.items.length;
    },
    hasSavedItems() {
      return !!this.getNumberItems()
    },
    getPreviewImages() {
      return this.favorite.items.slice(0, 3).map((item) => item.attributes.gallery_urls[0]);
    }
  }
}
</script>