const sliderdetails = [
    { src: "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=826&t=st=1710759959~exp=1710760559~hmac=3cf2b1e391921dedabeeb8c437e368fd317d16fdce78c9b92324da3e87b215f6", title: "-", description: "Fruit Custard" },
    { src: "https://img.freepik.com/free-photo/high-angle-indian-food-assortment_23-2148747704.jpg?w=740&t=st=1710760066~exp=1710760666~hmac=46611dff787a9ea8dffdcb94a2f17b2b6c43b270c9bedfb5d49b501b47bfb8dd", title: "-", description: "Thali" },
    { src: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76797.jpg?w=740", title: "-", description: "Paneer-Tikka" },
    { src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D", title: "-", description: "Sandwich" },
    { src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D", title: "-", description: "IceCream" },
    { src: "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?t=st=1710760457~exp=1710764057~hmac=cb9b8f8d39cef9dcd97a0f63a6eeac1f295065f8ab5a4a650ae2a8d52b03c56e&w=740", title: "-", description: "Special Burger" },
    { src: "https://img.freepik.com/free-photo/delicious-asian-noodles-concept_23-2148773773.jpg?w=740&t=st=1710760367~exp=1710760967~hmac=ed64ab6c74dbbbda3b681a0beb79fa4a2efb6e02c287795e42c6a2c6af408648", title: "-", description: "Noodles" },
    { src: "https://img.freepik.com/free-photo/macaroni-sauteed-with-tomatoes-basil-pan_1150-25452.jpg?w=740&t=st=1710760510~exp=1710761110~hmac=31a4fb568ae4663e67f832ab92964b5262acd1370d32f707a2874608f32517b2", title: "-", description: "Pasta" },
    { src: "https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535886.jpg?t=st=1710760814~exp=1710764414~hmac=a8816c923e27cd996c085858f6e344bd80b0b48eefc022023caa527dbb13e5ab&w=740", title: "-", description: "Spring Rolls" },
    { src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDF8fHxlbnwwfHx8fHw%3D", title: "-", description: "Modern Cuisine" }
];

function slider_data_load(slider) {
    const imagelist = document.querySelector(".image-list");

    slider.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("image-item");
        li.innerHTML = `
            <img class="slider-image" src="${item.src}" />
            <div class="item-text">
                <h4 class="item-h4">${item.title}</h4>
                <p>${item.description}</p>
            </div>
        `;
        imagelist.appendChild(li);
    });
}

const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });

    handleSlideButtons();
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
slider_data_load(sliderdetails);
