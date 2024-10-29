

const $ = (id) => document.getElementById(id).value


empID = $('id')
empName = $('name')
ext = $('ext')
email = $('email')
department = $('department')

window.addEventListener('load', () => 
    { const form = document.getElementById('empForm')
        form.addEventListener('submit', (event) => 
            { event.preventDefault()

              const empID = $('id') 
              const empName = $('name')
              const ext = $('ext')
              const email = $('email')
              const department = $('department')  
              console.log(`ID : ${empID}`)
              console.log(`Name : ${empName}`)
              console.log(`ext : ${ext}`)
              console.log(`email : ${email}`)
              console.log(`department : ${department}`)

            })
     });

