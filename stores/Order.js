import { defineStore } from 'pinia';

export const useOrderStore = defineStore('Order', () => {
    
  const orderItems = ref([]);
  const uniqueOrderItems = computed(() => {
    
  let unique = [];
    orderItems.value.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
  });

  const subtotal = computed(() => {
    let total = 0;
    orderItems.value.forEach((element) => {
      total += element.price ;
    });
    return total;
  });

  const tax = computed(() => {
   return subtotal.value * (10/100);
  });

  const total = computed(() => {
    return subtotal.value + tax.value;
  });



  return {
    orderItems,
    uniqueOrderItems,
    subtotal,
    tax,
    total,
  };
});
