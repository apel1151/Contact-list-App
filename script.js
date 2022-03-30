const addBtn = document.getElementById('submit-btn');
const cancelBtn= document.getElementById('cancel-btn');
const resetBtn = document.getElementById('reset-btn');
const recordContainer = document.querySelector('.record-container');
const deleteBtn = document.getElementById('delete-btn');


const namee = document.getElementById('name');
const address = document.getElementById('address');
const number = document.getElementById('contact-num');

// let contactArray = [];
let id = 0;

addBtn.addEventListener('click', function(){
    const nameInputVal = namee.value;
    const addressInputVal = address.value;
    const numberInputVal = number.value;
    addToList(nameInputVal, addressInputVal, numberInputVal);
    
});


function addToList(item1, item2, item3){
    const newRecordDiv = document.createElement('div');
    newRecordDiv.classList.add('record-item');
    newRecordDiv.innerHTML = `
    <div class="record-el">
        <span id="labelling">Contact ID: </span>
        <span id="contact-id-content">${id++}</span>
    </div>
    <div class="record-el">
        <span id="labelling">Name: </span>
        <span id="contact-id-content">${item1}</span>
    </div>
    <div class="record-el">
        <span id="labelling">Address:  </span>
        <span id="contact-id-content">${item2}</span>
    </div>
    <div class="record-el">
        <span id="labelling">Contact Number: </span>
        <span id="contact-id-content">${item3}</span>
    </div>

    <button type="button"  id="delete-btn">
        <span>
            <i class="fas fa-trash"></i>
        </span>Delete
    </button>
    
    `;

    recordContainer.appendChild(newRecordDiv);
    clearInputFields();

}

cancelBtn.addEventListener('click', function(){
    clearInputFields();
})

function clearInputFields(){
    namee.value= "";
    address.value = "";
    number.value = "";
}


recordContainer.addEventListener('click', function(event){
         if(event.target.id === 'delete-btn'){
             let recordItem = event.target.parentElement;
             recordContainer.removeChild(recordItem);
         }
})


resetBtn.addEventListener('click', function(){
    removeAllRecord();
})

function removeAllRecord(){
    location.reload();
}



















// // Object Constructor for contact
// function Contact(id, name, address, number){
//     this.id = id;
//     this.name = name;
//     this.address = address;
//     this.number = number;
// }


// //Display availabel record

// document.addEventListener('DOMContentLoaded', function(){
//     contactArray =[
//         {
//             id: 10,
//             name: "John",
//             address: "Ohio",
//             number: "123-456-7890"
//         }
//     ]

//     displayRecord();
// })

// //Display Function

// function displayRecord(){
//     contactArray.forEach(function(singleContact){
//         addToList(singleContact);
//     })
// }


// //Adding contact record

// addBtn.addEventListener('click', function(){
//     id++;
//     const contact = new Contact(id, name.value,address.value, number.value );
//     contactArray.push(contact);

//     //adding to list
//     addToList(contact);
// })

// //Adding to list (on the DOM)




