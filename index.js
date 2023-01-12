
let names = new Promise((resolve, reject) => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => resolve(json));
})

let arrname
names.then((data) => arrname = data).then(() => {
    arrname.names.map((value) => {
        let option = document.createElement('option')
        option.text = value.region
        option.value = value.region
        let select = document.getElementById("countries")
        select.appendChild(option)
    })


    let cres
    let gres
    let finalnames
    const cfilter = document.querySelector('.country')
    cfilter.addEventListener('change', (e) => {
        cres = arrname.names.filter((value) => {

            return value.region == e.target.value

        })
        console.log(cres)
    })

    const gfilter = document.querySelector('.Gender')
    gfilter.addEventListener('change', (e) => {
        console.log(cres[0][e.target.value])
        gres = cres[0][e.target.value]
    })
    const inp = document.querySelector('.name')
    inp.addEventListener('keyup', (e) => {
        const tb = document.getElementById('tb')
        if (e.target.value == '') {
            tb.innerHTML = ''
            return
        }
        let result = gres.map((item) => {
            if (item.includes(e.target.value)) {
                return item
            }
        })

        finalnames = result.filter((item) => {
            return item != undefined
        })
        tb.innerText = finalnames
        // console.log(finalnames)

    })


})



