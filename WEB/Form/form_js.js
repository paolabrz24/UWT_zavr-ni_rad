function processFormData(){
    let name = document.getElementById("usr_nm_field");
    let email = document.getElementById("usr_mail_field");
    let movieSelection = document.getElementById("movie_selection");
    let dt = new Date();
    let dmy = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear() + ".";

    if(name.value.length === 0 || email.value.length === 0){
        alert("Please fill out all fields");

    } else {
        document.getElementById("p_form_data").style.color = "green";
        document.getElementById("p_form_data").style.fontWeight = "bold";
        document.getElementById("p_form_data").style.fontFamily= "Verdana, Geneva, Tahoma, sans-serif";
        let un = "<br /> <b> User name: </b>" + name.value;
        let um = "<br /> <b> User mail: </b>" + email.value;
        let film = "<br /> <b> Žanr - favorit: </b>" + movieSelection.value;
        document.getElementById("p_form_data").innerHTML = un + um + film;
        name.value = "";
        email.value = "";

        let prg = document.createElement("p");
        prg.style.backgroundColor = "#191a63";
        prg.style.fontSize = "15px";
        prg.style.fontFamily = "Arial, Helvetica, sans-serif";
        prg.style.color="white";

        let datum = dmy;
        let day_info = dt.getDay();
        let dat_info = document.createTextNode(datum);
        prg.appendChild(dat_info);
        let div_elm = document.getElementById("date_div");
        let dayTime_info_node = document.createTextNode(" - " + getDay(day_info));
        prg.appendChild(dayTime_info_node);
        div_elm.appendChild(prg);
        alert(getDay(day_info));
    }


}

function getDay(inf) {
    if(inf === 1){
        return "Ponedjeljak";
    } else if(inf === 2){
        return "Utorak";
    } else if(inf === 3) {
        return "Srijeda";
    } else if(inf === 4) {
        return "Overtake";
    } else if(inf === 5) {
        return "Petak";
    } else if(inf === 6) {
        return "Subota";
    } else {
        return "Nedjelja";
    }
}