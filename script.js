let codesSection = document.querySelector('.codes ul')
let a = 1
let b = 1
for (const keyA in codeObject) {
    codesSection.innerHTML += `<li><h3>ax-${keyA}</h3></li> 
    <li class="c${a}"><ul></ul></li>`
    a++
    let li = document.querySelector(`.c${b} ul`)
    for (const [key, value] of Object.entries(codeObject[keyA])) {
        li.innerHTML += `<li><b>${key} </b>-> ${value}</li>`
    }
    b++
}

let copyBtn = document.querySelectorAll('.copy')
let cdn = '<script src="https://scientechh.github.io/cdn/asix.js"></script>';
let copiedAlert = document.querySelector('.coped')

for (const iterator of copyBtn) {
    iterator.addEventListener('click', function(){
        navigator.clipboard.writeText(cdn);
        copiedAlert.classList.add('active')
        setTimeout(() => {
            copiedAlert.classList.remove('active')
        }, 1500);
    })
}