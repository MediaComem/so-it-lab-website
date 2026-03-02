<template>
  <div class="prose home px-4 pb-10 m-auto sm:px-8 sm:rounded-lg max-w-4xl">

    <!-- Hero -->
    <section class="">
        <h1 class="text-center">
          Sustainable &amp; Open IT Lab
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <p>
            Le Sustainable &amp; Open IT Lab est né en 2025 de la volonté de quelques collègues de la
            <strong>Haute école spécialisée de Suisse Occidentale (HES-SO)</strong>
            issu·e·s des sciences de l'ingénieur et des sciences sociales de proposer un espace de
            réflexion et de projets à celles et ceux préoccupé·e·s par la mise en œuvre d'un
            <strong>numérique libre et souverain</strong> d'une part, et
            <strong>écologiquement soutenable</strong> d'autre part.
          </p>
          <p>
            Le soIT-Lab propose un espace de mise en commun et un pôle d'expertise, arrimé aux
            formations d'ingénieur·e·s de la HES-SO, pour mobiliser des savoirs et outils qui sont généralement minorés ou marginalisés,
            ainsi que de coaliser des forces sociales trop souvent dispersées.
          </p>
        </div>
    </section>

    <!-- Audience banner -->
    <section>
      <div>
        <p>
          Aux collègues intéressé·e·s de la HES et des hautes écoles
          romandes, à nos étudiant·e·s ainsi qu'aux professionnel·le·s de l'IT et au grand
          public, nous proposons&nbsp;:
        </p>
      </div>
    </section>

    <!-- Services grid -->
    <section class="subsections">
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <!-- Rencontres publiques -->
          <div class="subsection">
            <h2>Rencontres publiques</h2>
            <p>
              Vers un dialogue entre actualité de la recherche et pratiques/savoirs des industriels, des pouvoirs publics et de la société civile, autour des communs numériques, de la soutenabilité forte du numérique et ses usages.
            </p>
          </div>

          <!-- Communauté de pratique -->
          <div class="subsection">
            <h2>Communauté de pratique</h2>
            <p>
              Un espace permanent d'échanges axé sur l'intégration des communs et des enjeux de
              soutenabilité dans les cursus spécialisés dans les technologies de l'information, et plus
              généralement sur la mise en place de politiques dites de numérique responsable dans les
              hautes écoles.
            </p>
          </div>

          <!-- Incubation de projets -->
          <div class="subsection">
            <h2>Incubation de projets</h2>
            <p>
              Basés sur des technologies libres et open source et/ou centrés sur des problématiques
              d'informatique low-tech/durable, nous conseillons/soutenons l'émergence de projets
              d'étudiant·e·s et de collègues.
            </p>
          </div>

          <!-- Formation et ateliers — full width -->
          <div class="subsection">
            <h2>Formation et ateliers</h2>
            <p>
              Une offre de conseil et de formation ancrée dans l'actualité de la recherche scientifique
              sur les grands thèmes des communs et de la soutenabilité numériques. A celles et ceux qui
              auraient des besoins - de vulgarisation ou plus poussés - dans leurs établissements ou
              organisations.
            </p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Static page — no dynamic data
</script>

<style>
.prose {
    p {
        margin: 0px;
    }
}
section:not(.subsections),
.subsection {
  border-radius: 12px;
  border: 1px solid var(--dark, #252525);
  background: var(--light, #F3F3F3);

  /* sharp shadow */
  box-shadow: 4px 4px 0 0 #252525;

  padding: 20px;

  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.subsection {
    margin-top: 0px;;
}

h2 {
  margin-top: 0px;
}

</style>