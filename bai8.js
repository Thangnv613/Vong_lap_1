function start() {
    input = parseInt(prompt('Nhập khoảng số muốn chơi:'))
    Guss = parseInt(prompt('Nhập khoảng số muốn đoán:'))
    output = Math.floor(Math.random() * input)
    console.log(output)
    for (i = 0; i < 9; i++) {
        if (Guss === output) {
            document.getElementById('10').innerHTML = src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-9-5-diem-huan-hoa-hong.jpg"
            document.getElementById('result').innerHTML = 'Bạn ra gì đấy :))'
            break;
        } else
            Guss = parseInt(prompt('Gà thế nhập lại đi :))'))
    }
}