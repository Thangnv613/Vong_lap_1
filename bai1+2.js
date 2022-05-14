// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100.
// // Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for ( i=1;i<100;i++){
//     document.write(i + '<br/>')
//     if (i===99){
//         alert('Đã hoàn thành')
//     }
// }



// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
//     Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
//     Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
// tempetature = parseInt(prompt(" Mời nhập nhiệt độ"));
// check=0;
// while (check!==1) {
//     if (tempetature >= 100) {
//        tempetature = parseInt(prompt('Nóng quá !! Chịu không nổi.'));
//     } else if (tempetature <= 20) {
//        tempetature = parseInt(prompt('Lạnh lẽo quá! Nhạp lại đi'));}
//     else{
//         check=1
//         document.write('Nhiệt độ bay giờ là ' + tempetature + ' oC');
//     }
// }






























// function choi() {
//     n = prompt('Nhập vào sô lớn nhất trong khoảng mà bạn muốn dự đoán. vd nhập 9 (Số randome sẽ từ 1-9)')
//     computer = Math.floor(Math.random() * 9) + 1;
//     yourNumber = prompt('Nhập vào số mà bạn muốn dự đoán.')
//     for (i = 0; i < 5; i++) {
//         if (yourNumber === computer) {
//             document.getElementById('result').innerHTML = yourNumber;
//             console.log(yourNumber);
//             break;
//         } else {
//             yourNumber = prompt('Nhập lại số mà bạn muốn dự đoán')
//         }
//     }
// }
