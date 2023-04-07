//the elegant/clever solution:
const PRODUCTS_LIST = "products-list";
const PRODUCT_CARD = "product-card";
const PROMO_MSG = "this is a promo message";
const PROMO_CODE = "welcome10";
const PROMO_CLASS = "promo";

//helper function 
const addDiv = (
  divName, 
  className,
  promoMsg,
  promoCode,
  parent
  ) => {
    divName.className = PROMO_CLASS;
    divName.innerHTML = `<p>${promoMsg}: ${promoCode}</p>`;
    divName.style.order = 2;
    return parent.append(divName);  
  };

document.addEventListener(
  "DOMContentLoaded",
  () => {
  const list = document.querySelector(`.${ PRODUCTS_LIST }`);
  const promoDiv = document.createElement('div');
  addDiv(promoDiv, PROMO_CLASS, PROMO_MSG, PROMO_CODE, list);
  setInterval(
    () => {
      [...list.getElementsByClassName(PRODUCT_CARD)].forEach(
        (elem, i) => elem.style.order = i < 2 ? i : i + 1
      );
    }
  )
})

// window.addEventListener("DOMContentLoaded", (event) => { 
	
// const productList = [...document.getElementsByClassName('product-card')];
// const [card1, card2, ...other] = productList;
// const promoMessage = "Promo text offer";
// const btns = [...document.getElementById('ecommerce-shop-page').getElementsByTagName("button")].slice(0,3);


// //helper functions

// const insertDiv = (element, className = "") => {
// 	const promoDiv = element.parentNode.insertBefore(document.createElement('div'), element.nextSibling);
// 	promoDiv.classList.add(`${className}`);
// 	promoDiv.innerHTML = `<p> ${promoMessage} </p>`;
// 	return promoDiv;
// }


// if ( productList.length > 1 )
// 	insertDiv(card2, "promo")
// else if (productList.length != 0) //could not check truthiness for the love of me 
// 	insertDiv(card1, "promo");
// else 
// 	console.error('promo message not displayed since there are no products available');
// });


// other option

//insert promo div
// const PRODUCT_CARD = "product-card";
// const AFTEREND = "afterend";
// const loaded = "DOMContentLoaded";

// //helper functions
// const insertPromo = (target, promoMessage, promoCode) => {
//   const promoDiv = document.createElement('div');
//   promoDiv.classList.add("promo");
//   promoDiv.innerHTML = `<p>${promoMessage}: ${promoCode}</p>`;

//   target.insertAdjacentElement(AFTEREND, promoDiv);
//   return promoDiv;
// };

// const createPromo = () => {
//   const card = [...document.getElementsByClassName(PRODUCT_CARD)]
//     .slice(0, 2)
//     .at(-1);
//   return insertPromo(card, "the test promo message", "aedfkayesg");
// }

// const deletePromo = (promoDiv) => {
//   promoDiv.remove();
// }

//when the dom is loaded call the insertPromo function
document.addEventListener(loaded, () => {
  let promo = createPromo();
  
  const btns = document.getElementsByClassName("category");
  for (const btn of btns) {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        deletePromo(promo);
        promo = createPromo();
      }, 10);
    })
  }
})
