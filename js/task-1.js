
const task1 = () => {

    console.log(`Number of categories: ${document.querySelectorAll("li.item").length}`)

    document.querySelectorAll("li.item").forEach(el => {
        console.dir("Category: " + el.querySelector('h2').textContent)
        console.log("Elements: " + el.querySelectorAll('li').length)
    })
}

task1()