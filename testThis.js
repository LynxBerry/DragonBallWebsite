function Bird(){
    this.name = "Falcon";
    this.length = 23;
    Animal.apply(this);
}

function Animal(){
    this.size = "Big";
}

var bird = {};
bird.create = Bird;
bird.create();
console.log(bird);