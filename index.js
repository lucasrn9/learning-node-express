// fetch('http://localhost:3333/users/2',{
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         id: 5,
//         name: 'lucas',
//          age: 22,
//          email: 'lucas@gmail.com'
//     })
// }).then(res=>res.json()).then(data=>console.log(data))

fetch('http://localhost:3333/movies/2',{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    genre: 'per',
    name: 'testing'
    })
}).then(res=>res.json()).then(data=>console.log(data))