var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
var regexPassword = /^([A-Za-z0-9_@!#$%^&*]){6,20}/;

function checkNull(txt) {
    if(txt.value.length == 0) 
        return true;
    else
        return false;
}

function notCheck(radio) {
    var rt = true;
    for(i=0; i<radio.length; i++) 
        if(radio[i].checked)
            return false;
        return rt;
}

function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

function formLoginValidate(f) {
    if(checkNull(f.email)) {
        alert('Vui lòng nhập email !');
        return;
    }

    if(!stringMatch(f.email, regexEmail)) {
        alert('Email không đúng định dạng !');
        f.email.value="";
        f.email.focus();
        return;
    }

    if(checkNull(f.password)) {
        alert('Vui lòng nhập mật khẩu !');
        return;
    }

    if(!stringMatch(f.password, regexPassword)) {
        alert('Mật khẩu không đúng định dạng !');
        alert('Mật khẩu bắt đầu bằng chữ hoa và chứa từ 6-20 kí tự');
        f.password.value="";
        f.password.focus();
        return;
    }

    if(notCheck(f.user)) {
        alert('Vui lòng chọn đối tượng đăng nhập !');
        return;
    }

    alert('Bạn đã đăng nhập thành công !');

}