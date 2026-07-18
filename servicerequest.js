const services = {

pan:{
title:"PAN Card Apply",
description:"Apply for a new PAN Card or Correction.",
details:[
"Aadhaar Card",
"Passport Size Photo",
"Mobile Number",
"Email ID"
]
},

voter:{
title:"Voter ID Apply",
description:"Apply for a New Voter ID or Correction.",
details:[
"Aadhaar Card",
"Passport Size Photo",
"Mobile Number"
]
},

income:{
title:"Income Certificate",
description:"Apply for New Income Certificate.",
details:[
"Aadhaar Card",
"Ration Card",
"Income Details"
]
},

community:{
title:"Community Certificate",
description:"Apply for Community Certificate.",
details:[
"Aadhaar Card",
"Family Card",
"Community Proof"
]
},

birth:{
title:"Birth Certificate",
description:"Apply for Birth Certificate.",
details:[
"Hospital Record",
"Parent Aadhaar",
"Mobile Number"
]
},
nativity:{
    title:"Nativity Certificate",
    description:"Apply for Nativity Certificate.",
    details:[
        "Aadhar number",
        "photo",
        "Old nativity Certificate"
    ]


}

};

const params = new URLSearchParams(window.location.search);

const service = params.get("service") || "pan";

const data = services[service];

document.getElementById("servicetitle").textContent = data.title;

document.getElementById("servicedescription").textContent = data.description;

const list = document.getElementById("servicelist");

list.innerHTML = "";

data.details.forEach(function(item){

list.innerHTML += `<li>${item}</li>`;

});