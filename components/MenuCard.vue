<template>
    <div>
        <div class="grid grid-cols-4 gap-3   ">
            <div @click="clickId(item)" v-for="item in menuStore.Menu" :key="item.id" :style="`background-color:${item.color}`" :class="`card cursor-pointer ${CardColor(item.color)} active:opacity-80 transition-opacity duration-300  h-40 w-52 py-4 pl-3 rounded-md gap-3 space-y-11`">
              
                 <Icon size="24px" :name="item.icon"></Icon>
                <div class="">
                    <h1 class=" text-xl font-bold">{{item.name}}</h1>
                    <p class=" text-[#898a8a]">{{ item.items.length }} Items</p>
                </div>

            </div>


    
        </div>
    </div>
</template>

<script setup>
import { useMenuStore } from '~/stores/Menu';
const menuStore = useMenuStore();

 const clickId = (item) => {
     menuStore.selectedIde = item.id;
}


function CardColor(color) {
  
       
            return `bg-[]`;
        
    
}

</script>