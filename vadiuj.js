let fruits = ["apple", "banana", "pear", "grape"]

/*
<tr>
<td>apple</td>
<td> <button type="button" class="btn btn-sm btn-danger" >Delete</button> </td>
</tr>
*/

let rows = ""


for (let i = 0; i < fruits.length; i++) {
    //console.log(fruits[i])
    //let row = `<tr><td>` + fruits[i] + `</td><td><button type="button" class="btn btn-sm btn-danger" >Delete</button></td> </tr>`
    //let row = `<tr><td>${fruits[i]}</td><td><button type="button" class="btn btn-sm btn-danger" >Delete</button></td> </tr>`
    rows += `<tr><td>${fruits[i]}</td><td><button type="button" class="btn btn-sm btn-danger" onclick="btnDeleteRow(this)">Delete</button><button type="button" class="btn btn-sm btn-primary" onclick="btnChangeRow(this)">Change</button></td> </tr>`
}

document.querySelector("tbody").innerHTML = rows

function btnDeleteRow(btnElement) {
    if (confirm("Are you sure?")) {
        btnElement.closest('tr').remove()
    }
}

// új sor beszúrása a gomb lenyomásval

function btnAddFruit() {
    let newFruit = document.querySelector("input[name='newFruit']")
    document.querySelector("tbody").innerHTML += `<tr><td>${newFruit.value}</td><td><button type="button" class="btn btn-sm btn-danger" onclick="btnDeleteRow(this)">Delete</button><button type="button" class="btn btn-sm btn-primary" onclick="btnChangeRow(this)">Change</button></td> </tr>`
}

// Gyümölcscsere

function btnChangeRow(btnChange) {
    let addFruit = prompt("Change fruit", btnChange.parentElement.parentElement.firstChild.innerHTML)
    if (addFruit !=null) {
        btnChange.parentElement.parentElement.firstChild.innerHTML = addFruit;
    }
}