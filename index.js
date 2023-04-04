const productList = [...document.getElementsByClassName('product-card')];
const [card1, card2, ...other] = productList;
const promoMessage = "Promo text offer";

//helper functions

const insertDiv = (element, className = "") => {
	const promoDiv = element.parentNode.insertBefore(document.createElement('div'), element.nextSibling);
	promoDiv.classList.add(`${className}`);
	promoDiv.innerHTML = `<p> ${promoMessage} </p>`;
	return promoDiv;
}

window.addEventListener("DOMContentLoaded", (event) => { 
	if ( productList.length > 1 )
	insertDiv(card2, "promo")
	// const promoDiv = card2.parentNode.insertBefore(document.createElement('div'), card2.nextSibling);
	// promoDiv.innerHTML = '<p>Promo Message</p>';
	// promoDiv.style.backgroundColor = "red";
	else if (productList.length != 0) //could not check truthiness for the love of me 
	insertDiv(card1, "promo");
	// const promoDiv = card1.parentNode.insertBefore(document.createElement('div'), card1.nextSibling);
	// promoDiv.innerHTML = '<p>Promo Message</p>';
	// promoDiv.style.backgroundColor = "red";
	else 
	console.error('promo message not displayed since there are no products available');
	
});
