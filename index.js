// Tính lương nhân viên
function tinhluong(){
    var dayincome = +document.getElementById('luongmotngay').value;
    var workday = +document.getElementById('songaylam').value;
    var result = dayincome * workday;
    console.log('ketqua', result)
    document.getElementById("ketquane").innerHTML = result;
}
// Tính giá trị trung bình
function tinhgiatritb(){
    var number1 = +document.getElementById('sothu1').value;
    var number2 = +document.getElementById('sothu2').value;
    var number3 = +document.getElementById('sothu3').value;
    var number4 = +document.getElementById('sothu4').value;
    var number5 = +document.getElementById('sothu5').value;
    var ketquala = (number1 + number2 + number3 + number4 + number5) / 5;
    console.log('ketqua', ketquala)
    document.getElementById("ketquacuoicung").innerHTML = ketquala;
}
//  Quy đổi tiền
function quydoi(){
    var tigia = +document.getElementById('tigiadola').value;
    var dolamuondoi = +document.getElementById('sodola').value;
    var tongtienvnd = tigia * dolamuondoi;
    console.log('Tổng tiền', tongtienvnd);
    document.getElementById("tongtiennhanduoc").innerHTML = tongtienvnd;
}
// Tính diện tích, chu vi hình chữ nhật
function tinhtoan(){
    var dai = +document.getElementById('chieudai').value;
    var rong = +document.getElementById('chieurong').value;
    var chuvi = (dai + rong) * 2;
    var dientich = dai * rong;
    document.getElementById("dapsochuvi").innerHTML = chuvi;
    document.getElementById("dapsodientich").innerHTML = dientich;
}
// Tính tổng 2 ký số
function tinhkyso(){
    var sohaichuso = +document.getElementById('socantinh').value;
    var hangdonvi = sohaichuso % 10;
    var hangchuc = (sohaichuso - hangdonvi) / 10;
    var tonghaiso = hangdonvi + hangchuc;
    document.getElementById("sohangdonvila").innerHTML = hangdonvi;
    document.getElementById("sohangchucla").innerHTML = hangchuc;
    document.getElementById("tonghaikysola").innerHTML = tonghaiso;
}