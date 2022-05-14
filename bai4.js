num = parseInt(prompt('Nhập vào số lần in ra số Fibonacci'))
count = 0;
let a=0
let b=1
while (count<num) {
    for (i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        // document.write(c + '<br>')
        count += 1
        if (c % 5 === 0) {
            document.write('Số đầu tiên chia hết cho 5 là: ' + c);
            break;}
    }
    break;
}