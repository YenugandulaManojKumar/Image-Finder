
let form=document.querySelector("form")
let input=document.getElementById("image_input")
let apiKey="pwOsMq8y3wTKiB8SbLaWaozJu8yQDSMazFBb1FZZ3WA"
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let imageToBeSearched=input.value
    let fetchData=async()=>{
        let data=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${imageToBeSearched}&client_id=${apiKey}`)
        let tempData=await data.json()
        // console.log(tempData);
        let finalData=tempData.results
        // console.log(finalData);
        let image_container=document.getElementById("image_container")
        image_container.innerHTML=``
        finalData.forEach((Ele)=>{
            let finalImagePath=Ele.urls.small
            image_container.innerHTML+=`
            <img src=${finalImagePath} class='finalImage'>
            `
        })
    

    }
    fetchData()
})