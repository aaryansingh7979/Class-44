function setup(){
  createCanvas(windowWidth, windowHeight);
  background(1)
  push();
  fill('white')
  textSize(50)
  textStyle(BOLD)
  text("Test your general knowledge",windowWidth/2-320,100)
  pop();
  
  push();
  fill('white')
  textSize(30)
  text("Enter your name: ",780,718.4)
  pop();

  textInput = createInput("")
  textInput.style('color','black')
  textInput.position(windowWidth/2,700,200,200)
  

  
  submitButton = createButton("Submit")
  submitButton.style('background-color','orange')
  submitButton.style('font-size','30px')
  submitButton.position(windowWidth/2+15,735,100,100)

}