let text = document.querySelector(".container #text")


function bold (){
  if (text.style.fontWeight === "bold")
    text.style.fontWeight = "400"
  else
    text.style.fontWeight = "bold"
}

function italic (){
  if (text.style.fontStyle === "italic")
    text.style.fontStyle = "normal"
  else
    text.style.fontStyle = "italic"
}



function alignLeft (){
  text.style.textAlign = "left"
}

function alignCenter (){
  text.style.textAlign = "center"
}

function alignRight (){
  text.style.textAlign = "right"
}

function upperCase (){
  text.style.textTransform = "uppercase"
}

function lowerCase (){
  text.style.textTransform = "lowercase"
}

function capitalize (){
  text.style.textTransform = "capitalize"
}


function clean(){
  text.innerHTML = ""
}

function color(colorObj){
  text.style.color = colorObj.value
}

function bgColor(bgColorObj){
  text.style.backgroundColor = bgColorObj.value
}

function fontSize(fontSizeObj){
  text.style.fontSize = `${fontSizeObj.value}px`
}

function fontFamily(fontFamilyObj){
  text.style.fontFamily = fontFamilyObj.value;
}
