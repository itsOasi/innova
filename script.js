class Product{
	constructor(title, img, link, details){
		this.title = title;
		this.img = img;
		this.link = link;
		this.details = details;
	}
}

function get_product_list(){
	// fetch("./product_list.json")
}

let products = []

function add_products(title, img, link, details){
	let p = new Product(title, img, link, details)
	products.push(p)
}

function create_catalog_item(title, img, link, details){
	let item = document.createElement("a")
	item.classList.add("action")
	item.href = link

	let title_el = document.createElement("h1")
	item.classList.add("item-title")
	title_el.innerText = title

	let img_el = document.createElement("img")
	item.classList.add("item-img")
	img_el.src = img

	let desc_el = document.createElement("p")
	item.classList.add("item-desc")
	desc_el.innerText = details

	return item
}