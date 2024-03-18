let selected_catg;
const categories_details = [
    { src: "/Assets/category-images/all-in-one.png", name:"All in One", size:20},
    { src: "/Assets/category-images/burger.svg", name:"Burger", size:24},
    { src: "/Assets/category-images/pizza.svg", name:"Pizza", size:20},
    { src: "/Assets/category-images/fast-food.svg", name:"Fast Food", size:15}
];

const item_category=[
    {
        item_h2: "TOGETHER COMBOS [FREE ITEMS OF ₹118]",
        item_p: "All other offers applicable on Together Combos. Get that party started!",
        item_id: "id-0",
        food_item: [
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            }
        ]
    },
    {
        item_h2: "Category 2",
        item_p: "All other offers applicable on Together Combos. Get that party started!",
        item_id: "id-1",
        food_item: [
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "nonveg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            }
        ]
    },
    {
        item_h2: "Category 3",
        item_p: "All other offers applicable on Together Combos. Get that party started!",
        item_id: "id-2",
        food_item: [
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "nonveg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            }
        ]
    },
    {
        item_h2: "Category 4",
        item_p: "All other offers applicable on Together Combos. Get that party started!",
        item_id: "id-3",
        food_item: [
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "nonveg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            },
            {
                item_src: "https://assets.box8.co.in/default-picture-shape/web/product/5007",
                item_title: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_type: "veg",
                item_descrip: "Any 2 All-In-1-Meals [FREE Choco Lava Cake & Pepsi Black]",
                item_price: "₹ 520",
                item_offer: "₹ 360 Off above ₹ 550"
            }
        ]
    }
];

function load_items(items){
    const maindiv=document.querySelector(".main-div");
    items.forEach((item)=>{
        const itemsdiv=document.createElement('div');
        itemsdiv.classList.add("items-div");
        itemsdiv.setAttribute('id', item.item_id);
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const item_boxes = document.createElement('div');
        h2.classList.add("items-h2");
        h2.innerHTML=`${item.item_h2}`;
        p.classList.add("items-p");
        p.innerHTML=`${item.item_p}`;
        item_boxes.classList.add("items-boxes");
        item.food_item.forEach((card)=>{
            let food_type;
            if(card.item_type === "veg"){
                food_type = "type-veg";
            }
            else{
                food_type = "type-nonveg";
            }
            const cardbox = document.createElement('div');
            cardbox.classList.add("item-card");
            cardbox.innerHTML = `
            <img src="${card.item_src}" alt="" class="item-image">
            <div class="card-box">
                <div class="item-title">
                    <img src="/Assets/veg.svg" alt="" class="veg-nonveg ${food_type}">
                    <p class="item-title-text">
                        ${card.item_title}
                    </p>
                </div>
                <p class="item-description">
                    ${card.item_descrip}
                </p>
                <div class="purchase-box">
                    <p class="price">${card.item_price}</p>
                    <button class="purchase-btn">Buy Now</button>
                </div>
                <div class="item-offer">
                    <p class="item-offer-text">${card.item_offer}</p>
                    <div class="offer-info-div">
                        <img src="/Assets/info.svg" alt="" class="offer-info">
                        <div class="offer-info-pop">Hurry Up Order Now</div>
                    </div>
                </div>
            </div>`;
            item_boxes.appendChild(cardbox);
        });
        itemsdiv.appendChild(h2);
        itemsdiv.appendChild(p);
        itemsdiv.appendChild(item_boxes);
        maindiv.appendChild(itemsdiv);
    });
}

function load_categories(items) {
    const menu = document.querySelector(".left-body");
    items.forEach((item, index) => {
        const category = document.createElement("div");
        category.classList.add("item-categories");
        category.innerHTML = `<div class="category-details">
        <img src="${item.src}" alt="" class="category-image">
        <p class="category-name">${item.name}</p>
        </div>
        <p class="number-of-items">${item.size}</p>`;
        if(index===0){
            selected_catg=category;
            selected_catg.classList.add("selected-category");
        }
        menu.appendChild(category);
        category.addEventListener("click", () => updateSelectedCategory(category,index));
    })
}

function updateSelectedCategory(item,index){
    const newcatg= "id-" + index;
    const selectbyid=document.getElementById(newcatg);
    selected_catg.classList.remove("selected-category");
    item.classList.add("selected-category");
    selected_catg=item;
    const offset = -80;
    const scrollToPosition = selectbyid.offsetTop + offset;
    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}



load_items(item_category);
load_categories(categories_details);


function updateSelectedCategoryByScroll() {
    const categories = document.querySelectorAll('.item-categories');
    
    categories.forEach((category, index) => {
        const element = document.getElementById('id-' + index);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                categories.forEach((cat) => cat.classList.remove('selected-category'));
                category.classList.add('selected-category');
                selected_catg=category;
            }
        }
    });
}


window.addEventListener('scroll', updateSelectedCategoryByScroll);

// function showOptions(value) {
//     const options = ['Pizza', 'Burger', 'Sushi', 'Tacos', 'Pasta'];

//     const searchOptions = document.getElementById('searchOptions');
//     searchOptions.innerHTML = '';
//     if (value.trim() !== '') {
//         options.forEach(option => {
//             if (option.toLowerCase().includes(value.toLowerCase())) {
//                 const optionElement = document.createElement('div');
//                 optionElement.textContent = option;
//                 optionElement.classList.add('search-option');
//                 optionElement.addEventListener('click', () => {
//                     document.querySelector('.search.search-input').value = option;
//                     searchOptions.style.display = 'none';
//                 });
//                 searchOptions.appendChild(optionElement);
//             }
//         });
//         searchOptions.style.display = 'block';
//     } else {
//         searchOptions.style.display = 'none';
//     }
// }

// document.addEventListener('click', function (e) {
//     const searchOptions = document.getElementById('searchOptions');
//     if (!searchOptions.contains(e.target) && !e.target.classList.contains('search-input')) {
//         searchOptions.style.display = 'none';
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const menubtn = document.querySelector(".menu-icon-box");
    function menu_fn(){
        const menu=document.querySelector(".menu-icon-box");
        const menucontent=document.querySelector(".menu-content");
        const menuitems=document.querySelector(".menu-items");
        const l1=document.querySelector(".menu-line1")
        const l2=document.querySelector(".menu-line2")
        const l3=document.querySelector(".menu-line3");
        l1.classList.toggle("menu-close1");
        l2.classList.toggle("menu-close2");
        l3.classList.toggle("menu-close3");
        menu.classList.toggle("active");
        menuitems.classList.toggle("active");
        menucontent.classList.toggle("active");
    }
    menubtn.addEventListener("click", menu_fn);
});

function opensignin(){
    window.location.href = "/LoginSignUp/index.html";
}
function openhome(){
    window.location.href = "/index.html";
}

const signIn=document.querySelector(".sign-in-box");
const signInMobile=document.querySelector(".sign-in-mobile");
const signUpMobile=document.querySelectorAll(".sign-in-mobile")[1];
const homepage=document.querySelector(".icon");
const homemobile=document.querySelector(".home-mobile");
const iconimg=document.querySelector("#icon-img");

signIn.addEventListener("click", opensignin);
signInMobile.addEventListener("click", opensignin);
signUpMobile.addEventListener("click", opensignin);
homepage.addEventListener("click", openhome);
homemobile.addEventListener("click", openhome);
iconimg.addEventListener("click", openhome);