var div = document.getElementById("resp");

function gerar_media(){

    let nota_1 = parseInt (document.getElementById ('nota_1').value);
    let nota_2 = parseInt (document.getElementById('nota_2').value);
    let nota_3 = parseInt (document.getElementById('nota_3').value);
   
   
    if ((nota_1 + nota_2 + nota_3)/3 >= 6){
        div.innerHTML = `Parabéns! Você foi aprovado! ${(nota_1 + nota_2 + nota_3)/3}`;
    }else{
        div.innerHTML = `Você não atingiu a média. Continue estudando! ${(nota_1 + nota_2 + nota_3)/3}`;
    }
}
