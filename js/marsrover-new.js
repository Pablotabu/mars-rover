let hola = [1,2]
var target=[]

target.push(hola);
var copia =[hola[0],hola[1]]
hola[0]=100
target.push(copia)


console.log(target[0])
console.log(target[1])