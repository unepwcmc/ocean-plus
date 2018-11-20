<template>
  <div id="app" class="bg--navy">
    <div class="home__hero-image" :style= "{ 'background-image': `url(${bgImg})` }">
      <header class="home__header">
        <img class="home__title" src="./assets/images/ocean-plus-main-logo.svg" alt="Ocean+ Logo"/>
        <div class="home__description container--small">
          <p class="home__description-paragraph" v-for="paragraph in description">{{ paragraph }}</p>
        </div>
      </header>
    </div>
    <div class="home__main container page-padding flex flex-h-center">
      <site-link v-for="site in externalSites" :key="site.id" :site="site"></site-link>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteLink from './components/SiteLink.vue'
import SiteFooter from './components/SiteFooter.vue'
import bgImg from '@/assets/images/background.jpg'

import { description, externalSites } from "./config"

export default {
  name: 'app',
  components: {
    SiteLink,
    SiteFooter
  },
  data: function () {
    return {
      description,
      externalSites,
      bgImg
    }
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/application.scss'
</style>
