<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div
        class="sm:text-4xl md:text-2xl font-bold w-full text-center sm:text-left"
      >
        <div class="leading-tight">
          2 joueurs sur-entrainés, 1 page de départ, 1 autre d'arrivée.<br />
          5 minutes pour cliquer sur les hyperliens devant une foule en
          délire.<br />
        </div>
        <div class="text-blue-full leading-tight">
          #wikiwars
        </div>
      </div>
    </div>

    <div class="container-inner mx-auto">
      <div class="flex flex-wrap items-start">
        <div class="w-full md:w-2/3 py-6 self-center">
          <h3 class="text-2xl font-bebas font-bold text-center md:text-left">
            WIKI <span class="ww-title">WHAT?</span>
          </h3>
          <ul class="text-lg sm:text-xl">
            <li>
              <b>Un tournoi</b> : 16 joueurs, des rencontres en 1 contre 1.
            </li>
            <li>
              <b>Une partie</b> : 5 minutes maximum pour se rendre d’une page de
              départ à une autre d’arrivée, toutes deux tirées au sort.
            </li>
            <li>
              <b>Une règle</b> : Sauter de page en page via les seuls hyperliens
              des articles et la recherche du navigateur (CTRL+F).
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 py-6">
          <h3 class="text-2xl font-bebas font-bold text-center md:text-left">
            UPCOMING <span class="ww-title">EVENTS </span>
          </h3>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/wikiwarsgg"
            data-tabs="events"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/wikiwarsgg"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/wikiwarsgg">WikiWars</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="overflow-x-hidden bg-black">
      <div class="container-inner mx-auto p-4">
        <video autoplay loop width="100%">
          <source src="../assets/video.webm" type="video/webm" />
          <source src="../assets/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl py-16 mb-16 relative"
      >
        <h3 class="text-2xl font-bebas font-bold text-center">
          WHAT WE <span class="ww-title">DO</span>
        </h3>

        <div
          class="absolute right-0"
          style="top: 50px; transform: translate(100%) rotate(180deg)"
        ></div>
        <ul class="text-lg sm:text-xl">
          <li class="checkmark my-6">
            <div>Evenements publics</div>
            <div class="text-lg text-gray-600">
              Des soirées originales dans des lieux originaux !
            </div>
            <!-- <div class="flex">
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
            </div> -->
          </li>
          <li class="checkmark my-6">
            <div>Soirées privées</div>
            <div class="text-lg text-gray-600">
              Animations sur mesure, team-building...
            </div>
          </li>
          <li class="checkmark my-6">
            <div>Projets pédagogiques</div>
            <div class="text-lg text-gray-600">
              Les Wikiwars comme vecteur de découverte du numérique et des
              internets.
            </div>
            <!-- <div class="flex">
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
              <g-image src="#" alt="" class="w-full md:w-1/3 p-2" />
            </div> -->
          </li>
          <li class="checkmark my-6">
            <div>Application mobile</div>
            <div class="text-lg text-gray-600">
              Jouer aux Wikiwars le midi avec ses collègues ? Oui, on l'a fait.
            </div>
            <div class="flex">
              <div class="w-1/2 text-right">
                <a
                  class="inline-block"
                  href="https://play.google.com/store/apps/details?id=gg.wikiwars.wikiwarsapp&hl=fr&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  ><img
                    alt="Disponible sur Google Play"
                    src="https://play.google.com/intl/en_us/badges/images/generic/fr_badge_web_generic.png"
                    width="145px"
                /></a>
              </div>
              <div class="w-1/2">
                <a
                  href="https://apps.apple.com/us/app/wikiwars/id1445534783?mt=8"
                  class="my-2"
                  style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-12-13&kind=iossoftware&bubble=apple_music) no-repeat;width:135px;height:40px;"
                ></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="overflow-x-hidden ">
      <div class="container-inner mx-auto mb-16 ">
        <h3 class="text-2xl font-bebas font-bold text-center">
          SUPER <span class="ww-title">SPONSORS</span>
        </h3>
        <div class="flex flex-wrap justify-center items-center mx-auto">
          <div class="w-full md:w-1/4 p-4">
            <g-image src="/partners/wikimedia.png" alt="" class="mx-auto" />
          </div>
          <div class="w-full md:w-1/4 p-4">
            <g-image src="/partners/steelseries.png" alt="" class="mx-auto" />
          </div>
          <div class="w-full md:w-1/4 p-4">
            <g-image src="/partners/jack.png" alt="" class="mx-auto" />
          </div>
          <div class="w-full md:w-1/4 p-4">
            <g-image src="/partners/sinnyooko.png" alt="" class="mx-auto" />
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="container-inner mx-auto mb-16 ">
        <h3 class="text-2xl font-bebas font-bold text-center">
          IN THE <span class="ww-title">WILD</span>
        </h3>
        <div class="flex flex-wrap justify-center items-center">
          <div class="w-full md:w-1/4 p-4">
            <a href="https://usbeketrica.com/video/wikiwars-duel-wikipedia"
              ><g-image src="/partners/usbek.png" alt="" class="mx-auto"
            /></a>
          </div>
          <div class="w-full md:w-1/4 p-4">
            <a href="https://usbeketrica.com/video/wikiwars-duel-wikipedia"
              ><g-image src="/partners/konbini.png" alt="" class="mx-auto"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative">
          <h2 class="font-bold mb-6" id="contact">
            Vous êtes toujours là ? Envoyez nous un FAX:
          </h2>
          <div class="text-lg sm:text-lg mb-16">
            <form
              action="https://formspree.io/hello@wikiwars.gg"
              method="POST"
              class="mb-12"
            >
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">
                    Nom
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-full mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">
                    Adresse email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jon@nightwatch.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-full mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-blue-full mb-2 px-4 py-4"
                  placeholder="Salut la team Wikiwars ! J'aimerai..."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Envoyer"
                  class="block bg-blue-full hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Accueil"
  }
};
</script>

