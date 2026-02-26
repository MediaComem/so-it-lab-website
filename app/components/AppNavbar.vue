<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('content'),
);

const appConfig = useAppConfig();
</script>

<template>
  <div class="px-4 py-4 mx-auto sm:px-8 max-w-4xl">
    <!-- Navigation -->
    <div class="flex gap-2 sm:gap-8 sm:justify-center">
      <NuxtLink
        v-for="link in navigation"
        :key="link.path"
        :to="link.path"
        class="menu-item text-center"
        active-class="active"
      >{{ link.title }}</NuxtLink>
    </div>
  </div>
</template>


<style>
.menu-item {
  background-color: #f3f3f3;
  color: #252525;
  border-radius: 12px;
  border: 1px solid var(--dark, #252525);
  font-family: Aleo;
  flex: 1;
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
}

@media (min-width: 640px) {
  .menu-item {
    flex: none;
    width: 135px;
    font-size: 1rem;
    padding: 0;
  }
}
.menu-item.active, .menu-item:hover {
  background-color: #17AB59;
  color:white;
  border-radius: 12px;
  border: 1px solid var(--dark, #252525);
  /* sharp shadow S */
  box-shadow: 2px 2px 0 0 #252525;
}
</style>