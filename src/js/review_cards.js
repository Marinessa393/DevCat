(() => {		    
let btnMobile = [...document.querySelectorAll(".hidden-button")];

const moreInfo = (e) => {
		let target = e.target;
		let moreText = target.previousElementSibling;

		if (moreText.classList.contains("active")) {
				target.innerHTML = "Читати далі";
		} else {
				target.innerHTML = "Згорнути";
		}

		moreText.classList.toggle("active");
};

const closeMoreInfo = () => {
		let allText = document.querySelectorAll(".client_feedback active");

		btnMobile.forEach((e) => {
				e.innerHTML = "Читати далі";
		});

		allText.forEach((e) => {
				e.classList.remove("active");
		});
};

btnMobile.forEach((e) => {
		e.addEventListener("click", moreInfo);
});

})();