window.onload = getVideos()
async function getVideos() {
    const result = await fetch(`https://resumeuploadbyakshat.herokuapp.com/api/download`, {
        method: "get",
    }).then((res) => res.json());
    let resultLength = Object.keys(result.response).length
    for (i = 0; i < resultLength; i++) {

        document.getElementById('allresumelist').innerHTML += `<a href="http://https://resumeuploadbyakshat.herokuapp.com/files/${result.response[i]}">` + '<b> '+i+' </b>'  + result.response[i] + '</a>' + '<br>'
    }
}

document.getElementById('asc').addEventListener('click', ()=>{

})
document.getElementById('dsc').addEventListener('click', ()=>{
    
})