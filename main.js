const form = document.getElementById('register-form')
const nome = document.getElementById('input-name')
const numero = document.getElementById('input-number')
const tipo = document.getElementById('contact-type')
const nomes = []
const telefones = []






form.addEventListener('submit', (e) => {
  e.preventDefault()

  let tr = addContact()
  attTable(tr)
  addDeleteFunction()
})


numero.addEventListener('keydown', (e) => {
  e.preventDefault()
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  
  if (e.key == 'Backspace') {
    numero.value = numero.value.slice(0, -1)
  } else if (numero.value.length >= 11) {
    return
  } else if (numbers.includes(e.key)) {
    numero.value += e.key
  } else {
    return
  }
})



function addContact() {
  let tr = document.createElement('tr')

  if (nomes.includes(nome.value)) {
    alert('Contato já cadastrado')
  } else if (telefones.includes(numero.value)) {
    alert('Número já cadastrado')
  } else if (numero.value.length != 11) {
    alert ('Número de telefone incompleto')
  } else {
    
    nomes.push(nome.value)
    telefones.push(numero.value)


    let tableRows = `
    <td>${nome.value}</td>
    <td>${numero.value}</td>
    <td>${tipo.value}</td>
    <td><img src="./images/x-icon.png" alt="Botão com X vermelho" class="delete-button" name="delete-button"></td>`

    tr.innerHTML = tableRows
  }
  form.reset()

  return tr
}



function attTable(tr) {
  const tableBody = document.querySelector('tbody')
  tableBody.appendChild(tr)
}



function addDeleteFunction() {
  const deleteButtons = document.getElementsByName('delete-button')

  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const thisRow = e.target.parentNode.parentNode
      
      thisRow.remove()
    })
  })
}