
const calcular  = document.getElementById('calcular');




function imc(){
    const nome  = document.getElementById('nome').value;
    const altura  = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value;
    const resultado  = document.getElementById('resultado');

 if(nome.value!== '' && altura !== '' && peso !== ''){
    const valorIMC  = (peso/(altura*altura)).toFixed(2);
   resultado.textContent= valorIMC;

    let clasificacao= "";
    
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

   if (valorIMC < 18.5){
     clasificacao='ABAIXO DO PESO';
   }else if(valorIMC >= 18.5 && valorIMC < 25){
     clasificacao ='PESO NORMAL';
   }else if (valorIMC >= 25 && valorIMC <30){
     clasificacao='ACIMA DO PESO';
  } else if (valorIMC>= 30 && valorIMC < 40){
       clasificacao='OBESO';
   }else{
      clasificacao='OBSIDADE GRAVE';
   }




 


} else {
      alert("preencha tudo ,por favor ") ;   
 
}

}
calcular.addEventListener('click', imc);
