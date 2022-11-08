window.onload = fetchCountry()
async function fetchCountry() {
    const result = await fetch('http://localhost/api/countries', {
        method: 'GET',
    }).then((res) => res.json())
    globalCountry = result.country_list
    let dropdown = document.getElementById('countries')
    for (var i = 0; i < globalCountry.length; i++) {
        let option = `<option value = "${globalCountry[i]}">`
        dropdown.innerHTML += option
    }
}
// const form = document.getElementById('dataForm')
// form.addEventListener('submit', submit)

// async function submit(event) {
//     event.preventDefault()
//     const name = document.getElementById('name').value
//     const date = document.getElementById('date').value
//     const country = document.getElementById('country').value
//     const file = document.getElementById('file')

// let timestamp = 5
// // file = 1
//     const result = await fetch('http://localhost/api/upload', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name,
//             date,
//             country,
//             file,timestamp
//         })
//     }).then((res) => res.json())

//     if (result.response) {
//         // everythign went fine
//         alert(result.response)
//     }
//     if (result.error) {
//         // everythign went fine
//         alert(result.error)
//     }   
// }