<template>
  <ul class="flex">

    <li v-for="(item, index) of items" v-bind:key="index" class="block sm:inline-block mr-10 text-base text-green-900">
      <NuxtLink v-bind:to="item.path" class="hover:text-gray-500">
        {{ item.name }}
      </NuxtLink>
    </li>

    <li class="block sm:inline-block">
      <button type="button" class="group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
        <span class="text-green-900">Mi Perfil</span>

        <span class="relative">
          <span class="absolute rounded-full bg-green-500 w-2.5 h-2.5 inline-block right-0"></span>
          <UiIconsChevronDown class="fill-current text-green-900" />
        </span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: [] }
  }
}
</script>