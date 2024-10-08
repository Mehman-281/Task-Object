// DOM - Document Object Mode  javascript uzerinden html mudaxile etmek

// const h1 = document.querySelector('h1')
// h1.innerHTML = 'CS305 Programming'

// const box = document.querySelector('.box')
// const child = document.querySelector('.child')
// // const p = document.createElement('p')
// child.innerText = "<p>Happy Attack</b>"
// child2.innerHTML = "<p>Happy Attack</b>"
// box.append(p)


// API ///// Application programming interface
// fetch(a)


// const API_URL = 'https://jsonplaceholder.typicode.com/users'

// const container = document.querySelector('.container')

// async function getAllUsersData() {
//     const response = await fetch(API_URL)
//     const data = await response.json()
//     container.innerHTML = ''
//     data.forEach((item) => {
//         const h3 = document.createElement('h3')
//         const p = document.createElement('p')
//     })
// }





/////////////////
const API_URL = 'https://jsonplaceholder.typicode.com/users'

const container = document.querySelector('.container')

async function getAllUsersData() {
    const response = await fetch(API_URL)
    const data = await response.json()
    container.innerHTML = ''
    data.forEach((item) => {
        const div = document.createElement('div')
        div.className = 'box'
        div.innerHTML = `
        <h5>${item.id}</h5>
        <h3>Name: ${item.name}</h3>
        <p>Phone: ${item.phone}</p>
        <h3>Email: ${item.email}</p>
        <h3>street: ${item.address.street}</p>
        <h3>city: ${item.address.city}</p>
        <h3>city: ${item.company.name}</p>
        `
        container.appendChild(div)
    })
}

getAllUsersData()

//email, street, city,company name
 
//404 not found, 
// 400 bad request,
// 500 server eror,
// 501 geteway eror, 
// 505 server, 
// 200 succes, 