const HOST = "http://localhost:8000"

let http = {
	get: async(url) =>
	{
		let res = await fetch(url)
		return await res
	},
	post: async(url, data) => {
		let res = await fetch(url, {
			method: "post",
			body: data
		})
		return await res
	}

}

class Product{
	constructor(title, img, link, details){
		this.title = title;
		this.img = img;
		this.link = link;
		this.details = details;
	}
}

let products = []

function add_product(prod_data){
	let p = new Product(prod_data["title"], prod_data["image"], prod_data["link"], prod_data["desc"])
	products.push(p)
}

function create_catalog_item(product_obj){
	let item = document.createElement("a")
	item.classList.add("action")
	item.href = product_obj.link
	
	let img_el = document.createElement("img")
	img_el.classList.add("item-img")
	img_el.src = product_obj.img
	item.append(img_el)
	
	let details = document.createElement("div")
	details.classList.add("details")

	let title_el = document.createElement("p")
	title_el.classList.add("item-title")
	title_el.innerText = product_obj.title
	details.append(title_el)

	let desc_el = document.createElement("p")
	desc_el.classList.add("item-desc")
	desc_el.innerText = product_obj.details
	details.append(desc_el)

	item.append(details)
	
	return item
}

document.body.onload = async function(){
	let res = await http.get(`${HOST}/get_catalog`)
	let catalog = await res.json()
	console.log(catalog)
	let catalog_list = document.querySelector("#products")
	for (_prod in catalog){
		add_product(catalog[_prod])
	}
	for (prod in products){
		catalog_list.append(create_catalog_item(products[prod]))
	}
}

var action1 = document.getElementById("action2");
	  if (action1) {
	    action1.addEventListener("click", function () {
			var popup = document.getElementById("contactContainer");
			if (!popup) return;
			popup.classList.add("closeable");
			var onClick =
			popup.onClick ||
			function (e) {
				if (e.target === popup && popup.classList.contains("closeable")) {
					popup.classList.remove("closeable");
				}
			};
			popup.addEventListener("click", onClick);
	    });
	  }
