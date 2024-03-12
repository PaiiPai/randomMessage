// Declare the Sectors
const sectors = [0, 112, 347, 1759, 2813, 2814, 2828, 3600];

// Build all spectrum of lantern corps
const lanterns = {
  // Green Lantern corps
  green: {
    intro:
      "You have the ability to overcome great fear. Welcome to the Green Lanern corps.",
    sectors,
    partners: ["Hal Jordan", "Kyle Rayner", "Jessica Cruz"],
  },

  // Sinestro corps
  yellow: {
    intro:
      "You have the ability to instill greate fear. Welcome to the Sinestro corps.",
    sectors,
    partners: ["Thal Sinestro", "Arkillo", "Lyssa Dark"],
  },

  // Blue Lantern corps
  blue: {
    intro:
      "You have the ability to instill great hope. Welcome to the Blue Lantern corps",
    sectors,
    partners: ["Saint Walker", "Brother Warth"],
  },

  // Red Lantern corps
  red: {
    intro:
      "You have great rage in your heart. You belong to the Red Lantern corps.",
    sectors,
    partners: ["Atrocitus", "Bleeze", "Dex-Starr"],
  },

  // Star Sapphire
  violet: {
    intro: "You have great love in your heart. Welcome to the Star Sapphire.",
    sectors,
    partners: ["Carol Ferris", "Fatality"],
  },

  // Orange Lantern corps
  orange: {
    intro: "You want it all. You can have it all.",
    sectors,
    partners: ["Glomulus", "Larfleeze"],
  },

  // Indigo Tribe
  indigo: {
    intro:
      "You have the ability to feel great passion. Welcome to the Indigo Tribe",
    sectors,
    partners: ["Iroque", "Munk", "Kreaven"],
  }
};

// random number generator function
const randomizer = n => {
  const random = Math.floor((Math.random() * n));
  return random;
}

// function that logs random message
const randomMsg = () => {
  // randomly select lantern ring
  const allColors = Object.getOwnPropertyNames(lanterns);
  let n = allColors.length;
  let random = randomizer(n);
  const lantern = lanterns[allColors[random]];
  
  console.log('');
  console.log(lantern.intro);
  console.log('');

  // randomly select which sector to patrol
  n = lantern.sectors.length;
  random = randomizer(n);
  const sector = lantern.sectors[random];

  console.log(`Your mission is to protect the Sector ${sector}.`);
  console.log('');

  n = lantern.partners.length;
  random = randomizer(n);
  const partner = lantern.partners[random];

  console.log(`Your partner will be ${partner}.`);
  console.log('');
  console.log('Good Luck, Lanterns');
  console.log('');
}

randomMsg(randomizer);