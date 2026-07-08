<script setup lang="ts">
const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about', active: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav
    class="flex items-center justify-between gap-3 border-b border-line px-6 py-6 sm:px-10 lg:px-16"
  >
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      class="nav-link"
      :class="{ 'nav-link--active': link.active }"
    >
      {{ link.label }}
    </a>
  </nav>
</template>
