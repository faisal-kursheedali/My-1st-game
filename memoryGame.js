document.addEventListener("DOMContentLoaded",()=>{
    const cardArray=[
        {
            name:"baby",
            image:"png/anger.png"
        },
        {
            name:"baby",
            image:"png/anger.png"
        },
        {
            name:"apple",
            image:"png/apple.png"
        },
        {
            name:"apple",
            image:"png/apple.png"
        },
        {
            name:"armchair",
            image:"png/armchair.png"
        },
        {
            name:"armchair",
            image:"png/armchair.png"
        },
        {
            name:"camera",
            image:"png/camera.png"
        },
        {
            name:"camera",
            image:"png/camera.png"
        },
        {
            name:"food-delivary",
            image:"png/food-delivery.png"
        },
        {
            name:"food-delivary",
            image:"png/food-delivery.png"
        },
        {
            name:"painting",
            image:"png/painting.png"
        },
        {
            name:"painting",
            image:"png/painting.png"
        },
    ];
    const grid = document.querySelector(".grid");
    const showResult = document.querySelector("#result");
    const messageBox = document.querySelector(".message");
    var cardChosen=[];
    var cardChosedId=[];
    var cardWon=[];
    cardArray.sort(()=>0.5- Math.random());
    function createBrd(){
        for (i=0;i<cardArray.length;i++){
            var cardSpace=document.createElement("img");
            cardSpace.setAttribute("src","png/question-mark.png");
            cardSpace.setAttribute("data-id",i);
            cardSpace.setAttribute("style","height:100px");
            cardSpace.setAttribute("style","width:100px");            cardSpace.addEventListener("click",cardFliped);
            grid.appendChild(cardSpace);
        }
    }
    function cardFliped(){
        var cardId=this.getAttribute("data-id");
        cardChosen.push(cardArray[cardId].name);
        cardChosedId.push(cardId);
        this.setAttribute("src",cardArray[cardId].image);
        if(cardChosen.length==2){
            setTimeout(cardMatching,500);
        }

    }
    function cardMatching(){
        var cards=document.querySelectorAll('img');
        const optionOneId=cardChosedId[0];
        const optionTwoId=cardChosedId[1];
        if(optionOneId===optionTwoId){
            messageBox.textContent=" Select two different cards";
            cards[optionOneId].setAttribute("src","png/question-mark.png");
            cards[optionTwoId].setAttribute("src","png/question-mark.png");
        }
        else if(cardChosen[0]===cardChosen[1]){
            messageBox.textContent=" Wow you got it right ";
            cards[optionOneId].setAttribute("src","png/blank.png");
            cards[optionTwoId].setAttribute("src","png/blank.png");
            cardWon.push(cardChosen);
        } else{
            messageBox.textContent=" sorry try gain";
            cards[optionOneId].setAttribute("src","png/question-mark.png");
            cards[optionTwoId].setAttribute("src","png/question-mark.png");
        }
        cardChosedId=[];
        cardChosen=[];
        showResult.textContent="Your score : "+cardWon.length+"/6";
        if(cardWon.length==cardArray.length/2){
            messageBox.innerHTML=" congradulation You found them all, " +`<br>Reload the page to PLAY AGAIN !!!!!`
            showResult.textContent="Your score : "+cardWon.length+"/6";
        }
        
        


    }


    createBrd();

});