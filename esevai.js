const services=[{
    name:"PAN Card",
    price:"250Rs",
    id:"pan"
},
{
    name:"Voter ID",
    price:"100Rs",
    id:"voter"
},
{
    name:"Income Certificate",
    price:"100Rs",
    id:"income"
},
{
    name:"Community Certificate",
    price:"100Rs;",
    id:"community"
},
{
    name:"Nativity Certificate",
    price:"100Rs",
    id:"nativity"
},
{
    name:"Passpport",
    price:"2700Rs",
    id:"passport"
},
{
    name:"License",
    price:"1500Rs",
    id:"license"
},
{
    name:"Employment Registration",
    price:"150Rs",
    id:"employment"
}
]
const serviceContainer=
document.getElementById("servicecontainer");
services.forEach(function(service){
    serviceContainer.innerHTML+=`<div class="card">
    <h3>${service.name}</h3>
    <p>service charge:${service.price}</p>
    <button onclick="window.location.href=
    'servicerequest.html?service=${service.id}'">
    view details</button>
    </div>`;
});