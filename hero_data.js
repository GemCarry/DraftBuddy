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
var rcarr = 0;
var rsupp = 0;
var rsurv = 0;
var rteam = 0;
var rdisa = 0;
var rpush = 0;

var selected_hero = -1;
var num_good = 1;
var num_good_dyn = 1;
var num_bad = 1;
var num_bad_dyn = 1;
//********************|   Hero Objects    |************************************************
var antimage = 			{Lname : "Antimage", Lcarr : 4, Lsupp : 0, Lsurv: 1, Lteam: 1, Ldisa: 1, Lpush: 4, Lava : "images/antimage.png", active : -1}; 	// -1: inactive, 0: good, 1; evil
var morphling = 		{Lname : "Morphling", Lcarr :  3, Lsupp : 1, Lsurv: 3, Lteam: 2, Ldisa: 2, Lpush: 2, Lava : "images/morphling.png", active : -1}; 
var queenofpain = 		{Lname : "Queen of Pain", Lcarr :  3, Lsupp : 1, Lsurv: 1, Lteam: 3, Ldisa: 1, Lpush: 2, Lava : "images/queenofpain.png", active : -1}; 
var pudge = 			{Lname : "Pudge", Lcarr :  2, Lsupp : 2, Lsurv: 3, Lteam: 3, Ldisa: 4, Lpush: 1, Lava : "images/pudge.png", active : -1};
var dark_seer = 		{Lname : "Dark Seer", Lcarr :  2, Lsupp : 2, Lsurv: 3, Lteam: 4, Ldisa: 2, Lpush: 2, Lava : "images/dark_seer.png", active : -1};
var rattletrap = 		{Lname : "Clockwerk", Lcarr :  1, Lsupp : 3, Lsurv: 3, Lteam: 4, Ldisa: 4, Lpush: 1, Lava : "images/rattletrap.png", active : -1};
var enigma = 			{Lname : "Enigma", Lcarr :  1, Lsupp : 3, Lsurv: 1, Lteam: 4, Ldisa: 4, Lpush: 3, Lava : "images/enigma.png", active : -1};
var chen = 				{Lname : "Chen", Lcarr :  0, Lsupp : 4, Lsurv: 1, Lteam: 3, Ldisa: 3, Lpush: 3, Lava : "images/chen.png", active : -1};
var venomancer = 		{Lname : "Venomancer", Lcarr :  0, Lsupp : 4, Lsurv: 1, Lteam: 3, Ldisa: 2, Lpush: 3, Lava : "images/venomancer.png", active : -1};
var crystal_maiden = 	{Lname : "Crystal Maiden", Lcarr :  0, Lsupp : 5, Lsurv: 1, Lteam: 2, Ldisa: 4, Lpush: 1, Lava : "images/crystal_maiden.png", active : -1};
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
var HeroArray = [antimage, morphling, queenofpain, pudge, dark_seer, rattletrap, enigma, chen, 
				venomancer, crystal_maiden];
var size = HeroArray.length;
var SelectedHeroArray = [];
var gSize = SelectedHeroArray.length;
var SelectedEnemyHeroArray = [];

var iconScaleFactor = 8;
//********************|   Update Funtions   |*****************************************

function $drawGridBoxes() {
	for(var current_hero = 0; current_hero < size; current_hero ++) {
		var new_span = document.createElement("SPAN");
		new_span.setAttribute("class","hero_span");
		document.getElementById("hero_grid").appendChild(new_span);
		// Creates the Icon ***********************************************
		var new_icon = document.createElement("img");
		new_icon.src = HeroArray[current_hero].Lava;
		//new_icon.style.border = "10px solid white";
		new_icon.style.margin = "10px";
		new_icon.style.height = iconScaleFactor*9+"px";
		new_icon.style.width = iconScaleFactor*16+"px";
		new_icon.id = "icon#" + current_hero;
		new_icon.setAttribute("class", "hero_icon");
		// Assigns Mouseover Behaviors ******************
        new_icon.onmouseover = function(j) { 
        	return function() {
        		$iconHover("icon#" + j);
        	} 
        }(current_hero);
        new_icon.onmouseout = function(j) { 
        	return function() {
        		$iconHoverCancel("icon#" + j);
        	} 
        }(current_hero);
        new_icon.onclick = function(j) {
        	return function() {
        		$iconClick(j);
        	}
        }(current_hero);
        // Appends the Icon *******************
		new_span.appendChild(new_icon);
	}
}

function $iconHover(ICON) {
	document.getElementById(ICON).style.height = iconScaleFactor*11 + "px";
	document.getElementById(ICON).style.width = iconScaleFactor*18 + "px";	
	document.getElementById(ICON).style.border = "2px solid yellow";
	document.getElementById(ICON).style.margin = "0px";
}

function $iconHoverCancel(ICON) {
	document.getElementById(ICON).style.height = iconScaleFactor*9+"px";
	document.getElementById(ICON).style.width = iconScaleFactor*16+"px";
	document.getElementById(ICON).style.border = "0px"
	document.getElementById(ICON).style.margin = "10px";
}

function $iconClick(HERO) {
	document.getElementById("info_window_text").innerHTML = HeroArray[HERO].Lname;
	document.getElementById("info_window_img").src = HeroArray[HERO].Lava;
	selected_hero = HERO;
	var this_carr = HeroArray[HERO].Lcarr;
	var this_supp = HeroArray[HERO].Lsupp;
	var this_surv = HeroArray[HERO].Lsurv;
	var this_team = HeroArray[HERO].Lteam;
	var this_disa = HeroArray[HERO].Ldisa;
	var this_push = HeroArray[HERO].Lpush;
	myChart_comp.datasets[2].points[0].value = myChart_comp.datasets[0].points[0].value + this_carr;
	myChart_comp.datasets[2].points[1].value = myChart_comp.datasets[0].points[1].value + this_supp;
	myChart_comp.datasets[2].points[2].value = myChart_comp.datasets[0].points[2].value + this_surv;
	myChart_comp.datasets[2].points[3].value = myChart_comp.datasets[0].points[3].value + this_team;
	myChart_comp.datasets[2].points[4].value = myChart_comp.datasets[0].points[4].value + this_disa;
	myChart_comp.datasets[2].points[5].value = myChart_comp.datasets[0].points[5].value + this_push;
	myChart.datasets[0].points[0].value = this_carr;
	myChart.datasets[0].points[1].value = this_supp;
	myChart.datasets[0].points[2].value = this_surv;
	myChart.datasets[0].points[3].value = this_team;
	myChart.datasets[0].points[4].value = this_disa;
	myChart.datasets[0].points[5].value = this_push;
	// updates
	myChart.update();
	myChart_comp.update();
}

function $init_comp_icons() {
	for(var i = 1; i < 6; i++) {
		// goods
		var new_good_span = document.createElement("SPAN");
		new_good_span.id = i + "#good_span";
		var new_good_img = document.createElement("img");
		new_good_img.id = i + "#good_img";
		new_good_img.src = "images/aegis.png";
		new_good_img.setAttribute("class", "gORe_img");
		new_good_span.appendChild(new_good_img);
		document.getElementById("comp_window_ul").appendChild(new_good_span);
		// evils
		var new_evil_span = document.createElement("SPAN");
		new_evil_span.id = i + "#evil_span";
		var new_evil_img = document.createElement("img");
		new_evil_img.id = i + "#evil_img";
		new_evil_img.src = "images/aegis.png";
		new_evil_img.setAttribute("class", "gORe_img");
		new_evil_span.appendChild(new_evil_img);
		document.getElementById("comp_window_bad_ul").appendChild(new_evil_span);
	}
}

function $add_good() {
	var edit_result = $edit_chart("myChart_comp", 0);
	var i = 1; 	// Iterates through "[i]#[good/evil]_img" ID list
	var si = 1; 	// "swap-i"
	if (edit_result == "add") {
		while(i < 6) {
			if(document.getElementById(i+"#good_img").src.indexOf("images/aegis.png") > -1) {		// TRUE if "image" == "aegis.png"
				document.getElementById(i+"#good_img").src = HeroArray[selected_hero].Lava;			// Changes first default image to the hero's image
				i = 100;
			}
			i ++;
		}
	} else if(edit_result == "sub") {
		while(i < 6) {
			if (document.getElementById(i+"#good_img").src.indexOf(HeroArray[selected_hero].Lava) > -1) {	// TRUE if "image" == "Hero.Lava"
				document.getElementById(i+"#good_img").src = "images/aegis.png";								// Changes hero's image to default
				i = 100;
			}
			i ++;
		}
	} else if(edit_result == "swap_to_g") {
		while(i < 6) {
			if (document.getElementById(i+"#good_img").src.indexOf("images/aegis.png") > -1) {	// TRUE if "image" == "aegis.png"
				document.getElementById(i+"#good_img").src = HeroArray[selected_hero].Lava;			// Changes first default image to the hero's image
				while (si < 6) {
					if (document.getElementById(si+"#evil_img").src.indexOf(HeroArray[selected_hero].Lava) > -1) {	// TRUE if "image" == "Hero.Lava"
						document.getElementById(si+"#evil_img").src = "images/aegis.png";								// Changes hero's image to default
						si = 100;
					}
					si ++;
				}
				i = 100;
			}
			i ++;
		}
	} else {}
}

function $add_evil() {
	var edit_result = $edit_chart("myChart_comp", 1);
	var i = 1; 	// Iterates through "[i]#[good/evil]_img" ID list
	var si = 1; 	// "swap-i"
	if (edit_result == "add") {
		while(i < 6) {
			if(document.getElementById(i+"#evil_img").src.indexOf("images/aegis.png") > -1) {		// TRUE if "image" == "aegis.png"
				document.getElementById(i+"#evil_img").src = HeroArray[selected_hero].Lava;			// Changes first default image to the hero's image
				i = 100;
			}
			i ++;
		}
	} else if(edit_result == "sub") {
		while(i < 6) {
			if (document.getElementById(i+"#evil_img").src.indexOf(HeroArray[selected_hero].Lava) > -1) {	// TRUE if "image" == "Hero.Lava"
				document.getElementById(i+"#evil_img").src = "images/aegis.png";								// Changes hero's image to default
				i = 100;
			}
			i ++;
		}
	} else if(edit_result == "swap_to_e") {
		while(i < 6) {
			if (document.getElementById(i+"#evil_img").src.indexOf("images/aegis.png") > -1) {	// TRUE if "image" == "aegis.png"
				document.getElementById(i+"#evil_img").src = HeroArray[selected_hero].Lava;			// Changes first default image to the hero's image
				while (si < 6) {
					if (document.getElementById(si+"#good_img").src.indexOf(HeroArray[selected_hero].Lava) > -1) {	// TRUE if "image" == "Hero.Lava"
						document.getElementById(si+"#good_img").src = "images/aegis.png";								// Changes hero's image to default
						si = 100;
					}
					si ++;
				}
				i = 100;
			}
			i ++;
		}
	} else {}
}

function $edit_chart(CHART_ID, DATASET) {
	var HERO = selected_hero;
	var IS_ACTIVE = HeroArray[HERO].active;
	var RET;
	if (IS_ACTIVE == -1) {							// HERO is not part of a team <add to team> 
		$add_chart_data(CHART_ID, DATASET);
		HeroArray[HERO].active = DATASET;
		RET = "add";
	} else if (IS_ACTIVE == DATASET) {				// HERO is part of the same team <subract from team>
		$sub_chart_data(CHART_ID, DATASET);
		HeroArray[HERO].active = -1;
		RET = "sub";
	} else if (IS_ACTIVE == 0)	{					// HERO is part of wrong team (good->evil)	<move teams>
		$sub_chart_data(CHART_ID, 0);
		$add_chart_data(CHART_ID, 1);
		HeroArray[HERO].active = 1;
		RET = "swap_to_e";
	}
	else {											// HERO is part of wrong team (evil->good) <move teams>
		$sub_chart_data(CHART_ID, 1);
		$add_chart_data(CHART_ID, 0);
		HeroArray[HERO].active = 0;
		RET = "swap_to_g";
	} 
	window[CHART_ID].update();
	return RET;
}

function $add_chart_data(CHART_ID, DATASETx) {
	var HERO = selected_hero;
	window[CHART_ID].datasets[DATASETx].points[0].value += HeroArray[HERO].Lcarr;
	window[CHART_ID].datasets[DATASETx].points[1].value += HeroArray[HERO].Lsupp;
	window[CHART_ID].datasets[DATASETx].points[2].value += HeroArray[HERO].Lsurv;
	window[CHART_ID].datasets[DATASETx].points[3].value += HeroArray[HERO].Lteam;
	window[CHART_ID].datasets[DATASETx].points[4].value += HeroArray[HERO].Ldisa;
	window[CHART_ID].datasets[DATASETx].points[5].value += HeroArray[HERO].Lpush;
}

function $sub_chart_data(CHART_ID, DATASETx) {
	var HERO = selected_hero;
	window[CHART_ID].datasets[DATASETx].points[0].value -= HeroArray[HERO].Lcarr;
	window[CHART_ID].datasets[DATASETx].points[1].value -= HeroArray[HERO].Lsupp;
	window[CHART_ID].datasets[DATASETx].points[2].value -= HeroArray[HERO].Lsurv;
	window[CHART_ID].datasets[DATASETx].points[3].value -= HeroArray[HERO].Lteam;
	window[CHART_ID].datasets[DATASETx].points[4].value -= HeroArray[HERO].Ldisa;
	window[CHART_ID].datasets[DATASETx].points[5].value -= HeroArray[HERO].Lpush;
}

