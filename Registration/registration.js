function register()
{
    let password=document.getElementById("psw1");
    let cpassword=document.getElementById("psw2");
    if(password==cpassword)
    {
        alert("equal");
    }
    else
    {
        alert("password doesn't match");
    }
}