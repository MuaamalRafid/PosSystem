<template>


  <div class="h-screen">
 

      <div class=" flex justify-around">
     <div class="w-[70%]">
         <div class="pt-8 mb-8">
          <div
            class="bg-SecondryColor w-fit rounded-md px-4 py-2 flex gap-2 justify-center items-center"
          >
            <Icon name="iconamoon:search-thin" color="white"></Icon>
            <input
              type="search"
              class="bg-transparent outline-none text-white"
              placeholder="Search"
              id=""
            />
          </div>
        </div>
        <div >
          <MenuCard />
        </div>
        <hr class="h-px bg-SecondryColor border-0 mb-5 mt-5 w-[85%]" />
        <div>
          <OrderCard />
        </div>
     </div>

        <!-- <div class=" text-white divide-SecondryColor h-fit divide-x-2 flex justify-center items-center gap-96">
            <div class="pl-5">w</div>
            <div class="pl-5">w</div>
            <div class="pl-5">w</div>

        </div> -->
           <div
        class="text-white py-8 pr-12 pl-6 w-[30%] flex flex-col gap-4 transition-all duration-300"
      >
        <div class="flex flex-col gap-1">
          <div class="logo font-bold text-xl">Table 5</div>
          <p class="text-sm text-gray-400">Lesli K.</p>
        </div>

        <div>
         <PlaceOrder />
        </div>
      </div>
      </div>
   
    
  </div>
</template>

<script setup>




definePageMeta({
  layout: "left-side-bar",
});
useHead({
  title: "Menu",
  meta: [
    {
      name: "description",
      content: "This is an example of a meta description. This will show up in search results.",
    },
    { property: "og:title", content: "Home" },
  ],
});


</script>