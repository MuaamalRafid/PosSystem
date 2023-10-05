<template>
  <div class="" >
    <div class="grid grid-cols-4 gap-3  h-96 overflow-y-scroll overflow-hidden w-[85%] ">


    <div v-for="item in items" :key="item.id"
    
   class="card flex flex-col gap-4 relative   bg-SecondryColor h-40  py-2 px-4 rounded-md cursor-pointer group "
      >
      <div :style="`background-color:${menuStore.Menu[menuStore.selectedIde - 1].color}`" class=" z-0 top-0 left-0 absolute h-full  w-2 rounded-tl-md rounded-bl-md group-hover:w-full group-hover:rounded-md transition-all duration-500"></div>
        <p class="z-10 text-[12px] group-hover:text-MainColor text-gray-400">Odrder --> Kitchen</p>
        <div class="z-10">
            <h1 class=" font-bold group-hover:text-MainColor w-96 text-white">{{item.name}}</h1>
            <p class=" group-hover:text-MainColor text-gray-400">{{item.price}}$</p>
        </div>
        <div class=" z-10 self-end flex justify-center items-center gap-4">
            <button @click="discrment(item)" class="text-2xl group-hover:text-MainColor group-hover:border-MainColor text-white font-thin border-[1px] rounded-lg w-6 h-6 flex justify-center items-center pb-0 md:pb-1">
                <div>-</div>
            </button>
            <p class="  text-xl group-hover:text-MainColor text-white font-thin">{{item.count}}</p>
            <button @click="increment(item)"  class="text-2xl text-white group-hover:text-MainColor group-hover:border-MainColor font-thin border-[1px] rounded-lg w-6 h-6 flex justify-center items-center p-0 md:pb-2 ">
                <div>+</div>
            </button>
        </div>
      </div>
</div>

     


    </div>

</template>


<script setup>
import { useMenuStore } from '~/stores/Menu';
const menuStore = useMenuStore();
import { useOrderStore } from '~/stores/Order';
const orderStore = useOrderStore();






const increment = (item) => {
  item.count++;
  addToOrder(item);
  console.log(orderStore.orderItems)
}

const discrment = (item) => {
  if (item.count > 0) {
    removeFromOrder(item);
    item.count--;
  }

}

const items = computed(() => menuStore.Menu[menuStore.selectedIde - 1].items);


const addToOrder = (item) => {
 setTimeout(() => {
    transS(item);
  }, 200);
  orderStore.orderItems.push(item);
};

  
const transS = (item) => {
  if (item.count > 0) {
      document.getElementById(`${item.name}`).classList.remove("hide")
  document.getElementById(`${item.name}`).classList.add("show")
   }
}

const removeFromOrder = (item) => {
    const index = orderStore.orderItems.indexOf(item);
    orderStore.orderItems.splice(index, 1);
};



</script>

