let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg=document.querySelector(".msgcontainer");
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0) {
            turn0 = false;
            box.innerText = "O";
        }
        else {
            turn0 = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();
    });
});

let array=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner = () => {
    for(let p of array){
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!==""){
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner!",pos2);
                disablebtn();
                showwinner(pos2);
                
                
            }   
        }
        
    }
}

const showwinner =(winner)=>{
    msg.innerText = `congraulation winner ${winner}! `;
    disablebtn();

};

reset.addEventListener("click",()=>{
    location.reload();
})

const disablebtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}