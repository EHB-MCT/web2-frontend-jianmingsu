

async function getData(){
    await fetch('https://private-anon-77663e764b-carsapi1.apiary-mock.com/manufacturers')
    .then(resp => resp.json())
    .then (data => {
        console.log(data)
    })
}
getData()

// function appendData(data){
//     const brandList = document.getElementById("myData");
//     brandList.classList.add('brand')
//     for (let i = 0; i < data.length; i++) {
//         let div = document.createElement("div");
//         brandList.innerHTML = `<h2>${data[i].name}</h2>`
//         brandList.appendChild(div);
        
//     }
// }

