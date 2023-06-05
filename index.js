// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const cats_2 = [...cats, name];
    return cats_2
}

function prependCat(name){
    const cats_3 = [name, ...cats];
    return cats_3
}

function removeLastCat(){
    const cats_4 = cats.slice(0,-1);
    return cats_4
}

function removeFirstCat(){
    const cats_5 = cats.slice(1);
    return cats_5
}