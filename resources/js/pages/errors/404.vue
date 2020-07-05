<template>
  <card class="text-center">
    <h3 class="mb-4">
      Page not found
    </h3>

    <div class="links">
      <router-link :to="{ name: 'welcome' }">
        Go Home
      </router-link>
    </div>
  </card>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>