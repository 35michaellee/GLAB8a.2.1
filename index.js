
    // const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"],
    //     companion: {
    //         name: "Leo",
    //         type: "Cat",
    //         companion:{
    //             name:"frank",
    //             type:"flea",
    //             belongings:["small hat", "sunglasses"],
    //         }

    //     },
    //     roll (mod = 0) {
    //         const result = Math.floor(Math.random() * 20) + 1 + mod;
    //         console.log(`${this.name} rolled a ${result}.`)
            
        
    //     }
    // }
    // adventurer.roll();
    // adventurer.roll();
    // adventurer.roll();

    class Character {
        static DEFAULT_HEALTH = 50;
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
          this.roll = (mod = 0)=>{
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            
        
         }
        }
      }
      

      class Adventurer extends Character {
        constructor (name, role) {
          super(name);
          // Adventurers have specialized roles.
          this.role = role;
          // Every adventurer starts with a bed and 50 gold coins.
          this.inventory.push("bedroll", "50 gold coins");
        }
        // Adventurers have the ability to scout ahead of them.
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }
      }
      class Companion extends Adventure {
        constructor(name,type,belongings){ //belongings could be an array or a string thanks looslytyped javascript 

            this.name=name;
            this.type=type;
            this.belongings=belongings
        }
      }

    let robin= new Adventurer("robin", "Adventurer");
    robin.roll();
    let frank = new Companion("Frank", "flea",["small hat", "sunglasses"]);
    let leo = new Companion("leo", "Cat",frank);