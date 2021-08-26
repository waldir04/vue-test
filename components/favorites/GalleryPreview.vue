<template>
  <fragment>
    <div
      v-for="(image, index) of images"
      v-bind:key="index"
      v-bind:class="getPositionClasses(index)"
      class="absolute top-0 bottom-0 bg-green-50 rounded-lg"
    >
      <img v-bind:src="image" v-bind:class="getImageClasses(index)" class="w-full h-full border-r" />

      <div v-if="showMorePlaceholder(index)" class="absolute top-0 bottom-0 left-1/2 right-0 z-10 bg-green-900 bg-opacity-70 rounded-tr-lg rounded-br-lg flex flex-wrap justify-center content-center">
        <p class="text-white text-center font-bold">+{{ getAdditionalItemsNumber() }}</p>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      maxNumberImages: 3
    }
  },
  props: {
    images: { type: Array, default: [] },
    totalItems: { type: Number, default: 0 }
  },
  methods: {
    getImageClasses(index) {
      if (index === 0) {
        return 'rounded-lg';
      }

      return 'rounded-tr-lg rounded-br-lg';
    },
    getAdditionalItemsNumber() {
      return this.totalItems - this.images.length;
    },
    getPositionClasses(index) {
      const defaultClasses = ['left-0 z-30', 'left-1/4 z-20', 'left-1/3 z-10'];
      const modifiersTwoLevels = ['right-1/3', 'right-0'];
      const modifiersThreeLevels = ['right-1/2', 'right-1/4', 'right-0'];

      if (this.images.length === 2) {
        return `${defaultClasses[index]} ${modifiersTwoLevels[index]}`;
      }

      if (this.images.length >= 3) {
        return `${defaultClasses[index]} ${modifiersThreeLevels[index]}`;
      }

      return `${defaultClasses[index]} right-0`;
    },
    showMorePlaceholder(index) {
      return (
        this.totalItems > this.maxNumberImages &&
        this.images.length > 2 &&
        index === (this.images.length - 1)
      );
    }
  },
};
</script>