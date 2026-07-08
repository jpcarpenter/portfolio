<script setup lang="ts">
type Category = 'Agency' | 'Freelance'

interface Project {
  title: string
  tag: string
  description: string
  url: string
  category: Category
}

const projects: Project[] = [
  {
    title: 'IATSE 478',
    tag: 'Website Design & Development',
    description:
      'Assisted in development and designed the frontend for the member portal, so union members can handle availability reporting, permits, training, and contracts on any device.',
    url: 'https://rockitscienceagency.com/work/iatse-478',
    category: 'Agency',
  },
  {
    title: 'DIG Baton Rouge',
    tag: 'Website Design & Development',
    description:
      'Designed the frontend and built the Partner Portal where local businesses create listings, run events, and buy advertising — the hub of DIG’s digital ecosystem.',
    url: 'https://rockitscienceagency.com/work/digbr',
    category: 'Agency',
  },
  {
    title: 'Louisiana Legislative Auditor',
    tag: 'Website Design & Development',
    description:
      'Designed and developed the full site, including a search-first interface used by state agencies, the Legislature, and internal staff.',
    url: 'https://rockitscienceagency.com/work/louisiana-legislative-auditor',
    category: 'Agency',
  },
  {
    title: 'Volunteer Ascension',
    tag: 'Website Design & Development',
    description:
      'Built a story-driven redesign that showcases volunteer opportunities and community impact through video and narrative, with clear paths to donate, join events, and fundraise.',
    url: 'https://volunteerascension.org/',
    category: 'Freelance',
  },
  {
    title: 'Cypress Physical Therapy',
    tag: 'Website Design',
    description:
      'Redesigned the site around a modern, scalable structure with an integrated Google Maps location finder, clear appointment CTAs, and multimedia content to support their multi-location growth.',
    url: 'https://cypresspt.net/',
    category: 'Freelance',
  },
]

const categories: Category[] = ['Agency', 'Freelance']

const groups = computed(() =>
  categories
    .map((label) => ({ label, items: projects.filter((p) => p.category === label) }))
    .filter((group) => group.items.length > 0),
)
</script>

<template>
  <section id="projects" class="border-t border-line py-14 sm:py-20">
    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Selected work</h2>

    <div class="mt-10 space-y-12">
      <div v-for="group in groups" :key="group.label">
        <h3 class="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          {{ group.label }} work
        </h3>
        <ul class="divide-y divide-line border-t border-line">
          <li v-for="project in group.items" :key="project.title">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div class="sm:w-2/3">
                <h4 class="text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                  {{ project.title }}
                </h4>
                <p class="mt-1 text-muted">{{ project.description }}</p>
              </div>
              <div class="shrink-0 text-sm text-muted transition-colors group-hover:text-ink sm:text-right">
                {{ project.tag }}
                <span class="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                  >↗</span
                >
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
