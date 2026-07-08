<script setup lang="ts">
useHead({
  title: 'Jacob Carpenter — Front End Developer & UI Designer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content:
        'Jacob Carpenter is a front end developer and UI designer with 10+ years of experience building Vue 3 + Nuxt web apps and headless Craft CMS platforms.',
    },
    { property: 'og:title', content: 'Jacob Carpenter — Front End Developer & UI Designer' },
    {
      property: 'og:description',
      content: 'Front end developer & UI designer specializing in Vue 3, Nuxt, and Craft CMS.',
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <div id="top" class="min-h-screen bg-sand px-3 py-4 sm:px-6 sm:py-8">
    <div class="mx-auto w-full max-w-shell rounded-3xl bg-white shadow-sm ring-1 ring-line/70">
      <TheNav />
      <main class="px-6 sm:px-10 lg:px-16">
        <AboutHero />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer
        class="flex flex-col justify-between gap-2 border-t border-line px-6 py-8 text-sm text-muted sm:flex-row sm:px-10 lg:px-16"
      >
        <span>© {{ new Date().getFullYear() }} Jacob Carpenter</span>
        <div class="flex items-center gap-4">
          <a
            href="https://www.instagram.com/jacobpcarpenter/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="text-muted transition-colors hover:text-accent"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/jacobpaulcarpenter"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="text-muted transition-colors hover:text-accent"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>
