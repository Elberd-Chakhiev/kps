<template>
  <header class="max-w-[1370px] gap-x-[68px] mx-auto mt-[25px] flex">
    <header-logo />
    <header-menu>
      <header-item
        v-for="item in headerMenu"
        :key="item.id"
        :text="item.text"
        :href="item.href"
      />
    </header-menu>
  </header>
</template>
<script>
  import HeaderLogo from './HeaderLogo.vue'
  import HeaderMenu from './Menu/HeaderMenu.vue'
  import HeaderItem from './Menu/HeaderItem.vue'
  export default {
    components: {
      HeaderLogo,
      HeaderMenu,
      HeaderItem,
    },
    data() {
      return {
        headerMenu: [
          {id: 0, text: 'О нас', href: '#' },
          {id: 1, text: 'Каталог', href: '#' },
          {id: 2, text: 'Контакты', href: '#' },
        ]
      }
    }
  }
</script>