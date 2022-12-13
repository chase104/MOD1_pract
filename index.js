class Person {
    constructor(name, confidence, requiredConfidence, charisma){
        this.name = name;
        this.confidence = confidence;
        this.requiredConfidence = requiredConfidence;
        this.charisma = charisma;
    }
    convince(member){
        // random between -2, 2
        let randomVar = Math.floor(Math.random()*5) - 2;
        // add random to the charisma
        let charismaEffect = this.charisma + randomVar;

        // raise confidence
       member.confidence += charismaEffect;      
    }
    discourage(meObject){
         // random between -2, 2
         let randomVar = Math.floor(Math.random()*5) - 2;
         // add random to the charisma
         let charismaEffect = this.charisma + randomVar;
         // 8-12
         // raise confidence
        meObject.confidence -= charismaEffect;  

    }
}

let me = new Person("Albruce", 100, 30, 20);
me.trying = true;



class FriendGroup {
    constructor(){
        this.goingOnTrip = false;
        this.friends = [];
    }
    addFriend(name, confidence, requiredConfidence, charisma){
        let newFriend = new Person(name, confidence, requiredConfidence, charisma);
        this.friends.push(newFriend);
    }
}

let myFriendGroup = new FriendGroup();

myFriendGroup.addFriend("Jared", 10, 60, 10);
myFriendGroup.addFriend("Sarah", 10, 60, 10);
myFriendGroup.addFriend("Sasha", 10, 90, 15);
myFriendGroup.addFriend("Darren", 10, 60, 10);

// loop here

const conviceGroup = () => {
    let friends = myFriendGroup.friends;

    // loop through friends (one loop per friend)
    for (let i=0; i<friends.length; i++){
        // break if our confidence is too low
        if (me.confidence < me.requiredConfidence) {
            console.log("GAME OVER!", me.confidence);
            me.trying = false;
            break;
        }
        let keepLooping = true;
        // WHILE LOOP START
        while (keepLooping) {
            // convince
            me.convince(friends[i]);
            // check if friend is convinced enough
            if (friends[i].confidence >= friends[i].requiredConfidence) {
              let response = window.prompt("Would you like to continue?");
              if (response.toLowerCase() !== "yes") {
                me.trying = false;
              }
                // console.log(`${friends[i].name} was convinced! Their confidence is now ${friends[i].confidence}`);
                break;
            }
            // discourage
            friends[i].discourage(me);
            // check if I'm too discouraged
            if (me.confidence < me.requiredConfidence) {
                me.trying = false;
                // let the user know that someone was convinced, and ask if they would lik
                // to continue trying to convice people
                
                // console.log(`${me.name} was discouraged! His confidence is now ${me.confidence}`);
                break;
            }
        }
        // WHILE LOOP END
        console.log(`Albruce confidence is ${me.confidence}`);
    }

    if (me.trying === false) {
        myFriendGroup.goingOnTrip = false;
    } else {
        myFriendGroup.goingOnTrip = false;

    }

    // if (me.confidence >= me.requiredConfidence) {
    //     myFriendGroup.goingOnTrip = true;
    // }
}


conviceGroup();


