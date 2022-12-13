class Person {
    constructor(name, confidence, requiredConfidence, charisma){
        this.name = name;
        this.confidence = confidence;
        this.requiredConfidence = requiredConfidence;
        this.charisma = charisma;
    }
    convince(){

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


console.log(me);
console.log(myFriendGroup);


// create instance of person
