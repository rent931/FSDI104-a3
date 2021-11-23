function displayCards(aPet){
    let petsDiv=document.getElementById("pets");
    let tmp=
    `
    <div class="pet">
    <h1>${aPet.name}</h1>
    <p>Age: ${aPet.age}</p>
    <p>Gender: ${aPet.gender}</p>
    <p>Breed: ${aPet.breed}</p>
    <p>Service: ${aPet.service}</p>
    <p>Owner: ${aPet.owner}</p>
    <p>Contact: ${aPet.phone}</p>
    <button onclick="deletePet()"x>Delete</button>
    </div>
    `;
    petsDiv.innerHTML+=tmp;
}
