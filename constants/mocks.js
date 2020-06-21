const categories = [
  {
    id: "plants",
    name: "Culinária Regional",
    tags: ["categorias", "compras"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "seeds",
    name: "Passeios",
    tags: ["categorias", ""],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Hospedagem",
    tags: ["categorias", "compras"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "sprayers",
    name: "Artesanato",
    tags: ["categorias", ""],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "pots",
    name: "Eventos",
    tags: ["categorias", ""],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "fertilizers",
    name: "Ecoturismo",
    tags: ["categorias", ""],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const categorias = [
  {
    id: 1,
    name: "Praia Hostel",
    description:
      "Com Wi-Fi gratuito em toda a propriedade, o Praia Hostel oferece acomodação em Jacumã, a 800 metros da Praia.",
    tags: ["8 Quartos", "Almoço", "Wi-Fi"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "Maria",
  location: "Natal",
  email: "maria@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, categorias, profile };
