var inputPasswordDK = document.getElementById('input__password--dk')
var Confirm = document.getElementById('confirm')

var inputEmail = document.getElementById('input__email')
var inputName = document.getElementById('input__name')
var inputSdt = document.getElementById('input__sdt')



function dangKi(a) {

    console.log(inputName.value)
    if (inputEmail.value == '' || inputPasswordDK.value == '' || inputName.value == '' || inputSdt.value == '' || Confirm.value == '') {
        alert('Chưa nhập đầy đủ thông tin!')

    } else {
        if (inputPasswordDK.value != Confirm.value) {
            console.log(1)
            alert('Mật khẩu và xác nhận mật khẩu không trùng nhau!')
        } else {
            alert('đăng kí thành công')
        }
    }
}


// dang nhap  
var inputName = document.getElementById('input__name')
var inputPassword = document.getElementById('input--password')

function dangnhap(a) {
    if (inputName.value == '' || inputPassword.value == '') {
        alert('Email hoặc mật khẩu không hợp lệ')
    } else {
        alert('đăng nhập thành công')
    }
}