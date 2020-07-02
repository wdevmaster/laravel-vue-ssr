<template>
  <div>
    <div class="text-center">
      <div class="title mb-4">{{ title }}</div>

      <div class="links">
        <a href="#">in construction</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "basic",

  data: () => ({
    title: 'LaraVue SSR'
  })
};
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>