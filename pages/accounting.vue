<template>
<div class="flex items-center gap-96">
    <NuxtLayout name="left-side-bar"></NuxtLayout>
    <div class=" text-7xl font-bold text-white">
        This is the accounting page
    </div>
</div>
</template>

<script setup>
useHead({
  title: "Accounting",
  meta: [
    {
      name: "description",
      content: "This is an example of a meta description. This will show up in search results.",
    },
    { property: "og:title", content: "Home" },
  ],
});
</script>