
count = 0
let a = 0;
let b = 1;
let tong = 0;
while (count<20) {
    for (i = 0; i < 20;i++) {
        c = a + b;
        a = b;
        b = c;
        count+=1;
        tong = tong + c
    }
    document.write('Tổng của 20 số Fibonacci đầu tiên là: ' + tong)
}
