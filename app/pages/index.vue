<template>
  <div class="prose home px-4 pb-10 m-auto sm:px-8 sm:rounded-lg max-w-4xl">

    <!-- Hero -->
    <section class="">
        <h1 class="text-center">
          Le Sustainable &amp; Open IT Lab
        </h1>
        <!-- <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">-->
        <div>
          <p>
            En 2025, le <i>Sustainable &amp; Open IT Lab</i> est né de la volonté de quelques collègues
            de la Haute école spécialisée de Suisse Occidentale (HES-SO)
            issu·e·s des <strong>sciences de l'ingénieur</strong> et des <strong>sciences sociales</strong> 
            de proposer un espace de réflexion et de projets à celles et ceux
            préoccupé·e·s par la mise en œuvre d'un numérique <strong>libre et souverain</strong>
            d'une part, <strong>socialement juste et écologiquement soutenable</strong> d'autre part.
          </p>
          <p class="pt-8">
            Espace de <strong>mise en commun</strong> et <strong>pôle d'expertise</strong>, arrimé aux formations
            d'ingénieur·e·s desquelles il émane, le <i>so IT Lab</i> s'est ainsi donné
            pour mission de visibiliser et de mutualiser les forces autour des
            savoirs et outils visant ces  grands objectifs, qui n'ont jamais été
            aussi centraux pour le futur de nos sociétés.
          </p>
        </div>
        <div>
          <p class="pt-8">
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
            <h2 class="text-center">Rencontres publiques</h2>
            <p class="subblock">
              Des <a href="events">moments réguliers d'échanges</a> autour des communs et de la
              soutenabilité forte du numérique et de ses usages, pour mettre en
              lumière les acteurs et projets vertueux, et instaurer un dialogue plus
              étroit entre actualité de la recherche et pratiques et savoirs des
              industriels, des pouvoirs publics et de la société civile.

            </p>
          </div>

          <!-- Communauté de pratique -->
          <div class="subsection">
            <h2 class="text-center">Communauté de pratiques</h2>
            <p class="subblock">
             Un espace permanent d'échanges et de production de connaissances axé sur
              l'intégration des communs et des enjeux de soutenabilité au sein des
              cursus spécialisés dans les technologies de l'information, et plus
              généralement sur la mise en place de politiques dites de numérique
              responsable dans les hautes écoles et les services publics.
            </p>
          </div>

          <!-- Incubation de projets -->
          <div class="subsection">
            <h2 class="text-center">Incubation de projets</h2>
            <p class="subblock">
              Basés sur des technologies libres et open source et/ou centrés sur des
              problématiques d'informatique low-tech/durable, nous
              conseillons/soutenons l'émergence de projets de collègues et
              d'étudiant·e·s. Nous travaillons actuellement activement à nos deux
              premières initiatives : un grenier d’outils libres pour la gestion de
              filières d’enseignement et un espace de coaching pour les étudiant·e·s
              désireux/euses de s'essayer à l'installation et à la maintenance de
              solutions logicielles ouvertes.                 
            </p>
          </div>

          <!-- Formation et ateliers — full width -->
          <div class="subsection">
            <h2 class="text-center">Formations et ateliers</h2>
            <p class="subblock">
              Une offre de conseil et de formations ancrée dans l'actualité de la
              recherche scientifique sur les grands thèmes des communs, de la
              soutenabilité et des inégalités numériques. A celles et ceux qui dans
              leurs établissements ou organisations auraient des besoins, qu'ils
              soient de vulgarisation ou plus experts, n'hésitez pas à <a href="/members">nous contacter</a>. 
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
