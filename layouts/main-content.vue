<template>
    <div class="">
        <div class=" pt-8 mb-8  ">
            <div class=" bg-SecondryColor w-fit rounded-md px-4 py-2 flex gap-2 justify-center items-center">
                <Icon name="iconamoon:search-thin" color="white"></Icon>
                <input type="search" class=" bg-transparent outline-none text-white" placeholder="Search"  id="">
            </div>
        </div>
        <div>
            <MenuCard />
        </div>
        <hr class=" h-px  bg-SecondryColor border-0 mb-5 mt-5">
        <div>
            <OrderCard />
        </div>
   
        <!-- <div class=" text-white divide-SecondryColor h-fit divide-x-2 flex justify-center items-center gap-96">
            <div class="pl-5">w</div>
            <div class="pl-5">w</div>
            <div class="pl-5">w</div>

        </div> -->
    </div>
</template>