
function validatePhoneNumber(){
    let account = document.getElementById("phoneNumber").value;
    regexp = /^[0-9]{10,10}$/;

    if (regexp.test(account)) {
            document.getElementById("kq").innerText = "Valid phone number" + "(" + " số điện thoại hợp lệ " + ")";

    }
    else {
        document.getElementById("kq").innerText = "Invalid phone number"+"("+" số điện thoại không hợp lệ "+")";
    }
}
