<template>
  <div>
    <div class="bg-MainColor w-screen h-fit flex ">
      <div class="w-[20%]">
        <NuxtLayout name="left-side-bar"></NuxtLayout>
      </div>
      <div class="w-[50%]">
        <NuxtLayout name="main-content"></NuxtLayout>
      </div>
      <div class="w-[30%]">
      <NuxtLayout name="right-side-bar"></NuxtLayout>
      </div>
         
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>



<style>

</style>
