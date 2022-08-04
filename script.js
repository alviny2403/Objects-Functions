/* 
NEW PROJECT
1. Pick category: movies, shows, anime char, game char
2. Make objects with attributes based on category
    - make sure that you have some funcitonality in one of attributes
3. Take the objeccts and display them on your html page
*/

let keySwitch= document.getElementById("key_switch")
let newDiv, baseH1, newH1, newImg, feedbackBtn, newP

let red= {
    name: "Cherry MX Red",
    actuation: "45g",
    style: "linear",
    image: "images/mxRed.gif",
    feedback: function(){
        if (document.querySelector("h1").innerHTML != ""){
            document.querySelector("h1").remove()
        }
        let newFeedback= document.createElement("h1")
        newFeedback.innerHTML= "This is the best switch!"

        keySwitch.prepend(newFeedback)
    }
}

let blue= {
    name: "Cherry MX Blue",
    actuation: "55g",
    style: "clicky",
    image: "images/mxBlue.gif",
    feedback: function(){
        if (document.querySelector("h1").innerHTML != ""){
            document.querySelector("h1").remove()
        }
        let newFeedback= document.createElement("h1")
        newFeedback.innerHTML= "This is the loud switch!"

        keySwitch.prepend(newFeedback)
    }
}

let brown= {
    name: "Cherry MX Brown",
    actuation: "55g",
    style: "tactile",
    image: "images/mxBrown.gif",
    feedback: function(){
        if (document.querySelector("h1").innerHTML != ""){
            document.querySelector("h1").remove()
        }
        let newFeedback= document.createElement("h1")
        newFeedback.innerHTML= "This is the worst switch!"

        keySwitch.prepend(newFeedback)
    }
}

let switchesArr= [red, blue, brown]

for (let i= 0; i< switchesArr.length; i ++){
    newDiv= document.createElement("div")

    baseH1= document.createElement("h1")

    newH1= document.createElement("h1")
    newH1.innerHTML= switchesArr[i].name

    newImg= document.createElement("img")
    newImg.src= switchesArr[i].image

    feedbackBtn= document.createElement("button")
    feedbackBtn.innerHTML= "view feedback"

    newP= document.createElement("p")
    newP.innerHTML= "This switch is "+ switchesArr[i].style+ ", it has an actuation force of "+ switchesArr[i].actuation+ "."

    newDiv.append(baseH1, newH1, newImg, newP, feedbackBtn)

    feedbackBtn.onclick= switchesArr[i].feedback
    feedbackBtn.onclose= function(){
        if (document.querySelector("h1").innerHTML != ""){
            document.querySelector("h1").innerHTML= ""
        }
    }

    keySwitch.appendChild(newDiv)
}

