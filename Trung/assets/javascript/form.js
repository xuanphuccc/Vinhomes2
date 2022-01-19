
var inputEmailQmk = document.getElementById('input__email--qmk')

function quenmk(a) {
    if (inputEmailQmk.value == '') {
        alert('Chưa nhập email')
    } else {
        alert('Hệ thống sẽ gửi mật khẩu dự phòng vào email của bạn')
    }
}