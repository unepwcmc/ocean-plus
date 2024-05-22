<template>
  <div class="banner-background">
    <div class="banner">
      <div class="banner__title">
        <p class="banner__text"> <img class='banner__alert' src='../assets/images/triangle-alert.svg'/> Changes to Ocean+ Library </p>
      </div>
      <div class="banner__content">
        <p v-html="bannerDesc"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'site-banner',

    data() {
      return {
        bannerDesc:
        'UNEP-WCMC are planning to restructure the Ocean Data Viewer and Ocean+ Library platforms by the end of 2024. More information can be found on these two respective platforms. We would love your feedback on this proposed restructure in the <strong>survey pop-up below</strong>.',
      }
    }
  }
</script>
