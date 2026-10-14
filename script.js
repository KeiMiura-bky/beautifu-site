/* faqセクション */

const questions =
document.querySelectorAll(".faq-text");

questions.forEach((question) => {
    question.addEventListener("click" , () => {

        const faqCard =
        question.closest(".faq-card");

        faqCard.classList.toggle("active")

    });
});





/* useセクション */

const storyPanels =
document.querySelectorAll(".story-panel");

const storyTabs =
document.querySelectorAll(".story-tab");

storyTabs.forEach((tab, index) => {
    tab.addEventListener("click" , () => {

        storyTabs.forEach((item) => {
            item.classList.remove("active");
        });
        
        storyPanels.forEach((panel) => {
           panel.classList.remove("active");
        });
       
        tab.classList.add("active");

        storyPanels[index].classList.add("active");

    });
});





/* レスポンシブ footerセクション faq */

const footerQuestions =
document.querySelectorAll(".footer-head");

footerQuestions.forEach((footerQuestion) => {
    footerQuestion.addEventListener("click" , () => {

        const footerFaqcard =
        footerQuestion.closest(".footer-two");

        footerFaqcard.classList.toggle("active");

    });
});





/* ingredientsセクション　*/

const ingredientsSlider =
document.querySelector(".ingredients-slider");

const ingredientsCard =
document.querySelectorAll(".ingredients-card");

const ingredientsPrev =
document.querySelector(".ingredients-prev");

const ingredientsNext =
document.querySelector(".ingredients-next");

const firstClone =
ingredientsCard[0].cloneNode(true);

const lastClone =
ingredientsCard[ingredientsCard.length - 1].cloneNode(true);

const ingredientsList =
document.querySelector(".ingredients-list");

ingredientsList.append(firstClone);
ingredientsList.prepend(lastClone);

const AllCards =
document.querySelectorAll(".ingredients-card");




let ingredientsCurrentIndex = 1;

let ingredientsCurrentIndex = 1;


/* ingredientsを現在のindexまで移動 */
function moveIngredients(behavior = "smooth") {

    ingredientsSlider.scrollTo({
        left: ingredientsSlider.clientWidth * ingredientsCurrentIndex,
        behavior: behavior
    });

}


/* 右ボタン */
ingredientsNext.addEventListener("click", () => {

    ingredientsCurrentIndex++;

    updateIngredientsDots();

    moveIngredients();

});


/* 左ボタン */
ingredientsPrev.addEventListener("click", () => {

    ingredientsCurrentIndex--;

    updateIngredientsDots();

    moveIngredients();

});


/* 最初に本物のカード1まで移動 */
moveIngredients("auto");


/* コピー1 → 本物のカード1 */
ingredientsSlider.addEventListener("scrollend", () => {

    if (ingredientsCurrentIndex === AllCards.length - 1) {

        ingredientsCurrentIndex = 1;

        moveIngredients("auto");

    }

});


/* コピー4 → 本物のカード4 */
ingredientsSlider.addEventListener("scrollend", () => {

    if (ingredientsCurrentIndex === 0) {

        ingredientsCurrentIndex = ingredientsCard.length;

        moveIngredients("auto");

    }

});


/* 画面幅が変わった時も現在のカード位置に合わせる */
window.addEventListener("resize", () => {

    moveIngredients("auto");

});


/* ドットと連携 */
const ingredientsDots =
document.querySelectorAll(".ingredients-dot");

function updateIngredientsDots () {
    
    ingredientsDots.forEach((dot) => {
       dot.classList.remove("active");
    });

    if(ingredientsCurrentIndex === 0) {
       ingredientsDots[ingredientsDots.length - 1].classList.add("active");

    } else if(ingredientsCurrentIndex === AllCards.length - 1) {
       ingredientsDots[0].classList.add("active");

    } else {
       ingredientsDots[ingredientsCurrentIndex - 1].classList.add("active");
    }

}




/* productsセクション */

const productsSlider =
document.querySelector(".products-slider");

const productsCard =
document.querySelectorAll(".products-card");

const productsPrev =
document.querySelector(".products-prev");

const productsNext =
document.querySelector(".products-next");

const productsList =
document.querySelector(".products-list");

/* クローン生成 */
const productsClone5 =
productsCard[4].cloneNode(true);

const productsClone6 =
productsCard[5].cloneNode(true);

const productsClone7 =
productsCard[6].cloneNode(true);

const productsClone8 =
productsCard[7].cloneNode(true);


const productsClone1 =
productsCard[0].cloneNode(true);

const productsClone2 =
productsCard[1].cloneNode(true);

const productsClone3 =
productsCard[2].cloneNode(true);

const productsClone4 =
productsCard[3].cloneNode(true);

/* クローンをlistに追加 */
productsList.prepend(productsClone8);
productsList.prepend(productsClone7);
productsList.prepend(productsClone6);
productsList.prepend(productsClone5);

productsList.append(productsClone1);
productsList.append(productsClone2);
productsList.append(productsClone3);
productsList.append(productsClone4);

const productsAllCards =
document.querySelectorAll(".products-card");

let productsCurrentIndex = 4;


/* 右ボタン */
productsNext.addEventListener("click" , () => {
    productsCurrentIndex++;

    updateProductsDots();

    productsSlider.scrollTo({
        left:productsAllCards[productsCurrentIndex].offsetLeft - productsAllCards[0].offsetLeft,
        behavior:"smooth"
    });
});


/* 左ボタン */
productsPrev.addEventListener("click" , () => {
    productsCurrentIndex--;

    updateProductsDots();

    productsSlider.scrollTo({
        left:productsAllCards[productsCurrentIndex].offsetLeft - productsAllCards[0].offsetLeft,
        behavior:"smooth"
    });
});


/* index4(本物カード１)まで瞬間移動 */
productsSlider.scrollTo({
    left:productsAllCards[productsCurrentIndex].offsetLeft - productsAllCards[0].offsetLeft,
    behavior:"auto"
});


/* 右ボタンのコピー１から本物１への瞬間移動 */
productsSlider.addEventListener("scrollend" , () => {
    if(productsCurrentIndex === 12) {
        productsCurrentIndex = 4;

        productsSlider.scrollTo({
           left:productsAllCards[productsCurrentIndex].offsetLeft - productsAllCards[0].offsetLeft,
           behavior:"auto"
        });
    }   
});


/* 左ボタンのコピー８から本物8への瞬間移動 */
productsSlider.addEventListener("scrollend" , () => {
    if(productsCurrentIndex === 3) {
        productsCurrentIndex = 11;

        productsSlider.scrollTo({
           left:productsAllCards[productsCurrentIndex].offsetLeft - productsAllCards[0].offsetLeft,
           behavior:"auto"
        });
    }
});

/* ドットとの連携 */

const productsDots =
document.querySelectorAll(".products-dot");


function updateProductsDots () {

    productsDots.forEach((dot) => {
       dot.classList.remove("active");
    });

    if(productsCurrentIndex === 3) {
       productsDots[7].classList.add("active");

    } else if (productsCurrentIndex === 12) {
        productsDots[0].classList.add("active");

    } else {
        productsDots[productsCurrentIndex - 4].classList.add("active");
    }

}




/* hamburger */

const Hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

Hamburger.addEventListener("click" , () => {
    Hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});