var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
var regexPhone = /^(\+84|0)[1-9][0-9]{8}$/;
var regexUsername = /^[A-Za-z0-9_]{1,20}$/;
var regexPassword = /^([A-Za-z0-9_@!#$%^&*]){6,20}/;

function checkNull(txt) {
    if(txt.value.length == 0)
        return true;
    else
        return false;
}

function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

function checkPass(txt1, txt2) {
    if(txt1.value == txt2.value) 
        return true;
    else
        return false;
}

function formSignupValidate(f){
    if(checkNull(f.email)) {
        alert('Vui lòng nhập email !');
        return;
    }

    if(!stringMatch(f.email, regexEmail)) {
        alert('Email sai định dạng !');
        f.email.value="";
        f.email.focus();
        return;
    }

    if(checkNull(f.phone)) {
        alert('Vui lòng nhập số điện thoại !');
        return;
    }

    if(!stringMatch(f.phone, regexPhone)) {
        alert('Số điện thoại sai định dạng !');
        f.phone.value="";
        f.phone.focus();
        return;
    }

    if(checkNull(f.username)) {
        alert('Vui lòng nhập tên đăng nhập !');
        return;
    }

    if(!stringMatch(f.username, regexUsername)) {
        alert('Tên đăng nhập sai định dạng !');
        alert('Tên đăng nhập không được chứa kí tự đặc biệt !');
        f.username.value="";
        f.username.focus();
        return;
    }

    if(checkNull(f.password)) {
        alert('Vui lòng nhập mật khẩu !');
        return;
    }

    if(!stringMatch(f.password, regexPassword)) {
        alert('Mật khẩu sai định dạng !');
        alert('Mật khẩu bắt đầu bằng chữ hoa và chứa từ 6-20 kí tự');
        f.password.value="";
        f.password.focus();
        return;
    }

    if(checkNull(f.confirm)) {
        alert('Vui lòng xác nhận mật khẩu !');
        return;
    }

    if(!checkPass(f.password, f.confirm)) {
        alert('Mật khẩu không giống nhau !');
        f.confirm.value=""
        f.confirm.focus();
        return;
    }

    alert('Bạn đã đăng kí thành công ');






}
