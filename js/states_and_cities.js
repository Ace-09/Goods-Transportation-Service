var citiesByState = {
  //  Andaman & Nicobar:
    AndhraPradesh:["Achampet","Adilabad","Adoni","Alampur", "Allagadda", "Alur", "Amalapuram", "Amangallu", "Anakapalle", "Anantapur", "Andole", "Araku", "Armoor", "Asifabad", "Aswaraopet", "Atmakur", "B. Kothakota", "Badvel", "Banaganapalle", "Bandar", "Bangarupalem", "Banswada", "Bapatla", "Bellampalli", "Bhadrachalam", "Bhainsa", "Bheemunipatnam", "Bhimadole", "Bhimavaram", "Bhongir", "Bhooragamphad", "Boath", "Bobbili", "Bodhan", "Chandoor", "Chavitidibbalu", "Chejerla", "Chepurupalli", "Cherial", "Chevella", "Chinnor", "Chintalapudi", "Chintapalle", "Chirala", "Chittoor", "Chodavaram", "Cuddapah", "Cumbum", "Darsi", "Devarakonda", "Dharmavaram", "Dichpalli", "Divi", "Donakonda", "Dronachalam", "East Godavari", "Eluru", "Eturnagaram", "Gadwal", "Gajapathinagaram", "Gajwel", "Garladinne", "Giddalur", "Godavari", "Gooty", "Gudivada", "Gudur", "Guntur", "Hindupur", "Hunsabad", "Huzurabad", "Huzurnagar", "Hyderabad", "Ibrahimpatnam", "Jaggayyapet", "Jagtial", "Jammalamadugu", "Jangaon", "Jangareddygudem", "Jannaram", "Kadiri", "Kaikaluru", "Kakinada", "Kalwakurthy", "Kalyandurg", "Kamalapuram", "Kamareddy", "Kambadur", "Kanaganapalle", "Kandukuru", "Kanigiri", "Karimnagar", "Kavali", "Khammam", "Khanapur (AP)", "Kodangal", "Koduru", "Koilkuntla", "Kollapur", "Kothagudem", "Kovvur", "Krishna", "Krosuru", "Kuppam", "Kurnool", "Lakkireddipalli", "Madakasira", "Madanapalli", "Madhira", "Madnur", "Mahabubabad", "Mahabubnagar", "Mahadevapur", "Makthal", "Mancherial", "Mandapeta", "Mangalagiri", "Manthani", "Markapur", "Marturu", "Medachal", "Medak", "Medarmetla", "Metpalli", "Mriyalguda", "Mulug", "Mylavaram", "Nagarkurnool", "Nalgonda", "Nallacheruvu", "Nampalle", "Nandigama", "Nandikotkur", "Nandyal", "Narasampet", "Narasaraopet", "Narayanakhed", "Narayanpet", "Narsapur", "Narsipatnam", "Nazvidu", "Nelloe", "Nellore", "Nidamanur", "Nirmal", "Nizamabad", "Nuguru", "Ongole", "Outsarangapalle", "Paderu", "Pakala", "Palakonda", "Paland", "Palmaneru", "Pamuru", "Pargi", "Parkal", "Parvathipuram", "Pathapatnam", "Pattikonda", "Peapalle", "Peddapalli", "Peddapuram", "Penukonda", "Piduguralla", "Piler", "Pithapuram", "Podili", "Polavaram", "Prakasam", "Proddatur", "Pulivendla", "Punganur", "Putturu", "Rajahmundri", "Rajampeta", "Ramachandrapuram", "Ramannapet", "Rampachodavaram", "Rangareddy", "Rapur", "Rayachoti", "Rayadurg", "Razole", "Repalle", "Saluru", "Sangareddy", "Sathupalli", "Sattenapalle", "Satyavedu", "Shadnagar", "Siddavattam", "Siddipet", "Sileru", "Sircilla", "Sirpur Kagaznagar", "Sodam", "Sompeta", "Srikakulam", "Srikalahasthi", "Srisailam", "Srungavarapukota", "Sudhimalla", "Sullarpet", "Tadepalligudem", "Tadipatri", "Tanduru", "Tanuku", "Tekkali", "Tenali", "Thungaturthy", "Tirivuru", "Tirupathi", "Tuni", "Udaygiri", "Ulvapadu", "Uravakonda", "Utnor", "V.R. Puram", "Vaimpalli", "Vayalpad", "Venkatgiri", "Venkatgirikota", "Vijayawada", "Vikrabad", "Vinjamuru", "Vinukonda", "Visakhapatnam", "Vizayanagaram", "Vizianagaram", "Vuyyuru", "Wanaparthy", "Warangal", "Wardhannapet", "Yelamanchili", "Yelavaram", "Yeleswaram", "Yellandu", "Yellanuru", "Yellareddy", "Yerragondapalem", "Zahirabad "],
    // Arunachal Pradesh:
    // Assam:
    // Bihar:
    // Chandigarh:
    // Chhattisgarh:
    // Dadra & Nagar Haveli:
    // Daman & Diu:
    // Delhi:
    // Goa:
    // Gujarat:
    // Haryana:
    // Himachal Pradesh:
    // Jammu & Kashmir:
    // Jharkhand:
    // Karnataka:
    // Kerala:
    // Lakshadweep:
    // L
    // Madhya Pradesh:
    // Maharashtra:
    // Manipur:
    // Meghalaya:
    // Mizoram:
    // Nagaland:
    // Orissa:
    // Pondicherry:
    // Punjab:
    // Rajasthan:
    // Sikkim:
    // Tamil Nadu:
    // Telangana:
    // Tripura:
    // Uttar Pradesh:
    // Uttarakhand:
    // West Bengal:
   Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
   MadhyaPradesh: ["Indore"],
   Kerala: ["kochi", "Kanpur"],
   UttarPradesh: ["Lucknow"],
   Uttarakhand: ["Dehradun", "Kashipur"]
};
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }
}
function displaySelected() {
    var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
    alert(country + "\n" + city);
}
function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
}
