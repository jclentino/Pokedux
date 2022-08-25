const updateAge = (userInfo) => {
    userInfo.age = userInfo.age + 1 
    return userInfo
}

// Inmutable: Object.assing 
// const updateAge = (userInfo) => {
//     return Object.assign({}, userInfo, { age: userInfo.age + 1 })
// }


// Inmutable: Spread Operator 
// const updateAge = (userInfo) => {
//     return { ...userInfo, age: userInfo.age + 1 }
// }


const userInfo = {
    name: 'juan',
    age: 25,
    email: 'jl@gmail.com'
}

console.log('Before userInfo: ', userInfo)

const updateUserInfo = updateAge(userInfo)
console.log('After userInfo: ',userInfo)
console.log('updateUserInfo: ',updateUserInfo)



const obj = {name: 'juan', age: 25, pleasures: { color: 'black' } }
const obj2 = { ...obj }

obj.pleasures.color = 'white'

console.log(obj) // {name: 'juan', age: 25, pleasures: {color: 'white'}}
console.log(obj2) // {name: 'juan', age: 25, pleasures: {color: 'white'}}
console.log(obj.belongings === obj2.belongings) // true 


