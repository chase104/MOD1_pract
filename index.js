class Person {
    constructor(name, confidence, requiredConfidence, charisma){
        this.name = name;
        this.confidence = confidence;
        this.requiredConfidence = requiredConfidence;
        this.charisma = charisma;
    }
    convince(member){
       // make equation to raise confidence
        // me.charisma  +- 2
        // charisma +  randomVar from -2 to 2

        // random number between 0 1
        let randomVar = Math.floor(Math.random()*5) - 2;
        
        let charismaEffect = this.charisma + randomVar;

        console.log(charismaEffect);

        console.log(member);
       member.confidence += charismaEffect;
       console.log(member);
      

    }
    discourage(){

    }
}

let me = new Person("Albruce", 100, 30, 20);


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
myFriendGroup.addFriend("Sarah", 10, 65, 10);
myFriendGroup.addFriend("Sasha", 10, 50, 10);
myFriendGroup.addFriend("Darren", 10, 70, 10);




// loop here

const conviceGroup = () => {
    let friends = myFriendGroup.friends;
    for (let i=0; i<friends.length; i++){
        // break if our confidence is too low
        if (me.confidence < me.requiredConfidence) {
            break;
        }
        // we go first - convince()
        me.convince(friends[i])
        // are they convinced enough?
        // go to next person

        // discourage()
        // check if we are too discouraged
    }

}
conviceGroup()

