//**************|  Global vars to be used by the update functions   |***************************
var carr = 0;
var supp = 0;
var surv = 0;
var team = 0;
var disa = 0;
var push = 0;
var ecarr = 0;
var esupp = 0;
var esurv = 0;
var eteam = 0;
var edisa = 0;
var epush = 0;
//********************|   Hero Objects    |************************************************
var antimage = 			{Lname : "Antimage", Lcarr : 4, Lsupp : 0, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 4, Lava : "images/antimage.png"}; 
var morphling = 		{Lname : "Morphling", Lcarr :  3, Lsupp : 1, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/morphling.png"}; 
var queenofpain = 		{Lname : "Queen of Pain", Lcarr :  3, Lsupp : 1, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/queenofpain.png"}; 
var pudge = 			{Lname : "Pudge", Lcarr :  2, Lsupp : 2, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/pudge.png"}; 
var dark_seer = 		{Lname : "Dark Seer", Lcarr :  2, Lsupp : 2, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/dark_seer.png"}; 
var rattletrap = 		{Lname : "Clockwerk", Lcarr :  1, Lsupp : 3, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/rattletrap.png"}; 
var enigma = 			{Lname : "Enigma", Lcarr :  1, Lsupp : 3, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/enigma.png"}; 
var chen = 				{Lname : "Chen", Lcarr :  0, Lsupp : 4, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/chen.png"}; 
var venomancer = 		{Lname : "Venomancer", Lcarr :  0, Lsupp : 4, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/venomancer.png"}; 
var crystal_maiden = 	{Lname : "Crystal Maiden", Lcarr :  0, Lsupp : 5, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 1, Lava : "images/crystal_maiden.png"};
//******************|   Item Placeholders    |*******************************************
var hand_of_midas = 	{Lname : "hand_of_midas", Lcarr :  0, Lsupp : 0, Lava : "images/hand_of_midas.png"}; 
var bottle 	= 			{Lname : "bottle", Lcarr :  0, Lsupp : 0, Lava : "images/bottle.png"}; 
var blink = 			{Lname : "blink", Lcarr :  0, Lsupp : 0, Lava : "images/blink.png"}; 
var mekansm = 			{Lname : "mekansm", Lcarr :  0, Lsupp : 0, Lava : "images/mekansm.png"}; 
var ward_dispenser = 	{Lname : "ward_dispenser", Lcarr :  0, Lsupp : 0, Lava : "images/ward_dispenser.png"};
//******************|   Displayed Elements    |***************************************
var po1 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var po2 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var po3 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var po4 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var po5 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var epo1 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var epo2 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var epo3 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var epo4 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
var epo5 = {Lcarr : 0,	Lsupp : 0,  Lsurv: 0, Lteam: 0, Ldisa: 0, Lpush: 0};
//******************| 	The Arrays 	|**************************************************
var HeroArray = 	[antimage, morphling, queenofpain, pudge, dark_seer, rattletrap, enigma, chen,
					venomancer, crystal_maiden];
var size = 			HeroArray.length;
var gHeroArray = 	[po1, po2, po3, po4, po5, epo1, epo2, epo3, epo4, epo5];
var gSize = 		gHeroArray.length;
//********************|   Update Funtions   |*****************************************

function $fillOptions() {
	for (var c=0; c<10; c++) {
		for (var i=0; i<size; i++) {
		        var name = HeroArray[i].Lname;
		        var url = "url("+HeroArray[i].Lava+")";
		        var sel = document.getElementsByClassName("selecto")[c];
		        var useme = sel.options.length;
		        sel.options[useme] = new Option(name,i);
		        sel.options[useme].style.backgroundImage = url;
		        sel.options[useme].style.backgroundRepeat = "no-repeat";
		        sel.options[useme].style.backgroundSize = "25% 100%";
		        sel.options[useme].style.height = "50px";
		}
	}
}



function $boldify() {
	var tobold = document.getElementById("Antimagei");
	tobold.style.height = "55px";
}

function $boldify_cancel() {
	var tobold = document.getElementById("Antimagei");
	tobold.style.height = "45px";
}

function $test() {alert("Success!")}
function $fillIcons() {
	for (var i=0; i<size; i++) {
	        var ulist = document.getElementById("flex_hb_img");
	        var url = HeroArray[i].Lava;
	        var img = new Image();
	        img.src = url;
	        img.class = "flex_hb_icon";
	        img.id = HeroArray[i].Lname + "i";
	        
	       // alert(img.id);
	       // img.onClick = "$test()";
	       // img.onMouseover = "$test()";
	        //img.onMouseout = "$boldify_cancel()";
	        ulist.appendChild(img);
	}
	for (var i=0; i<size; i++) {
			img.addEventListener("mouseover", function() {document.getElementById(img.id).style.height = "55px"} );
	        img.addEventListener("mouseout", function() {document.getElementById(img.id).style.height = "45px"} );
	}
}

function $recommend() {
	document.getElementById("rec_list").innerHTML = "Recommend %";
	var carr_need = 50 + 5*(ecarr - carr); //value comparisons generate coefficent between -20 and 20 | outputs value between 10 and 100 ????
	var supp_need = 50 + 5*(esupp - supp);
	var surv_need = 50 + 5*(esurv - surv);
	var team_need = 50 + 5*(eteam - team);
	var disa_need = 50 + 5*(edisa - disa);
	var push_need = 50 + 5*(epush - push);
	var r_id = document.getElementById("recpic");
	var r_li = document.getElementById("rec_list");
	var r_new_n = "";
	var current_rec_val = 0;
	var best_rec_val = 0;
	var best_rec_val_id = 0;
	for(var c=0; c<size; c++) {
		current_rec_val = 0;
		current_rec_val += carr_need*HeroArray[c].Lcarr; //generates final value between 120 and 600, mid @ 360  ??????
		current_rec_val += supp_need*HeroArray[c].Lsupp;
		current_rec_val += surv_need*HeroArray[c].Lsurv;
		current_rec_val += team_need*HeroArray[c].Lteam;
		current_rec_val += disa_need*HeroArray[c].Ldisa;
		current_rec_val += push_need*HeroArray[c].Lpush;
		//-------------------------------
		var node = document.createElement("LI");
	    var textnode = document.createTextNode(HeroArray[c].Lname + ":" + Math.round(current_rec_val / 7) + "%");
	    node.appendChild(textnode);
	    document.getElementById("rec_list").appendChild(node);
	}
	//r_id.src=HeroArray[best_rec_val_id].Lava;
	//alert("num is "+current_rec_val);
}

function $set_pos(selectID) {		// positionToSet 
	var loc = selectID.value;  // returns the location in HeroArray of the new Hero 
	var pts = parseInt(selectID.name);
	var img = "url("+HeroArray[loc].Lava+")";
	gHeroArray[pts].Lcarr = HeroArray[loc].Lcarr;  // then just repeat this syntax to copy different "L" values
	gHeroArray[pts].Lsupp = HeroArray[loc].Lsupp;
	gHeroArray[pts].Lsurv = HeroArray[loc].Lsurv;
	gHeroArray[pts].Lteam = HeroArray[loc].Lteam;
	gHeroArray[pts].Ldisa = HeroArray[loc].Ldisa;
	gHeroArray[pts].Lpush = HeroArray[loc].Lpush;
	selectID.style.backgroundImage = img;
	$update_score_total(); 
}

function $update_score_total() {
	carr = 0;
	supp = 0;
	surv = 0;
	team = 0;
	disa = 0;
	push = 0;
	ecarr = 0;
	esupp = 0;
	esurv = 0;
	eteam = 0;
	edisa = 0;
	epush = 0;
	for(i=0;i<5;i++) {
		carr += gHeroArray[i].Lcarr;
		supp += gHeroArray[i].Lsupp;
		surv += gHeroArray[i].Lsurv;
		team += gHeroArray[i].Lteam;
		disa += gHeroArray[i].Ldisa;
		push += gHeroArray[i].Lpush;
	};
	for(i=5;i<10;i++) {
		ecarr += gHeroArray[i].Lcarr;
		esupp += gHeroArray[i].Lsupp;
		esurv += gHeroArray[i].Lsurv;
		eteam += gHeroArray[i].Lteam;
		edisa += gHeroArray[i].Ldisa;
		epush += gHeroArray[i].Lpush;
	};

	myChart.datasets[0].points[0].value = supp;
	myChart.datasets[0].points[1].value = carr;
	myChart.datasets[0].points[2].value = surv;
	myChart.datasets[0].points[3].value = team;
	myChart.datasets[0].points[4].value = push;
	myChart.datasets[0].points[5].value = disa;
	myChart.datasets[1].points[0].value = esupp;
	myChart.datasets[1].points[1].value = ecarr;
	myChart.datasets[1].points[2].value = esurv;
	myChart.datasets[1].points[3].value = eteam;
	myChart.datasets[1].points[4].value = epush;
	myChart.datasets[1].points[5].value = edisa;
	myChart.update();
	$recommend();
}

