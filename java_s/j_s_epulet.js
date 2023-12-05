//jegyzet
document.getElementById("elso").addEventListener("mouseover",fgv_1);
function fgv_1(){
    document.getElementById("elso").innerHTML="Seprűt (hiába mondják azt) ne a konyhában keresd. Kérj a portástól. Vissza fog küldeni valószínűleg a konyhába megnézni, hogy biztos nincs-e a konyhában, de ha másodszorra is odamész kérni szinte biztos, hogy adni fog.";
}
document.getElementById("elso").addEventListener("mouseout",fgv_12);
function fgv_12(){
    document.getElementById("elso").innerHTML="Jó tanács!";
}

document.getElementById("masodik").addEventListener("mouseover",fgv_2);
function fgv_2(){
    document.getElementById("masodik").innerHTML="azaz tócsi, lapcsánka, beré, pityóka fasírt, rösztike, picskedli, recsege, krumpliprósza, gaspi, hadi rántotta";
}
document.getElementById("masodik").addEventListener("mouseout",fgv_22);
function fgv_22(){
    document.getElementById("masodik").innerHTML="Tócsni,";
}