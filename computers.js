let laptops = [{
    name: "MacBook Air 13", 
    price: 1100, 
    feature: `8 GB RAM, 256 GB SSD <br/> M1 chip`, 
    image: "../images/laptop1.jpg",
    info: `This MacBook Air is easily one of the most exciting Apple laptops of recent years. Its M1 chip is a real game-changer, and the ability to run both legacy apps, new M1-optimized apps and iOS apps is very impressive.`
}, {
    name: "HP EliteBook 840", 
    price: 1300, 
    feature: `Intel Core i7-10810U Processor <br/> Windows 10 Pro 64-bit Edition`, 
    image: "../images/laptop2.jpg",
    info: "Business-oriented high-end notebook and mobile workstation made by HP"
}, {
    name: "MacBook Pro 13 MWP72", 
    price: 2200, 
    feature: "Intel® Core™ i5 processor, 2 GHz", 
    image: "../images/laptop3.jpg",
    info: `MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more — all in a compact 3-pound package.`
}, {
    name: "Lenovo Ideapad 3", 
    price: 600, 
    feature: `Intel® Core® i5-1035G1 <br/> 8 GB DDR4 RAM`, 
    image: "../images/laptop4.jpg",
    info: `The Lenovo IdeaPad 3 14 "Laptop is perfect for working and browsing on the go. With a slim design, it fits easily into your bag and can be taken anywhere. And at 1.5 kg, it won't weigh you down either.`
}];

//Sets default laptop
let laptop = laptops[0];

//Changes the shown laptop when selected from dropdown menu
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function() {
    var option = dropdown.options[dropdown.selectedIndex];
    if (option.value == 1) {
        laptop = laptops[0];
    } else if (option.value == 2) {
        laptop = laptops[1];
    } else if (option.value == 3) {
        laptop = laptops[2];
    } else if (option.value == 4) {
        laptop = laptops[3];
    }
    getData();
})

//Functionality for getting and updating computer's data
function getData() {
    document.getElementById("feature").innerHTML = `<b>Features:</b> <br/> ${laptop.feature}`;
    document.getElementById("name").innerHTML = laptop.name;
    document.getElementById("info").innerHTML = laptop.info;
    document.getElementById("price").innerHTML = laptop.price + " €";
    document.getElementById("image").src = laptop.image;
}

getData();