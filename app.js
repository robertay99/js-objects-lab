const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[59].name)
// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game["difficulty"] = ["Easy", "Med", "Hard"];
// console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemon = pokemon.filter((poke) => poke.starter === true);
game.party.push(...starterPokemon);
// console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const waterTypePokemon = pokemon.filter((poke) => poke.type === "water");
const topThreeWaterType = waterTypePokemon.slice(0, 3);
game.party.push(...topThreeWaterType);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
const trueForGymsBelowThree = game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
trueForGymsBelowThree;
// console.log(game.gyms.filter((gym) => gym.completed === true))

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/
function evolveStarters(party, allPokemon) {
    party.forEach((poke, index) => {
      if (poke.starter) {
        const evolvedNumber = poke.number + 1;
        
        const evolvedPokemon = allPokemon.find(pokemon => pokemon.number === evolvedNumber && pokemon.starter === true);
        //  console.log(evolvedPokemon)
        
        if (evolvedPokemon) {
            party.splice(index, 1, evolvedPokemon);
        }
      }
    });
  }

  (evolveStarters(game.party, pokemon))
//   console.log(game.party)

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
const printStarterPokemon = pokemon.forEach((poke) => {
    if(poke.starter == true) console.log(poke.name)
})

printStarterPokemon
