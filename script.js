function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle('light') // comando que substitui o "if else" abaixo, se tiver o light ele tira, se não tiver ele coloca
  
  // pegar a tag img 
  const img = document.querySelector("#profile img")
  
  //substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver o light mode, adicionar imagem light
    img.setAttribute("src", "./assets/Eu.jpeg")
  } else {
    // se tiver sem o light mode, manter imagem original
    img.setAttribute("src", "./assets/Eu.jpeg")
  }


  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */



}