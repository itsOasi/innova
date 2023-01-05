// Get the data from the sheet
let prev_width = window.innerWidth;
let response_threshold = 600;
window.onload = _ => {
	 // get the url
	let url = document.location.pathname.slice(1);
	if (window.innerWidth <= response_threshold && !url == "mob.html"){
		window.location.href = "mob.html";
	}
	if (window.innerWidth >= response_threshold && url == "mob.html"){
		window.location.href = "index.html";
	}
} 



window.onresize = _ => {
	if (prev_width >= response_threshold && window.innerWidth <= response_threshold){
		window.location.href = "mob.html";
	} 
	if (prev_width <= response_threshold && window.innerWidth >= response_threshold) {
		window.location.href = "index.html";
	}
	
}