<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const normalizedPath = computed(() => route.path.replace(/\/$/, '') || '/')

const { data: page } = await useAsyncData(`page-${normalizedPath.value}`, () => {
  return queryCollection('content').path(normalizedPath.value).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

useSeoMeta(page.value?.seo || {})
</script>

<template>
  <NuxtLayout :name="page?.layout as LayoutKey || 'default'" class="">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose"
      :class="page?.pageClass"
    />
  </NuxtLayout>
</template>