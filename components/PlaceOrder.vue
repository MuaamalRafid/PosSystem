<template>
  <div id="print">
    <div v-if="orderStore.uniqueOrderItems.length>0" class="max-h-[325px] w-96 print:max-h-full print:overflow-visible  overflow-hidden  overflow-y-scroll rounded-md">
      <div
     
      v-for="(item,index) in orderStore.uniqueOrderItems" :key="item.id"
    >


     <div 
        class="hidden print:flex print:flex-col print:px-2 print:gap-2 print:bg-white w-full  "
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <div
            >
              {{ index + 1 }}-
            </div>
            <h1 class=" w-16 whitespace-nowrap ">
              {{ item.name }}
            </h1>
          </div>
           <div class="">
              ${{ item.price }}
              <span class="text-gray-500">x{{ item.count }}</span>
           </div>
          <h1>${{ (item.price * item.count).toFixed(2) }}</h1>
        </div>
        <hr class="border-dotted bg-gray-600">
      </div>



      <div 
      v-if="orderStore.uniqueOrderItems.length>0"
        class=" print:bg-white print:hidden  "
      >
        <div :id="item.name" class="flex justify-between   p-3 bg-SecondryColor hide  w-full  mb-2 rounded-md transition-all duration-700 scroll-smooth">
          
          <div class="flex gap-2 justify-center items-center">
            <button @click="remove(item)" class="mr-2 bg-red w-5 h-5 rounded-full flex justify-center items-center text-sm">X</button>
            <div
              class="bg-white text-black rounded-full h-6 w-6 flex justify-center items-center"
            >
              {{ index + 1 }}
            </div>
            <h1>
              {{ item.name }}
              <span class="text-gray-500">x{{ item.count }}</span>
            </h1>
          </div>
          <h1>${{ (item.price * item.count).toFixed(2) }}</h1>
        </div>
      </div>
    </div>
    </div>

  <div>
    <div 
     
      :class="`bg-SecondryColor ${paymentHeight} print:w-full w-full  mt-2 print:bg-white rounded-md gap-8  flex flex-col p-4 transition-all duration-1000`"
    >

    <div v-if="orderStore.orderItems.length>0" class="flex flex-col ">
       <div class="mb-3">
         <div class="flex justify-between  items-center mb-1">
            <h1>Subtotal</h1>
            <h1>${{orderStore.subtotal.toFixed(2)}}</h1>
        </div>
          <div class="flex justify-between items-center">
            <h1>Tax 10%</h1>
            <h1>${{ orderStore.tax.toFixed(2) }}</h1>
        </div>
       </div>
       <hr class=" border-dotted bg-gray-600 mb-2">

       <div class="flex justify-between print:justify-center print:gap-10 items-center">
        <h1 class=" text-xl">Total</h1>
        <h1 class=" text-lg">${{ orderStore.total.toFixed(2) }}</h1>
       </div>
    </div>

    <div v-else class="h-[500px] pt-12 mt-0  flex flex-col gap-2 justify-center items-center">
         <div class=" font-bold text-xl text-[#898a8a3c]">No Items</div>
         <Icon size="36px" name="mdi:archive-off-outline" class=" text-[#898a8a3c]"></Icon>
    </div>
    

    <div>
      <div class=" hidden  print:flex flex-col justify-between items-center">
        <h1>Welcome in Our Resturant</h1>
        <h1>Cheers Gruce</h1>
        <Icon size="100px" name="arcticons:foodora-dk"></Icon>
      </div>
    </div>

      <div class="flex flex-col  print:hidden">
        <h1>Pyment Method</h1>
        <div class="flex w-full justify-center   gap-4 items-center mt-4 ">
          <div class=" flex flex-col gap-2 items-center">
            <button class="px-8 py-3 border-[1px] rounded-lg focus:bg-white transition-all duration-300 focus:text-black flex justify-center items-center">
                <Icon size="22px" name="cib:cashapp" ></Icon>     
            </button>
             <p class=" text-sm font-semibold">Cash</p>
          </div>
            <div class=" flex flex-col gap-2 items-center">
            <button class="px-8 py-3 border-[1px] rounded-lg focus:bg-white transition-all duration-300 focus:text-black flex justify-center items-center">
                <Icon size="22px" name="streamline:money-atm-card-1-credit-pay-payment-debit-card-finance-plastic-money" ></Icon>
            </button>
            <p class="text-sm font-semibold">Depit Card</p>
          </div>
            <div class=" flex flex-col gap-2 items-center">
            <button class="px-8 py-3 border-[1px] rounded-lg focus:bg-white transition-all duration-300 focus:text-black flex justify-center items-center">
                <Icon size="22px" name="ic:baseline-account-balance-wallet" ></Icon>
            </button>
            <p class="text-sm font-semibold">E-Wallet</p>
          </div>
         
         
        </div>
         <button @click="print" :disabled="orderStore.orderItems.length<=0"   class=" disabled:cursor-not-allowed bg-white text-MainColor rounded-full flex justify-center transition-all duration-300 items-center py-2 mt-4 self-center w-64">
          <div v-if="show" class="font-semibold active:opacity-75 transition-all w-7 h-7  duration-300"><img src="/doc.gif" alt=""></div>
          <div v-else class="font-semibold transition-all duration-300">Place Order</div>
         </button>
      
       
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useOrderStore } from "~/stores/Order";
import { useMenuStore } from "~/stores/Menu";
const menuStore = useMenuStore();
const orderStore = useOrderStore();

const show = ref(false);
const print = () => {
  show.value = true;
  setTimeout(() => {
  const printarea = document.getElementById("print").innerHTML;
  const original = document.body.innerHTML;
    document.body.innerHTML = printarea;
   document.body.style.display = "hidden";
    window.print();
   

  document.body.innerHTML = original;
  location.reload();

  }, 2000);
};

const remove = (item) => {
     item.count = 0;
 orderStore.orderItems = orderStore.orderItems.filter(
    (orderItem) => orderItem.name !== item.name
  );
  //  transH(item);
 
  // setTimeout(() => {
   
 
  
    
  // }, 700);
   
};

const paymentHeight = computed(() => {
  if (orderStore.orderItems.length == 0) {
    return "h-[800px]";
  } else {
    return "h-[450px]";
  }
});

// const transH = (item) => {
//   if (item.count == 0) {
//     document.getElementById(`${item.name}`).classList.add("hide")
//     document.getElementById(`${item.name}`).classList.remove("show")
//   }


// };
</script>
