<template>
  <div class="flex flex-wrap content-center">
    <UiIconsLogo />
    <span v-if="text" class="text-green-900 font-bold text-xl tracking-tight">LaHaus</span>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: Boolean, default: true }
  }
};
</script>