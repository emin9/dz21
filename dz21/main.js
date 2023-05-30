const cities = [
 { name :'Москва',
   population : 12506468
 },
 { name :'Санкт-Петербург',
 population : 1612833
 },
 { name :'Калининград',
 population : 482443
 },
 { name :'Калуга',
 population : 336726
}

]

const cities2 = cities.unshift({
    name : 'моя луна',
    population : 88
})

const cities3 = cities.push({
    name : 'Грозный',
    population : 200000
})

console.log(cities)

const cities4 = cities.filter(item => {
    if(item.population > 1000000){
        return true
    }
})
console.log(cities4)

const cities5 = cities.map(item => {
    return item.population * 1.5
})

console.log(cities5)

const cities6 = cities5.reduce((prev,item) => {
    return prev + item
},0)

console.log(cities6)