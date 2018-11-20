<template>
  <footer class="footer-wrapper gutters">
    <div class="footer">
      <a href="/" title="Visit Ocean+">
        <img src="../assets/images/ocean-plus-main-logo.svg" alt="Ocean+ logo" class="footer__partner-logo logo--site"/>
      </a>

      <div class="flex flex-wrap flex-center">
        <div class="flex flex-wrap flex-center">
          <a href="https://geobon.org" title="Visit GEO BON" target="_blank">
            <img src="../assets/images/logo-geobon.svg" alt="GEO BON logo" class="footer__partner-logo logo--geobon" />
          </a>
          <a href="http://proteuspartners.org" title="Visit Proteus Partners" target="_blank">
            <img src="../assets/images/logo-proteus.svg" alt="Proteus logo" class="footer__partner-logo logo--proteus" />
          </a>
          <a href="https://www.unep-wcmc.org" title="Visit the UN Environment World Conservation Montioring Centre" target="_blank">
            <img src="https://s3.amazonaws.com/wcmc.logo/UN-Environment-WCMC+logo+2017+white.svg" alt="UN Environment World Conservation Monitoring logo" class="footer__partner-logo logo--wcmc" />
          </a>
        </div>

        <span class="footer__copyright">&copy; copyright {{ currentYear }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'site-footer',

    computed: {
      currentYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>
