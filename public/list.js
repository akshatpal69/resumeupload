document.getElementById('listResume').addEventListener('click', getResume)
let resultGlobal
async function getResume() {
    const host = 'http://localhost'
    const result = await fetch(`${host}/api/download`, {
        method: "get",
    }).then((res) => res.json());
    let resultLength = Object.keys(result.response).length
    console.log(result.response)
    console.log(result.userData)
    for (i = 0; i < resultLength; i++) {
        // document.getElementById('allresumelist').innerHTML = ''
        document.getElementById('allresumelist').innerHTML +='<div>'+
            `<a href="${host}/files/${result.response[i]}">` + '<b> ' + i +
            ' </b>' + result.response[i] + '</a>' + result.userData[i].name + " " + result.userData[i].timestamp + '<br>' +'<button>delete</button>'+ '</div>'

    }
    resultGlobal = result
}

document.getElementById('asc').addEventListener('click', () => {
    let resultLength = Object.keys(resultGlobal.response).length
    console.log(typeof resultGlobal.response)
    // for (i = 0; i < resultLength; i++) {

    //     document.getElementById('allresumelist').innerHTML +=
    //         `<a href="${host}/files/${resultGlobal.response[i]}">` + '<b> ' + i +
    //         ' </b>' + resultGlobal.response[i] + '</a>' + resultGlobal.userData[i].name + " " + resultGlobal.userData[i].timestamp + '<br>'
    // }
})

document.getElementById('dsc').addEventListener('click', () => {
    let resultLength = Object.keys(resultGlobal.response).length
    // for (i = 0; i < resultLength; i++) {

    //     document.getElementById('allresumelist').innerHTML +=
    //         `<a href="${host}/files/${resultGlobal.response[i]}">` + '<b> ' + i +
    //         ' </b>' + resultGlobal.response[i] + '</a>' + resultGlobal.userData[i].name + " " + resultGlobal.userData[i].timestamp + '<br>'
    // }
})