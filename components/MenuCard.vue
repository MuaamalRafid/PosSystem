<template>
  <div>
    <div class="grid md:grid-cols-4 grid-cols-3 gap-3 w-[85%] ">
      <div
        @click="getId(item.id)"
        v-for="item in Menu"
        :key="item.id"
        :style="`background-color:${item.color}`"
        :class="`card cursor-pointer  active:opacity-80 transition-opacity duration-300  h-40 w-[100%] py-6 pl-3 rounded-md gap-3 space-y-8`"
      >
        <Icon size="24px" :name="item.icon"></Icon>
        <div class="">
          <h1 class=" w-full text-lg font-bold">{{ item.name }}</h1>
          <p class="text-[#898a8a]">{{ item.items.length }} Items</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMenuStore } from "~/stores/Menu";
const menuStore = useMenuStore();
const { Menu, selectedIde } = storeToRefs(menuStore);
const getId = (id) => {
  selectedIde.value = id-1;
};
</script>
