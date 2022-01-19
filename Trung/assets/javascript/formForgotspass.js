var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
function checkNull(txt) {
    if(txt.value.length == 0)
        return true;
    else
        return false;
}

function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

function formForgotpassValid(f) {
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

    alert('Hệ thống sẽ gửi mật khẩu mới vào email bạn đã đăng kí !')
}