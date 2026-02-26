<script setup lang="ts">
const { cover } = useAppConfig()

useSeoMeta({
  ogImage: cover,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
  ],
})
</script>

<template>
  <div>
    <Html lang="en" />
    <NuxtLoadingIndicator />
    <div class="top-section fixed top-0 left-0 right-0 z-50 ">
      <header class="flex justify-center" style="padding-top: 20px; padding-bottom: 10px;">
        <NuxtLink to="/"><img src="/logo.svg" alt="Logo"></NuxtLink>
      </header>
      <AppNavbar />
    </div>
    <div class="fixed inset-0 pt-45 overflow-y-auto sm:pb-10">
      <NuxtPage />
    </div>
  </div>
</template>
