


async function getAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      
      if (data.slip) {
      document.getElementById("advicenumber").textContent = 'Advice ' + "#" + data.slip.id;  
      document.getElementById("advicequote").textContent = data.slip.advice;
      } else {
        document.getElementById("advicequote").textContent = "Error: Could not fetch advice";
      }
    } catch (error) {
        console.error("Error fetching advice: ", error) 
        document.getElementById("advicequote").textContent = "An error occurred.";    
    }
  }

  document.addEventListener("DOMContentLoaded", getAdvice);

  document.querySelector(".newquote").addEventListener("click", getAdvice);


