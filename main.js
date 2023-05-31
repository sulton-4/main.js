var userNum = +prompt("Yoshingizni kiriting")

 if (userNum <= 18) {
    console.log("Yoshsiz, hali o'qishingiz kerak");
}
else if (userNum <= 50) {
    console.log("Ishlashingiz kerak"); 
}
else if(userNum <= 59) {
    console.log("Yaqinda pensiyaga chiqasiz");
}
else if(userNum <= 150) {
    console.log("Pensionerlarga oxshaysiz, hali tirik bo'lsangiz");
}
else{
    console.log('nimadir xato ketgan');
}