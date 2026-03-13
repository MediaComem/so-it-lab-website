<script setup>
const { data: events } = await useAsyncData(() =>
  queryCollection('events').all()
)
</script>

<template>
  <div class="px-4 pb-10 m-auto sm:px-8 sm:rounded-lg max-w-4xl">
    <div class="intro">
          <p>L'organisation de <strong>rencontres publiques</strong> constitue un volet important des missions que s'est données le <i>Sustainable & Open IT Lab</i>.</p>
          <p>À chaque fois, nous invitons une ou plusieurs personnalités marquantes et sauf exception chaque rencontre est suivie d'un moment d'échange autour d'une petite restauration. Afin de dimensionner au mieux salles et besoins en catering, <strong>l'inscription est obligatoire</strong>.</p>
          <p>Pour aller <b>à la rencontre des publics intéressés et créer des liens en vrai</b>, le so IT Lab se déplace dans les hautes écoles de Suisse romande. Celles et ceux qui ne pourraient pas se joindre à nous physiquement ont toutefois la possibilité de suivre nos évènement en <b>live streaming</b> !</p>
    </div>
    <div class="event-list">
        <div
        v-for="event in events"
        :key="event.title"
        class="event-item"
        >
        <div class="event-main">
            <h2>{{ event.title }}</h2>
            <p class="speakers">{{ event.speakers?.join('\n') }}</p>
            <p class="description" v-html="event.description"/></div>
        <div class="event-meta">
            <span class="badge location">
            {{ event.location }}
            </span>
            <span class="badge institution">
            {{ event.institution }}
            </span>
            <span class="badge date">{{ event.date }}</span>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.intro, 
.event-list {
  background: var(--light, #F3F3F3);
  border: 1px solid var(--dark, #252525);
  border-radius: 12px;
  padding: 1rem 2rem;
  /* sharp shadow */
  box-shadow: 4px 4px 0 0 #252525;
  margin-bottom: 20px;
}
.description :deep(strong) {
  background: initial;
  color: #252525;
  font-weight: 700;
}

:global(.dark) {
.description :deep(strong) {
  color: #F3F3F3;
} 
}
.intro {
  font-size: 1rem; line-height: 1.2rem;
}

.intro p {
  line-height: 1.4rem;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
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
.event-main h2 { font-size: 1.2rem; margin-bottom: 0.3rem; }
.speakers { color: #555; font-size: 0.9rem; margin-bottom: 0.5rem; line-height: 1.2rem; white-space: pre-line; }
.description { color: #333; font-size: 0.9rem; line-height: 1.2rem;}

.event-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: flex-start; flex-shrink: 0; order: -1; }

.badge {
  padding: 0.2rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.4rem;
}
.badge.location { background: #F2D73F; color: #333; }
.badge.institution { background: #17AB59; color: #fff; }
.badge.date { background: #222; color: #fff; }
:deep(a) {
  color: var(--color-indigo-500);
}
</style>
