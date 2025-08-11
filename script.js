let display = document.getElementById("display");
function startApp() 
{
  document.getElementById("welcomeScreen").style.display = "none";
  document.querySelector(".calculator").style.display = "block";
}
function append(value) 
{
  if (display.innerText === "0") display.innerText = value;
  else display.innerText += value;
}
function clearDisplay() 
{
  display.innerText = "0";
}
function deleteLast() 
{
  let text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}
function calculate() 
{
  try 
  {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } 
  catch 
  {
    display.innerText = "Error";
  }
}