<template>
  <div class="banner-background">
    <div class="banner">
      <div class="banner__title">
        <p class="banner__text"> <img class='banner__alert' src='../assets/images/triangle-alert.svg'/> Ocean+ in 2025 </p>
      </div>
      <div class="banner__content">
        <p>
          <a target="_blank" href="https://habitats.oceanplus.org/">Ocean+ Habitats</a>
          will remain online and continue to be a trusted source of authoritative
          information on the status and conservation of the world's coastal habitats.
        </p>
        <p>
          <a target="_blank" href="http://data.unep-wcmc.org">Ocean+ Data Viewer</a> and
          <a target="_blank" href="https://library.oceanplus.org/">Ocean+ Library</a>
          will be retired in early 2025.
          For new ways of accessing the ocean data previously hosted on
          <a target="_blank" href="http://data.unep-wcmc.org">Ocean+ Data Viewer</a> and
          <a target="_blank" href="https://library.oceanplus.org/">Ocean+ Library</a>,
          please read our
          <ModalLauncher wrapper-component="span">
            <template v-slot:launcherContent>Frequently Asked Questions.</template>
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
