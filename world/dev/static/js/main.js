;
// Начинать писать отсюда!!!!

function leftTab(evt, tabLeftName) {
	var i, tabLeftContent, tabLeftLinks;

	tabLeftContent = document.getElementsByClassName("tab-left__content");
	for (i = 0; i < tabLeftContent.length; i++) {
		tabLeftContent[i].style.display = "none";
	}

	tabLeftLinks = document.getElementsByClassName("tab-left__links");
	for (i = 0; i < tabLeftLinks.length; i++) {
		tabLeftLinks[i].className = tabLeftLinks[i].className.replace(" active", "");
	}

	document.getElementById(tabLeftName).style.display = "block";
	evt.currentTarget.className += " active";
};


function openTab(evt, tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tab__content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tab__links");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
};

function validate() {
	var formDate = document.getElementById('formDate');
	var form__date = document.getElementById("form__date");
	var formTour = document.getElementById("formTour");
	var form__tour = document.getElementById("form__tour");
	var formTickets = document.getElementById("formTickets");
	var form__tickets = document.getElementById("form__tickets");

	if(!formDate.value) {
		formDate.style.background="#FFEFEE";
		formDate.style.color="#C2C2C2";
		form__date.style.background="#FFEFEE";
		form__date.style.border="1px solid #E0B4B4";
		return false;
	}
	if(!formTour.value) {
		formTour.style.background="#FFEFEE";
		formTour.style.color="#C2C2C2";
		form__tour.style.background="#FFEFEE";
		form__tour.style.border="1px solid #E0B4B4";
		return false;
	}
	if(!formTickets.value) {
		formTickets.style.background="#FFEFEE";
		formTickets.style.color="#C2C2C2";
		form__tickets.style.background="#FFEFEE";
		form__tickets.style.border="1px solid #E0B4B4";
		return false;
	}
	return true;
}
