// Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
number = parseInt(prompt('Nhập vào bất kì khoảng số muốn chia hết cho 7'));
count=0;
tong=0;
j=1
for (i =7 ; i <= 7*j; i+=7) {
        while (count<number){
        if (i % 7 == 0){
            tong+=i
            console.log(tong)
        }
            count+=1;
            j+=1
    }
}
document.write(tong+'<br>')
