// contains catalog of products 
var catalog = {
    1: {name: "Apple", price: "5.99", image: "./images/apple.png" , short_description: "A beautiful apple", long_description: "A beautiful apple"},
    2: {name: "T-Shirt", price: "25.00", image: "./tshirt.webp", short_description: "A T-shirt", long_description: "A T-shirt"},
    3: {name: "Grapes", price: "10.00", image: "./images/grapes.png", short_description: "Tasty Grapes", long_description: "Tasty Grapes"},
    4: {name: "Coffee Maker", price: "1.99", image: "./COFFEMAKER.jpg", short_description: "ARE YOU A COFFAHOLIC?", long_description: "ARE YOU A COFFAHOLIC?"},
    5: {name:"HOODIES", price:"700.00", image:"./HOODIES.jpg", short_description:"MY HOODIE MY WAY",long_description:"my hoodie my way"},
    6:{name:"JEANS", price:"1002.00", image:"./jeans.webp", short_description:"COMFY+STYLISH", long_description:"COMFY+STYLISH" },
    7:{name:"phone",price:"20000.00",image:"./phone.jpg",short_description:"PHONE IS NOT THE FUTURE IT IS NOW",long_description:"PHONE IS NOT THE FUTURE IT IS NOW"},
    8:{name:"watch", price:"10000.00",image:"./watch.jpg",short_description:"WATCH YOUR WAY",long_description:"WATCH YOUR WAY"},
    9:{name:"washing machine",price:"50000.00", image:"./WM.jpg",short_description:"washing machine",long_description:"washing machine"},
    10:{name:"TV",price:"50000.00",image:"./TV.webp", short_description:"tv",long_description:"TV"},
    11:{name:"MAKEUP",price:"300.00",image:"./MAKEUP.webp",short_description:"WAKEUP AND MAKEUP",long_description:"WAKEUP AND MAKEUP"},
    12:{name:"microwave",price:"30000.00",image:"./mocrowave.jpg",short_description:"bring back life to your food",long_description:"bring back life to your food"},

    
}

// track which product is in which category 
var category = {
    food: [1, 4],
    clothes: [2],
    books: [3],
    best_sellers: [1, 2, 3, 4,5,6,7,8,9,10,11,12]
}