var peopleRaw = localStorage.getItem('people')
if(peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else {
    var people = [];
}
function desenhaTabela () {
    currentLines = [...document.querySelectorAll('table.Lista .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    });

    for (person in people) {
        document.querySelector('table.Lista').innerHTML += `
        <tr class="dinamic-content"style="background-color: ${ ((person % 2 == 0) ? '#fff' : '#eee' )}", color: '#000'>
            <td>
                ${ people[person].name }
            </td>
            <td>
                ${ people[person].tel }
            </td>
            <td>
                ${ (people[person].xp ? '<strong style="color:green">Sim </strong>' : '<strong style="color:red">Não</strong>' ) }
            </td>
            <td>
                <button onclick="deleteUser(${person})"> Excluir </button>
                <a href="./src/form.html?person=${person}">editar</a>
            </td>
        </tr>`
    }
}

function deleteUser(p) {
    people.splice(p,1);
    desenhaTabela();
    localStorage.setItem('people', JSON.stringify(people))
}

desenhaTabela()