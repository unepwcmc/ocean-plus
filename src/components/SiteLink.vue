<template>
  <div class="site-link">
    <a class="a--plain" :href="site.link">
      <img v-if="site.imagePath" class="site-link__logo" :src="site.imagePath" :alt="site.name + ' Logo'"/>
      <h1 v-else class="site-link__title">{{ site.name }}</h1>
    </a>
    <p class="site-link__description" v-html="description"></p>
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
    description: function () {
      var that = this
      
      return this.site.description.replace(/\[(.*?)\]/g, function(name) {
        return '<a class="site-link__text-link" href="'+that.site.link+'">'+name.substring(1,name.length -1)+'</a>'
      })
    }
  }
}
</script>


