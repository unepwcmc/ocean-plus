<template>
  <div class="banner-background">
    <div class="banner">
      <div class="banner__title">
        <p class="banner__text"> <img class='banner__alert' src='../assets/images/triangle-alert.svg'/> Changes to Ocean+ </p>
      </div>
      <div class="banner__content">
        <p>
          Ocean+ Data Viewer and Ocean+ Library will be retired in 2025.
          To learn more about these changes, please read our
          <ModalLauncher wrapper-component="span">
            <template v-slot:launcherContent>frequently asked questions.</template>
            <template v-slot:default="{ closeModal }">
              <modal-panel :close-modal="closeModal">
                <template slot="modalHeaderContent">
                  <h2>Frequently Asked Questions.</h2>
                </template>
                <template slot="default">
                  <BannerFaqs/>
                </template>
              </modal-panel>
            </template>
          </ModalLauncher>
        </p>
        <p>
          Alternative ways of accessing the ocean data hosted on these platforms can be found on the
          <a target="_blank" href="http://data.unep-wcmc.org">Ocean+ Data Viewer</a> and
          <a target="_blank" href="https://library.oceanplus.org/">Ocean+ Library</a> pages.
        </p>
        <p>
          <a target="_blank" href="https://habitats.oceanplus.org/">Ocean+ Habitats</a>
          will continue to be updated and remain a trusted source of authoritative
          information on the status and conservation of the world’s coastal habitats.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerFaqs from './BannerFaqs.vue';
  import ModalLauncher from './modal/Launcher.vue'
  import ModalPanel from './modal/Panel.vue'

  export default {
    name: 'site-banner',

    components: {
      BannerFaqs, ModalLauncher, ModalPanel
    },
  }
</script>
