// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
num = parseInt(prompt('Nhập vào số lần in ra số Fibonacci'))
count = 0;
let a=0
let b=1
while (count<num){
    for (i = 0; i < num; i++) {
        c = a+b;
        a=b;
        b=c;
        document.write(c + '<br>')
        count+=1
    }
}