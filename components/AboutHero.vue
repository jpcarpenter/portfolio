<script setup lang="ts">
// Drop portrait photos (a ~4:5 crop looks best) into public/photos/ and list
// them here. The stack shuffles the order on each page load.
const photos = ['/photos/drumming.webp', '/photos/profile.webp', '/photos/strumming.webp']

const order = ref<string[]>([...photos])
const failed = ref<string[]>([])
// How many cards have been dealt in so far (drives the staggered reveal).
const revealed = ref(0)

// Resting rotation / horizontal offset per stacked layer (back → front).
const rotations = ['-8deg', '6deg', '-3deg']
const offsets = ['-1.25rem', '1rem', '0rem']

// Time between each card dealing in, in ms. Bump this to slow the stagger.
const STEP_MS = 700

const layers = computed(() =>
  order.value.filter((src) => !failed.value.includes(src)).slice(0, 3),
)

function shuffle(list: string[]): string[] {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function onError(src: string) {
  if (!failed.value.includes(src)) failed.value.push(src)
}

onMounted(() => {
  // Randomize on the client to keep SSR/hydration output stable.
  order.value = shuffle(photos)
  // Deal the cards in one at a time so each clearly animates on its own.
  nextTick(() => {
    const count = layers.value.length
    for (let i = 0; i < count; i++) {
      setTimeout(() => (revealed.value = i + 1), 200 + i * STEP_MS)
    }
  })
})
</script>

<template>
  <section id="about" class="py-14 sm:py-20">
    <div class="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-16">
      <!-- Copy -->
      <div class="lg:w-3/5">
        <h1 class="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
          Hi <span role="img" aria-label="waving hand">👋</span>, I'm<br />Jacob Carpenter
        </h1>

        <div class="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/90">
          <p>
            I'm a senior frontend developer and UI designer with 10+ years of experience, currently
            serving as Interactive Director at
            <a
              href="https://rockitscienceagency.com"
              target="_blank"
              rel="noopener"
              class="font-semibold underline decoration-ink/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >Rockit Science Agency</a
            >.
          </p>
          <p>
            My focus is building polished, scalable web apps — <span class="highlight">Vue 3</span> +
            <span class="highlight">Nuxt</span> front ends, and design systems that hold up over
            time.
          </p>
          <p>
            Outside of work, I'm usually playing music, hanging with my family, or out on the
            pickleball court.
          </p>
        </div>
      </div>

      <!-- Layered, shuffling photo stack -->
      <div class="flex justify-center lg:w-2/5 lg:justify-end">
        <div class="photo-stack">
          <div
            v-for="(src, i) in layers"
            :key="src"
            class="photo-card"
            :class="{ 'is-in': i < revealed }"
            :style="{ '--r': rotations[i], '--x': offsets[i], zIndex: 10 + i }"
          >
            <img
              :src="src"
              alt="Jacob Carpenter"
              class="h-full w-full object-cover"
              @error="onError(src)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo-stack {
  position: relative;
  width: 13rem;
  aspect-ratio: 4 / 5;
}

@media (min-width: 640px) {
  .photo-stack {
    width: 16rem;
  }
}

.photo-card {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border: 6px solid #fff;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.28);
  /* Collapsed: centered, un-fanned, scaled to zero so it's unseen until dealt. */
  transform: translateX(0) rotate(0deg) scale(0);
  transition:
    transform 0.7s cubic-bezier(0.2, 0.85, 0.25, 1.05),
    box-shadow 0.35s ease;
  will-change: transform;
}

/* Dealt in: slide/rotate out to the card's resting position in the fan. */
.photo-card.is-in {
  transform: translateX(var(--x, 0rem)) rotate(var(--r, 0deg)) scale(1);
}

.photo-stack:hover .photo-card.is-in {
  transform: translateX(calc(var(--x, 0rem) * 1.25)) rotate(calc(var(--r, 0deg) * 1.25))
    scale(1);
}

.photo-stack:hover .photo-card.is-in:last-child {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .photo-card {
    transform: translateX(var(--x, 0rem)) rotate(var(--r, 0deg)) scale(1);
    transition: none;
  }
}
</style>
