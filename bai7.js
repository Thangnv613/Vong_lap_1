// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

for(i=1;i<=100;i++) {
    if (i % 3==0 && i %5 == 0){
            document.write('BuzzFizz' + '<br/>');}
    else if (i%3==0){
        document.write('Fizz'+ '<br/>')}
    else if (i%5==0){
        document.write('Buzz'+ '<br/>')}
    else
        document.write(i+ '<br/>')
}