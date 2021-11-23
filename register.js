console.log("Register page")
let saloon={
    name:"Pet Saloon",
    address:{
        street:"University",
        number:"808-444-3322",
        zip:"96826",
        city:"San Diego"
    },
    hours:{
        open:"09:00 PST",
        Close:"19:00"
    },
    pets:[]
}
class Pet {
    constructor(name, age, gender, breed, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = ownerName;
        this.phone = contactPhone;
    }
}
let pet1=new Pet("Ollie",2,"Male","Shih Tzu","Haircut","Kamalani","888-888-8888");
let pet2=new Pet("Hulk",1,"Male","Frenchie","Wash","James","444-444-4444");
let pet3=new Pet("Stormi",3,"Female","Pom","Cut and wash","Raven","333-333-3333");
saloon.pets.push(pet1,pet2,pet3);
console.log(saloon.pets);
displayCards(pet1);
displayCards(pet2);
displayCards(pet3);

let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");

function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,);
    let newPet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,)
    saloon.pets.push(newPet)
    console.log(saloon.pets)
    displayCards(newPet);
    clear();
}
function clear(){
    txtName.value='';
    txtAge.value='';
    txtGender.value='';
    txtBreed.value='';
    txtService.value='';
    txtOwner.value='';
    txtPhone.value='';
}


function simpleDisplay(){
    for(let i=0; i<saloon.pets.length;i++){
        console.log(saloon.pets[i].name);
    }
    
}
simpleDisplay();

