<script setup lang="ts">
const elsewhere = [
  { label: 'GitHub', href: 'https://github.com/jpcarpenter' },
  { label: 'Rockit Science Agency', href: 'https://rockitscienceagency.com' },
]
</script>

<template>
  <section id="contact" class="border-t border-line py-14 sm:py-20">
    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's build something</h2>
    <p class="mt-3 max-w-xl text-muted">
      Open for work. The fastest way to reach me is email.
    </p>

    <a
      href="mailto:jacob@jacobpaulcarpenter.com"
      class="link-underline mt-8 inline-block max-w-full break-words font-bold text-[clamp(0.875rem,4.5vw,1.875rem)]"
    >
      jacob@jacobpaulcarpenter.com
    </a>

    <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
      <span>Gonzales, LA</span>
      <a
        v-for="link in elsewhere"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener"
        class="link-underline"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>
