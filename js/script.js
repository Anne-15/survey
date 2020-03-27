function validateForm(){
    var x = document.forms["survey"] ["buttonSurvey"].value;
    if (x == ""){
        alert("The form must be filled");
        return false;
    }else{
        alert("Welcome to the form");
        return true;
    }
}