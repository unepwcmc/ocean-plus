<template>
  <div class="site-link">
    <template>
      <img v-if="site.image" class="site-link__logo" :src="imagePath" :alt="`${site.name} Logo`"/>
      <h1 v-else class="site-link__title">{{ site.name }}</h1>
    </template>
    <p>{{ site.description }}</p>
    <a :href="site.link">Click here</a>
    </div>
</template>

<script>
export default {
  props: {
    site : {
      required: true,
      type: Object
    }
  },

  computed: {
    imagePath () {
      return require(`@/assets/${this.site.image}`)
    }
  }
}
</script>


