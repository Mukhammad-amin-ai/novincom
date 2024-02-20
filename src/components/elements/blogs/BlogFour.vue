<template>
  <article class="entry entry-display">
    <figure class="entry-media">
      <router-link :to="'/blog/single/default/' + blog.slug">
        <img
          v-lazy="`${baseUrl}${blog.image[0].url}`"
          alt="blog"
          :width="blog.image[0].width"
          :height="blog.image[0].height"
        />
      </router-link>
    </figure>

    <div class="entry-body text-center">
      <div class="entry-meta">
        <router-link :to="'/blog/single/default/' + blog.slug">{{
          date
        }}</router-link
        >,&nbsp;
        <router-link :to="'/blog/single/default/' + blog.slug"
          >{{ blog.comments }} Comments</router-link
        >
      </div>

      <h2 class="entry-title">
        <router-link :to="'/blog/single/default/' + blog.slug">{{
          blog.title
        }}</router-link>
      </h2>

      <div class="entry-content">
        <router-link :to="'/blog/single/default/' + blog.slug" class="read-more"
          >Continue Reading</router-link
        >
      </div>
    </div>
  </article>
</template>
<script>
import { baseUrl } from "~/repositories/repository";

export default {
  props: {
    blog: Object,
  },
  data: function () {
    return {
      baseUrl: baseUrl,
    };
  },
  computed: {
    date: function () {
      let options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "UTC",
      };

      return new Date(this.blog.date).toLocaleString("en-us", options);
    },
  },
};
</script>
