if (true){
    const username = "Treesha"
    if (username === "Treesha"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); //wont be executed as its outside the scope
}
//console.log(username); // also wont be executed as its outside the scope
                       // child function can take variables from the parent function but parent cant take t from child.

// ************************************************************//

function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){
    return num+2
}
addTwo (5)