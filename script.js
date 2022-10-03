let ipadress1, ipadress2, ipadress3, ipadress4, subnetmask1, subnetmask2, subnetmask3, subnetmask4;

function send() {	
	ipadress1 = document.getElementById("ipadress1").value;
	ipadress2 = document.getElementById("ipadress2").value;
	ipadress3 = document.getElementById("ipadress3").value;
	ipadress4 = document.getElementById("ipadress4").value;

	subnetmask1 = document.getElementById("subnetmask1").value;
	subnetmask2 = document.getElementById("subnetmask2").value;
	subnetmask3 = document.getElementById("subnetmask3").value;
	subnetmask4 = document.getElementById("subnetmask4").value;

	document.getElementById("networkadress").innerHTML = ipadress1;
}