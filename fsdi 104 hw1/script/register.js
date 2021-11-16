console.log("register");
let salon={
    name:"Fashion Pet",
    address:{
        street:"University",
        number:"758-k",
        zip:"22569",
        state:"CA",
        city:"San Diego"
    },
    hours:{
        open:"9:00am",
        close:"20:00pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Nails",
            owner:"Shaggy",
            phone:"666-666-6666" 
        },
        {
            name:"Flippy",
            age:40,
            gender:"Female",
            breed:"Hound",
            service:"Grooming + Nails",
            owner:"Shaggy",
            phone:"777-777-7777"
        },
        {
            name:"Floppy",
            age:30,
            gender:"Female",
            breed:"Mixed",
            service:"Nails",
            owner:"Shaggy",
            phone:"888-888-8888" 
        }

    ]
}
console.log(salon.address.city);
console.log(salon.pets);
alert(salon.pets.length+" registered pets");

function simpleDisplay(){
    // display pet names on the console
    // for(i=0; i<salon.pets.length;i++){console.log(salon.pets[i].name);
    }
    {
    console.log(salon.pets[0].name);
    console.log(salon.pets[1].name);
    console.log(salon.pets[2].name);
    console.log(salon.pets[3].name);

}
simpleDisplay();