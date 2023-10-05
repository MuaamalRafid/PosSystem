<template>
  <div>
    <div class="text-white pt-10 flex flex-col gap-10 pl-10 h-full">
      <div class="logo font-bold text-2xl w-fit">Muaamal</div>
      <div class="flex flex-col gap-60">
        <ul class="flex flex-col gap-4 w-40 text-[#898a8a]">
          <NuxtLink to="reservation">
            <li >Reservation</li>
          </NuxtLink>

          <NuxtLink to="tableServices" class="w-full">
            <li>Table services</li>
          </NuxtLink>

          <NuxtLink to="/">
            <li>Menu</li>
          </NuxtLink>

          <NuxtLink to="/delivery">
            <button
              class="w-full transition-all duration-300 flex justify-start"
            >
              <li>Delivery</li>
            </button>
          </NuxtLink>

          <NuxtLink to="/accounting">
            <button
              class="w-full transition-all duration-300 flex justify-start"
            >
              <li>Accounting</li>
            </button>
          </NuxtLink>
        </ul>

        <div class="flex flex-col justify-start gap-44">
          <div class="flex flex-col justify-start gap-2">
            <button
              class="flex justify-start gap-2 border-[2px] border-SecondryColor rounded-full p-2 w-fit"
            >
              <div
                class="w-7 h-7 rounded-full bg-Menu-8 justify-center items-center text-MainColor font-semibold"
              >
                L
              </div>
              Lesli K.
            </button>
            <button
              class="flex justify-start gap-2 border-[2px] border-SecondryColor rounded-full w-fit px-2 py-1"
            >
              <div
                class="w-7 h-7 rounded-full bg-Menu-2 justify-center items-center text-MainColor font-semibold"
              >
                C
              </div>
              Cameron W.
            </button>
            <button
              class="flex justify-start gap-2 border-[2px] border-SecondryColor rounded-full w-fit px-2 py-1"
            >
              <div
                class="w-7 h-7 rounded-full bg-Menu-3 justify-center items-center text-MainColor font-semibold"
              >
                J
              </div>
              Jacob J.
            </button>
          </div>
          <div class="text-[#898a8a] w-fit">2023 © Muaamal.APP</div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- 
    <button 
            class=" w-full transition-all duration-300 flex justify-start"
          >
            <li>Reservation</li>
          </button> -->
