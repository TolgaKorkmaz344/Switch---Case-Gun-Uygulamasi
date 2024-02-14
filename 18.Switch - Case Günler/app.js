let yenisatir = "\r\n";
let metin = "1-Pazartesi"+yenisatir+"2-Salı"+yenisatir+"3-Çarşamba"+yenisatir+"4-Perşembe"+yenisatir+"5-Cuma"+yenisatir+"6-Cumartesi"+yenisatir+"7-Pazar"+yenisatir+"Lütfen gün seçimi yapınız";
alert(metin);

let deger=prompt("Lütfen bir seçim yapınız");

switch(deger) {

    case "1": 
    alert("Pazartesi");
    break;

    case "2":
    alert("Salı");
    break;

    case "3":
    alert("Çarşamba");
    break;

    case "4":
    alert("Perşembe");
    break;

    case "5":
    alert("Cuma");
    break;

    case "6":
    alert("Cumartesi");
    break;

    case "7":
    alert("Pazar");
    break;

    default :
    alert("Geçerli bir gün sayısı giriniz");

}