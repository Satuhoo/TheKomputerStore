class Computer {
    constructor(name, price, feature, image, info) {
        this.name = name;
        this.price = price;
        this.feature = feature;
        this.image = image;
        this.info = info;
    }
}

const laptop1 = new Computer( "MacBook Air 13", 1100, `8 GB RAM, 256 GB SSD <br/> M1 chip`, 
    "../images/laptop1.jpg", `This MacBook Air is easily one of the most exciting Apple laptops of recent years. Its M1 chip is a real game-changer, and the ability to run both legacy apps, new M1-optimized apps and iOS apps is very impressive.`
)

const laptop2 = new Computer("HP EliteBook 840", 1300, `Intel Core i7-10810U Processor <br/> Windows 10 Pro 64-bit Edition`, 
    "../images/laptop2.jpg", "Business-oriented high-end notebook and mobile workstation made by HP"
)

const laptop3 = new Computer("MacBook Pro 13 MWP72", 2200, "Intel® Core™ i5 processor, 2 GHz", 
    "../images/laptop3.jpg", `MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage, and more — all in a compact 3-pound package.`
)

const laptop4 = new Computer("Lenovo Ideapad 3", 600, `Intel® Core® i5-1035G1 <br/> 8 GB DDR4 RAM`, 
    "../images/laptop4.jpg", `The Lenovo IdeaPad 3 14 "Laptop is perfect for working and browsing on the go. With a slim design, it fits easily into your bag and can be taken anywhere. And at 1.5 kg, it won't weigh you down either.`
)

let laptops = [laptop1, laptop2, laptop3, laptop4];

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
const getData = () => {
    document.getElementById("feature").innerHTML = `<b>Features:</b> <br/> ${laptop.feature}`;
    document.getElementById("name").innerHTML = laptop.name;
    document.getElementById("info").innerHTML = laptop.info;
    document.getElementById("price").innerHTML = laptop.price + " €";
    document.getElementById("image").src = laptop.image;
}

getData();