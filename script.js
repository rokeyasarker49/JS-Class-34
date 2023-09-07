// const student={
//     name: "Rokeya Sarker",
//     job: "MERN Stack Web Developer"
// }

// console.log(student);


// const person = new Object();
// person.name = "Rokeya Sarker";
// // console.log(person);


// // const human = Object.create(null);
// // human.name ="Rokeya Sarker";
// // console.log("Rokeya Sarker");



// // const human = Object.create(student);
// // console.log(human.name);


/*class People {
        constructor(name, age){
            this.name=name;
            this.age =age;
        }
    }
    
    const people1 = new People("Rokeya Sarker", 20);
    const people2 = new People("Mrs Asif", 21);
    console.log(people1);
    console.log(people2);*/

    const bottle ={
        color:'Green',
        hold:'Water',
        price:50,
        inCleaned:true,
    }
    
    const bottleKeys = Object.keys(bottle);
    console.log(bottleKeys);
    
    const bottleValues = Object.values(bottle);
    console.log(bottleValues);