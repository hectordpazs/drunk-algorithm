
const positions=()=> {
  let x = 0;
  let y = 0;
  for (n = 0; n < 10; n++) {
    let random = Math.floor(Math.random() * 100);
    
    if (random >= 0 && random < 25) {y += 1;}
      else if (random >= 25 && random < 50) {y -= 1;} 
      else if (random >= 50 && random < 75) {x += 1;} 
      else if (random >= 75 && random < 100) {x -= 1;}
  }
  return Math.abs(x) + Math.abs(y);
}
const generatePositions = number => {
  if (isNaN(number) || number == 0 || number <0) {
    return {error: 'El número de veces a realizar no se ingreso, es un número, es 0 o menor a 0, intente otra vez'}
  }
  
  let correct = 0;
  let incorrect = 0;
  let tryTimes = Number(number);

  for (let index = 0; index < tryTimes; index++) {
    const result = positions();
    if (result === 2)
      correct++;
    else
      incorrect++;
  }
  const prob = Math.round((((correct / tryTimes) * 100) + Number.EPSILON) * 100) / 100

  return { tryTimes, correct, incorrect, prob };
}

  const btn = document.getElementById('buttonClick');
  const par = document.getElementById('response');

  btn.addEventListener('click',  ()=> {
    const number = prompt('ingrese numero de veces que se ejecutara el algoritmo: ');
    const { tryTimes, correct, incorrect, prob, error } = generatePositions(number || 0);
    if (error) {par.innerHTML = `Error: ${error}`}
    else {
      par.innerHTML = `
      Numero de veces realizado:  ${tryTimes} <br>
      Numero de veces donde se cumplio el objetivo:  ${correct} <br>
      Numero de veces donde fallo el objetivo:  ${incorrect} <br>
      Probabilidad de exito:  ${prob}%
      `;
    }
  })