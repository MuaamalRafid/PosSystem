import { defineStore } from "pinia";

export const useMenuStore = defineStore("Menu", {
    state: () => ({
    selectedIde: 1,
    Menu: [
      {
        id: 1,
        name: "Breakfast",
        icon: "ic:baseline-free-breakfast",
        color: "#cfdddb",
        items: [{
          id: 1,
          name: "Eggs",
          price: 5.99,
          count: 0,
        },
          {
            id: 2,
            name: "Omelette",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Pancakes",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Waffles",
            price: 8.99,
            count: 0,
          },
          {
            id: 5,
            name: "French Toast",
            price: 9.99,
            count: 0,
          }
        ],
      },
      {
        id: 2,
        name: "Soups",
        icon: "material-symbols:soup-kitchen",
        color: "#e4cded",
        items: [
          {
            id: 1,
            name: "Tomato Soup",
            price: 5.99,
            count: 0,
          },
          {
            id: 2,
            name: "Chicken Soup",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Mushroom Soup",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Beef Soup",
            price: 8.99,
            count: 0,
          },
          {
            id: 5,
            name: "Fish Soup",
            price: 9.99,
            count: 0,
          },
          {
            id: 6,
            name: "Pumpkin Soup",
            price: 10.99,
            count: 0,
          },
        ],
      },
      {
        id: 3,
        name: "Pastas",
        icon: "mdi:pasta",
        color: "#c2dbe9",
        items: [
          {
            id: 1,
            name: "Spaghetti",
            price: 5.99,
            count: 0,
          },
          {
            id: 2,
            name: "Lasagna",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Penne",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Fettuccine",
            price: 8.99,
            count: 0,
          },
          {
            id: 5,
            name: "Ravioli",
            price: 9.99,
            count: 0,
          },
          {
            id: 6,
            name: "Tortellini",
            price: 10.99,
            count: 0,
          },
          {
            id: 7,
            name: "Macaroni",
            price: 11.99,
            count: 0,
          },
          {
            id: 8,
            name: "Linguine",
            price: 12.99,
            count: 0,
          },
        ],
      },
      {
        id: 4,
        name: "Suschi",
        icon: "bxs:sushi",
        color: "#c9caef",
       
        items: [{
          id: 1,
          name: "Sushi",
          price: 5.99,
          count: 0,
        },
          {
            id: 2,
            name: "Sashimi",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Maki",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Temaki",
            price: 8.99,
            count: 0,
          }
          
        
        ],
      },
      {
        id: 5,
        name: "Main Course",
        icon: "streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking",
        color: "#fac1d9",
        items: [{
          id: 1,
          name: "Kabsa",
          price: 5.99,
          count: 0,
        },
          {
            id: 2,
            name: "Mandi",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Margoog",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Madhbi",
            price: 8.99,
            count: 0,
          },
          {
            id: 5,
            name: "Majboos",
            price: 9.99,
            count: 0,
          },
          {
            id: 6,
            name: "Matabbak",
            price: 10.99,
            count: 0,
          },
          {
            id: 7,
            name: "Makbous",
            price: 11.99,
            count: 0,
          },
          {
            id: 8,
            name: "Marqoog",
            price: 12.99,
            count: 0,
          },
          {
            id: 9,
            name: "Dolma",
            price: 13.99,
            count: 0,
          }
        ],
      },
      {
        id: 6,
        name: "Desserts",
        icon: "streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking",
        color: "#e5dade",
        items: [{
          id: 1,
          name: "Cake",
          price: 5.99,
          count: 0,
        },
          {
            id: 2,
            name: "Ice Cream",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Baklava",
            price: 7.99,
            count: 0,
          },
          {
            id: 4,
            name: "Kunafa",
            price: 8.99,
            count: 0,
          },
          {
            id: 5,
            name: "Basbousa",
            price: 9.99,
            count: 0,
          },
          {
            id: 6,
            name: "Knafeh",
            price: 10.99,
            count: 0,
        }
        ],
      },
      {
        id: 7,
        name: "Drinks",
        icon: "streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking",
        color: "#f1c8d0",
        items: [{
          id: 1,
          name: "Water",
          price: 5.99,
          count: 0,
        },
          {
            id: 2,
            name: "Tea",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Coffee",
            price: 7.99,
            count: 0,
          }
        ],
      },
      {
        id: 8,
        name: "Alcohol",
        icon: "mdi:pasta",
        color: "#c2e9dd",
        items: [
          {
            id: 1,
            name: "3rq 3rooq",
            price: 5.99,
            count: 0,
          },
          {
            id: 2,
            name: "Berra Abeaar",
            price: 6.99,
            count: 0,
          },
          {
            id: 3,
            name: "Wisky Awsak",
            price: 7.99,
            count: 0,
          },
        ],
      },
    ],
    }),
});
