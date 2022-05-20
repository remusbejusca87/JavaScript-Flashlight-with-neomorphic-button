/**
 * Event listeners
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */ 
 
 import flashlightObjectArray from "./components/data.js";

 const flashlightList = flashlightObjectArray.map((flashlight) => {
   let flashlightArticle = document.createElement("article");
   flashlightArticle.classList.add("flashlight");
   flashlightArticle.setAttribute("id", flashlight.id);

  
 
   flashlightArticle.innerHTML = `
     <figure class="flashlight__image">
       <img src=${flashlight.image} alt="" loading="lazy" />
     </figure>
     <h1 class="flashlight__name">${flashlight.name}</h1>
     <ul class="flashlight__features">
       <li class="feature flashlight__volume">Size:<span> ${
         flashlight.size
       } inches</span></li>
       <li class="feature flashlight__color">Color:<span> ${
         flashlight.color
       }</span></li>
       <li class="feature flashlight__age">Age:<span> ${flashlight.flashlightAge()} days old</span></li>
       <li class="feature flashlight__lid">Light status: <b> <span>  ${
         flashlight.lidOpen ? "open" : "closed"
       }</span> </b> </li>
     </ul>
     <button class="light-toggle">Open light</button>
   `;
 
   const button = flashlightArticle.querySelector(".light-toggle")
   const status = flashlightArticle.querySelector(".flashlight__lid span")
   const statusColor = flashlightArticle.querySelector(".flashlight__lid ")
   const flashlightImage = flashlightArticle.querySelector('img')
   const flashlightKidImage = flashlightArticle.querySelector("#flashlight02 img")

   
 
   button.addEventListener("click", (event) => {
    //  console.log(event)
     status.innerText === "open" ? status.innerText = "closed" : status.innerText = "open"
     status.innerText === "open" ? button.innerText = "Close Light" : button.innerText = "Open Light"
     status.innerText === "open" ? button.classList.add('light-toggle-other') : button.classList.remove('light-toggle-other')
     status.innerText === "open" ? statusColor.classList.add('flashlight__lid-other') : statusColor.classList.remove('flashlight__lid-other')
     status.innerText === "open" ? flashlightImage.setAttribute("src", '../images/flashlight-on.svg') : flashlightImage.setAttribute('src', '../images/flashlight-off.svg' )
     status.innerText === "open" ? flashlightKidImage.setAttribute("src", '../images/flashlight-on-kid.svg') : flashlightKidImage.setAttribute('src', '../images/flashlight-off-kid.svg' )
    })

   return flashlightArticle;
 });
 
 const main = document.querySelector(".maincontent");
 
 flashlightList.forEach((flashlight) => {
    main.append(flashlight);
 });

 
 