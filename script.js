function calculate() { 
	let wrongnumber = false;
	let wrognumberdiv = document.getElementById("wrongnumber");
	let networkadressdiv = document.getElementById("networkadress");

	ipadress1 = document.getElementById("ipadress1").value;
	ipadress2 = document.getElementById("ipadress2").value;
	ipadress3 = document.getElementById("ipadress3").value;
	ipadress4 = document.getElementById("ipadress4").value;

	subnetmask1 = document.getElementById("subnetmask1").value;
	subnetmask2 = document.getElementById("subnetmask2").value;
	subnetmask3 = document.getElementById("subnetmask3").value;
	subnetmask4 = document.getElementById("subnetmask4").value;

	const ipadress = [ipadress1,ipadress2,ipadress3,ipadress4];
	const subnetmask = [subnetmask1,subnetmask2,subnetmask3,subnetmask4];

	for(let i = 0; i <= 3; i++){
		if((ipadress[i] > 255 || ipadress[i] < 0) || (subnetmask[i] > 255 || subnetmask[i] < 0)){
			wrongnumber = true;
			wrognumberdiv.innerHTML = "Liczby w adresie muszą mieścić się w zakresie 0 - 255"
		}
	}

	if(!wrongnumber) {
		wrognumberdiv.innerHTML = "";
	} else {
		return;
	}

	const ipadress_binary_1 = [];
	const ipadress_binary_2 = [];
	const ipadress_binary_3 = [];
	const ipadress_binary_4 = [];

	//first num
	let toSubstract = 0;

	if(ipadress[0] >= 128){
		ipadress_binary_1.push(1);
		toSubstract += 128;
	} else {
			ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 64){
		ipadress_binary_1.push(1);
		toSubstract += 64;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 32){
		ipadress_binary_1.push(1);
		toSubstract += 32;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 16){
		ipadress_binary_1.push(1);
		toSubstract += 16;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 8){
		ipadress_binary_1.push(1);
		toSubstract += 8;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 4){
		ipadress_binary_1.push(1);
		toSubstract += 4;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 2){
		ipadress_binary_1.push(1);
		toSubstract += 2;
	} else {
		ipadress_binary_1.push(0);
	}

	if((ipadress[0] - toSubstract) >= 1){
		ipadress_binary_1.push(1);
		toSubstract += 1;
	} else {
		ipadress_binary_1.push(0);
	}

	//second num 
	let toSubstract2 = 0;

	if(ipadress[1] >= 128){
		ipadress_binary_2.push(1);
		toSubstract2 += 128;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 64){
		ipadress_binary_2.push(1);
		toSubstract2 += 64;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 32){
		ipadress_binary_2.push(1);
		toSubstract2 += 32;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 16){
		ipadress_binary_2.push(1);
		toSubstract2 += 16;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 8){
		ipadress_binary_2.push(1);
		toSubstract2 += 8;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 4){
		ipadress_binary_2.push(1);
		toSubstract2 += 4;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 2){
		ipadress_binary_2.push(1);
		toSubstract2 += 2;
	} else {
		ipadress_binary_2.push(0);
	}

	if((ipadress[1] - toSubstract2) >= 1){
		ipadress_binary_2.push(1);
		toSubstract2 += 1;
	} else {
		ipadress_binary_2.push(0);
	}

	//third number 
	let toSubstract3 = 0;

	if(ipadress[2] >= 128){
		ipadress_binary_3.push(1);
		toSubstract3 += 128;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 64){
		ipadress_binary_3.push(1);
		toSubstract3 += 64;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 32){
		ipadress_binary_3.push(1);
		toSubstract3 += 32;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 16){
		ipadress_binary_3.push(1);
		toSubstract3 += 16;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 8){
		ipadress_binary_3.push(1);
		toSubstract3 += 8;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 4){
		ipadress_binary_3.push(1);
		toSubstract3 += 4;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 2){
		ipadress_binary_3.push(1);
		toSubstract3 += 2;
	} else {
		ipadress_binary_3.push(0);
	}

	if((ipadress[2] - toSubstract3) >= 1){
		ipadress_binary_3.push(1);
		toSubstract3 += 1;
	} else {
		ipadress_binary_3.push(0);
	}

	//fourth number 
	let toSubstract4 = 0;

	if(ipadress[3] >= 128){
		ipadress_binary_4.push(1);
		toSubstract4 += 128;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 64){
		ipadress_binary_4.push(1);
		toSubstract4 += 64;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 32){
		ipadress_binary_4.push(1);
		toSubstract4 += 32;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 16){
		ipadress_binary_4.push(1);
		toSubstract4 += 16;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 8){
		ipadress_binary_4.push(1);
		toSubstract4 += 8;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 4){
		ipadress_binary_4.push(1);
		toSubstract4 += 4;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 2){
		ipadress_binary_4.push(1);
		toSubstract4 += 2;
	} else {
		ipadress_binary_4.push(0);
	}

	if((ipadress[3] - toSubstract4) >= 1){
		ipadress_binary_4.push(1);
		toSubstract4 += 1;
	} else {
		ipadress_binary_4.push(0);
	}
	networkadressdiv.innerHTML = ipadress_binary_1 + "<br>" + ipadress_binary_2 + "<br>" + ipadress_binary_3 + "<br>" + ipadress_binary_4;

}

