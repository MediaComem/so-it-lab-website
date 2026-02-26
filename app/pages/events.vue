<script setup>
const { data: events } = await useAsyncData(() =>
  queryCollection('events').all()
)
</script>

<template>
  <div class="px-4 pb-10 m-auto sm:px-8 sm:rounded-lg max-w-4xl">
    <div class="event-list">
        <div
        v-for="event in events"
        :key="event.title"
        class="event-item"
        >
        <div class="event-main">
            <h2>{{ event.title }}</h2>
            <p class="speakers">{{ event.speakers?.join('   ') }}</p>
            <p class="description">{{ event.description }}</p>
        </div>
        <div class="event-meta">
            <span class="badge location" :class="{ pending: event.locationPending }">
            {{ event.location }}
            </span>
            <span class="badge date">{{ event.date }}</span>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.event-list {
  background: var(--light, #F3F3F3);
  border: 1px solid var(--dark, #252525);
  border-radius: 12px;
  padding: 1rem 2rem;
  /* sharp shadow */
  box-shadow: 4px 4px 0 0 #252525;
}
.event-item {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-bottom: 1px solid #252525;
  gap: 0.75rem;
}
.event-item:last-child { border-bottom: none; }

.event-main { flex: 1; width: 100%; }
.event-main h2 { font-size: 1.1rem; margin-bottom: 0.3rem; }
.speakers { color: #555; font-size: 0.9rem; margin-bottom: 0.5rem; }
.description { color: #333; font-size: 0.9rem; }

.event-meta { display: flex; gap: 0.5rem; align-items: flex-start; flex-shrink: 0; order: -1; }

@media (min-width: 640px) {
  .event-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
  .event-meta { order: 0; }
}

.badge {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
}
.badge.location { background: #F2D73F; color: #333; }
.badge.location.pending { background: #F2D73F; }
.badge.date { background: #222; color: #fff; }
</style>