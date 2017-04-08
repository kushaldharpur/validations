let x = () => {
    let namepattern = document.myForm.name.value;
    let midpattern = document.myForm.mid.value;
    let emailpattern = document.myForm.email.value;
    let password = document.myForm.pswd.value;
    let password1 = document.myForm.pswd1.value;
    let alphaExp = /^[a-zA-Z]/;
    let betaExp = /^[m]+[0-9]/;
    let gamaExp = /^[m]+([0-9]{7})+[@]+[m]+[i]+[n]+[d]+[t]+[r]+[e]+[e]+[.]+[c]+[o]+[m]/;
    if (!namepattern) {
        alert("Please Enter Name!!! ");
        myForm.name.focus();
        return false;
    }
    if (!namepattern.match(alphaExp)) {
        alert("Input should be character only");
        myForm.name.focus();
        return false;
    }
    if (!midpattern) {
        alert("Please Enter Your MID");
        myForm.mid.focus();
        return false;
    }
    if (!midpattern.match(betaExp)) {
        alert("MID should be like M9999999 only");
        myForm.mid.focus();
        return false;
    }
    if (midpattern.length > 8 || midpattern.length < 8) {
        alert("MID consist of 8 chracters only");
        myForm.mid.focus();
        return false;
    }
    if (!emailpattern) {
        alert("Enter Your Email Id");
        myForm.email.focus();
        return false;
    }
    if (!(emailpattern.match(gamaExp))) {
        alert("Invalid Email Id");
        myForm.email.focus();
        return false;
    }
    if (emailpattern.length > 21 || emailpattern.length < 21) {
        alert("check ur mail id");
        myForm.email.focus();
        return false;
    }
    if (!password) {
        alert("Please Enter Password");
        myForm.pswd.focus();
        return false;
    }
    if (!password || password.length < 8 || password > 20) {
        alert("Password Should Be atleast 8 characters long");
        myForm.pswd.focus();
        return false;
    }
    if (!password1) {
        alert("Please Re-Enter Password");
        myForm.pswd1.focus();
        return false;
    }
    if (password1 != password) {
        alert("Passwords dont Match");
        myForm.pswd.value = "";
        myForm.pswd1.value = "";
        myForm.pswd.focus();
        return false;
    }

    return true;
}