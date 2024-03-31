let hideLocation = ""

function hide (hideLocation){
   let u = hideLocation  // local variable to store the location 
    return function seek(){
        return u;

    }

}
 let startGame = hide("soweto"); // we re creating a closure here 
console.log(startGame());  // output soweto