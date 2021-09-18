const btn = document.querySelector(".btn");
let text = document.querySelector(".text");



btn.addEventListener('click',()=>{
  //delfin haqida malumot
  const delfin = document.querySelector("select").value;

  let tekshir = delfin=== "ha" ? text.innerHTML = `Sizning holatingiz : Trik `  : sTime()

  function sTime() {
    //aculani kemagacha masofasi
  function aculaS() {
    const x = parseInt(document.querySelector(".aculaS").value);
    const y = parseInt(document.querySelector(".kemaS").value);
    return x+y
  }
  const aculs = aculaS()
  //aculla tezliki
  const aculaV = parseInt(document.querySelector(".aculaV").value);
  //kemagacha masofa
  const kemaS =  parseInt(document.querySelector(".kemaS").value);
  // sizning tezlikingiz
  const myV =  parseInt(document.querySelector(".myV").value);


  // aculani kemagacha boradigan vahti
  const aculaT = aculs/aculaV
  console.log(aculaT)

  // sizning kemagacha boradigan vahtingiz
  const myT =kemaS/myV;
  console.log(myT)

  // tirik yoki o'lik

  const top = aculaT - myT

  let result = top>= 0 ? "Trik":"Halok bo'ldi"
  let text = document.querySelector(".text");
  text.innerHTML = `Sizning holatingiz : ${result}`
  // console.log(result)

  }


})