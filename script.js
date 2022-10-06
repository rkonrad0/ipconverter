function calculate() { 
	let wrongnumber = false;
	let wrognumberdiv = document.getElementById("wrongnumber");
	let networkadressdiv = document.getElementById("networkadress");
	let broadcastdiv = document.getElementById("broadcast");

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

	//SUBNET MASK CONVERTION TO BINARY 
	const submask_binary_1 = [];
	const submask_binary_2 = [];
	const submask_binary_3 = [];
	const submask_binary_4 = [];
	
	//firstnum
	let toSub = 0;

	if(subnetmask[0] >= 128){
		submask_binary_1.push(1);
		toSub += 128;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 64){
		submask_binary_1.push(1);
		toSub += 64;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 32){
		submask_binary_1.push(1);
		toSub += 32;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 16){
		submask_binary_1.push(1);
		toSub += 16;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 8){
		submask_binary_1.push(1);
		toSub += 8;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 4){
		submask_binary_1.push(1);
		toSub += 4;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 2){
		submask_binary_1.push(1);
		toSub += 2;
	} else {
		submask_binary_1.push(0);
	}

	if(subnetmask[0] - toSub >= 1){
		submask_binary_1.push(1);
		toSub += 1;
	} else {
		submask_binary_1.push(0);
	}

	//secondnum
	toSub = 0;

	if(subnetmask[1] >= 128){
		submask_binary_2.push(1);
		toSub += 128;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 64){
		submask_binary_2.push(1);
		toSub += 64;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 32){
		submask_binary_2.push(1);
		toSub += 32;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 16){
		submask_binary_2.push(1);
		toSub += 16;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 8){
		submask_binary_2.push(1);
		toSub += 8;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 4){
		submask_binary_2.push(1);
		toSub += 4;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 2){
		submask_binary_2.push(1);
		toSub += 2;
	} else {
		submask_binary_2.push(0);
	}

	if(subnetmask[1] - toSub >= 1){
		submask_binary_2.push(1);
		toSub += 1;
	} else {
		submask_binary_2.push(0);
	}

	//thirdnum
	toSub = 0;

	if(subnetmask[2] >= 128){
		submask_binary_3.push(1);
		toSub += 128;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 64){
		submask_binary_3.push(1);
		toSub += 64;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 32){
		submask_binary_3.push(1);
		toSub += 32;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 16){
		submask_binary_3.push(1);
		toSub += 16;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 8){
		submask_binary_3.push(1);
		toSub += 8;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 4){
		submask_binary_3.push(1);
		toSub += 4;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 2){
		submask_binary_3.push(1);
		toSub += 2;
	} else {
		submask_binary_3.push(0);
	}

	if(subnetmask[2] - toSub >= 1){
		submask_binary_3.push(1);
		toSub += 1;
	} else {
		submask_binary_3.push(0);
	}

	//fourthnum
	toSub = 0;

	if(subnetmask[3] >= 128){
		submask_binary_4.push(1);
		toSub += 128;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 64){
		submask_binary_4.push(1);
		toSub += 64;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 32){
		submask_binary_4.push(1);
		toSub += 32;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 16){
		submask_binary_4.push(1);
		toSub += 16;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 8){
		submask_binary_4.push(1);
		toSub += 8;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 4){
		submask_binary_4.push(1);
		toSub += 4;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 2){
		submask_binary_4.push(1);
		toSub += 2;
	} else {
		submask_binary_4.push(0);
	}

	if(subnetmask[3] - toSub >= 1){
		submask_binary_4.push(1);
		toSub += 1;
	} else {
		submask_binary_4.push(0);
	}

	/* we have:
	ipadress_binary_(1-4 oktets) - ipadress arrays [0-7]
	subadress_binary(1-4 oktets) - submask arrays [0-7]
	
	and we must * ipadress(0) to subnetmask(0) and convert that score to decymaly
	*/

	let netadress_bin_1 = [];
	let netadress_bin_2 = [];
	let netadress_bin_3 = [];
	let netadress_bin_4 = [];

	for(let i = 0; i <= 7; i++) {
		netadress_bin_1[i] = submask_binary_1[i] * ipadress_binary_1[i];
		netadress_bin_2[i] = submask_binary_2[i] * ipadress_binary_2[i];
		netadress_bin_3[i] = submask_binary_3[i] * ipadress_binary_3[i];
		netadress_bin_4[i] = submask_binary_4[i] * ipadress_binary_4[i];
	}

	let netadr_dec = [0, 0, 0, 0];

	if(netadress_bin_1[0] == 1){
		netadr_dec[0] += 128;
	}

	if(netadress_bin_1[1] == 1){
		netadr_dec[0] += 64;
	}
	
	if(netadress_bin_1[2] == 1){
		netadr_dec[0] += 32;
	}

	if(netadress_bin_1[3] == 1){
		netadr_dec[0] += 16;
	}

	if(netadress_bin_1[4] == 1){
		netadr_dec[0] += 8;
	}

	if(netadress_bin_1[5] == 1){
		netadr_dec[0] += 4;
	}

	if(netadress_bin_1[6] == 1){
		netadr_dec[0] += 2;
	}

	if(netadress_bin_1[7] == 1){
		netadr_dec[0] += 1;
	}



	if(netadress_bin_2[0] == 1){
		netadr_dec[1] += 128;
	}

	if(netadress_bin_2[1] == 1){
		netadr_dec[1] += 64;
	}
	
	if(netadress_bin_2[2] == 1){
		netadr_dec[1] += 32;
	}

	if(netadress_bin_2[3] == 1){
		netadr_dec[1] += 16;
	}

	if(netadress_bin_2[4] == 1){
		netadr_dec[1] += 8;
	}

	if(netadress_bin_2[5] == 1){
		netadr_dec[1] += 4;
	}

	if(netadress_bin_2[6] == 1){
		netadr_dec[1] += 2;
	}

	if(netadress_bin_2[7] == 1){
		netadr_dec[1] += 1;
	}



	if(netadress_bin_3[0] == 1){
		netadr_dec[2] += 128;
	}

	if(netadress_bin_3[1] == 1){
		netadr_dec[2] += 64;
	}
	
	if(netadress_bin_3[2] == 1){
		netadr_dec[2] += 32;
	}

	if(netadress_bin_3[3] == 1){
		netadr_dec[2] += 16;
	}

	if(netadress_bin_3[4] == 1){
		netadr_dec[2] += 8;
	}

	if(netadress_bin_3[5] == 1){
		netadr_dec[2] += 4;
	}

	if(netadress_bin_3[6] == 1){
		netadr_dec[2] += 2;
	}

	if(netadress_bin_3[7] == 1){
		netadr_dec[2] += 1;
	}



	if(netadress_bin_4[0] == 1){
		netadr_dec[3] += 128;
	}

	if(netadress_bin_4[1] == 1){
		netadr_dec[3] += 64;
	}
	
	if(netadress_bin_4[2] == 1){
		netadr_dec[3] += 32;
	}

	if(netadress_bin_4[3] == 1){
		netadr_dec[3] += 16;
	}

	if(netadress_bin_4[4] == 1){
		netadr_dec[3] += 8;
	}

	if(netadress_bin_4[5] == 1){
		netadr_dec[3] += 4;
	}

	if(netadress_bin_4[6] == 1){
		netadr_dec[3] += 2;
	}

	if(netadress_bin_4[7] == 1){
		netadr_dec[3] += 1;
	}

	networkadressdiv.innerHTML = netadr_dec[0] + "." + netadr_dec[1] + "." + netadr_dec[2] + "." + netadr_dec[3];



	// BROADCAST

	let broadcast_bin_1 = [];
	let broadcast_bin_2 = [];
	let broadcast_bin_3 = [];
	let broadcast_bin_4 = [];

	for(let i = 0; i <= 7; i++) {
		if(submask_binary_1[i] == 1){
			broadcast_bin_1.push(ipadress_binary_1[i]);
		} else {
			broadcast_bin_1.push(1);
		}

		if(submask_binary_2[i] == 1){
			broadcast_bin_2.push(ipadress_binary_2[i]);
		} else {
			broadcast_bin_2.push(1);
		}

		if(submask_binary_3[i] == 1){
			broadcast_bin_3.push(ipadress_binary_3[i]);
		} else {
			broadcast_bin_3.push(1);
		}

		if(submask_binary_4[i] == 1){
			broadcast_bin_4.push(ipadress_binary_4[i]);
		} else {
			broadcast_bin_4.push(1);
		}
	}

	let broadcast_dec = [0, 0, 0, 0];

	if(broadcast_bin_1[0] == 1){
		broadcast_dec[0] += 128;
	}

	if(broadcast_bin_1[1] == 1){
		broadcast_dec[0] += 64;
	}
	
	if(broadcast_bin_1[2] == 1){
		broadcast_dec[0] += 32;
	}

	if(broadcast_bin_1[3] == 1){
		broadcast_dec[0] += 16;
	}

	if(broadcast_bin_1[4] == 1){
		broadcast_dec[0] += 8;
	}

	if(broadcast_bin_1[5] == 1){
		broadcast_dec[0] += 4;
	}

	if(broadcast_bin_1[6] == 1){
		broadcast_dec[0] += 2;
	}

	if(broadcast_bin_1[7] == 1){
		broadcast_dec[0] += 1;
	}



	if(broadcast_bin_2[0] == 1){
		broadcast_dec[1] += 128;
	}

	if(broadcast_bin_2[1] == 1){
		broadcast_dec[1] += 64;
	}
	
	if(broadcast_bin_2[2] == 1){
		broadcast_dec[1] += 32;
	}

	if(broadcast_bin_2[3] == 1){
		broadcast_dec[1] += 16;
	}

	if(broadcast_bin_2[4] == 1){
		broadcast_dec[1] += 8;
	}

	if(broadcast_bin_2[5] == 1){
		broadcast_dec[1] += 4;
	}

	if(broadcast_bin_2[6] == 1){
		broadcast_dec[1] += 2;
	}

	if(broadcast_bin_2[7] == 1){
		broadcast_dec[1] += 1;
	}



	if(broadcast_bin_3[0] == 1){
		broadcast_dec[2] += 128;
	}

	if(broadcast_bin_3[1] == 1){
		broadcast_dec[2] += 64;
	}
	
	if(broadcast_bin_3[2] == 1){
		broadcast_dec[2] += 32;
	}

	if(broadcast_bin_3[3] == 1){
		broadcast_dec[2] += 16;
	}

	if(broadcast_bin_3[4] == 1){
		broadcast_dec[2] += 8;
	}

	if(broadcast_bin_3[5] == 1){
		broadcast_dec[2] += 4;
	}

	if(broadcast_bin_3[6] == 1){
		broadcast_dec[2] += 2;
	}

	if(broadcast_bin_3[7] == 1){
		broadcast_dec[2] += 1;
	}



	if(broadcast_bin_4[0] == 1){
		broadcast_dec[3] += 128;
	}

	if(broadcast_bin_4[1] == 1){
		broadcast_dec[3] += 64;
	}
	
	if(broadcast_bin_4[2] == 1){
		broadcast_dec[3] += 32;
	}

	if(broadcast_bin_4[3] == 1){
		broadcast_dec[3] += 16;
	}

	if(broadcast_bin_4[4] == 1){
		broadcast_dec[3] += 8;
	}

	if(broadcast_bin_4[5] == 1){
		broadcast_dec[3] += 4;
	}

	if(broadcast_bin_4[6] == 1){
		broadcast_dec[3] += 2;
	}

	if(broadcast_bin_4[7] == 1){
		broadcast_dec[3] += 1;
	}

	broadcastdiv.innerHTML = broadcast_dec[0] + "." + broadcast_dec[1] + "." + broadcast_dec[2] + "." + broadcast_dec[3];


}

