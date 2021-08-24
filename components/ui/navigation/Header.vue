<template>
  <header>
    <nav class="border-b py-3.5 px-3">
      <div class="container mx-auto flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-no-shrink mr-6">
          <UiLogo v-bind:text="true" />
        </div>

        <div class="block sm:hidden">
          <UiHamburgerMenu v-on:clicked="menuClicked" />
        </div>

        <div class="hidden sm:block">
          <UiMenu v-bind:items="menuItems" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Cundinamarca', path: '/' },
        { name: 'Antioquia', path: '/' },
        { name: 'Recursos', path: '/' }
      ]
    }
  },
  methods: {
    menuClicked () {
      console.log('Clicked');
    }
  }
}
</script>
