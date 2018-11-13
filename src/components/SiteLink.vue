<template>
  <div class="site-link">
    <a class="a--plain" :href="site.link">
      <img v-if="site.imagePath" class="site-link__logo" :src="site.imagePath" :alt="`${site.name} Logo`"/>
      <h1 v-else class="site-link__title">{{ site.name }}</h1>
    </a>
    <p class="site-link__description">{{ site.description }}</p>
    </div>
</template>

<script>
export default {
  props: {
    site : {
      required: true,
      type: Object
    }
  }
}
</script>


