window.onload = function(){
  var campoNombre = document.querySelector('input[name=nombre]')
  var campoEmail = document.querySelector('input[name=email]')
  var campoPaises = document.querySelector('select[name=paises]')
  var elFormulario = document.querySelector('.theForm')

  fetch("https://dev.digitalhouse.com/api/getProvincias")
    .then(function (response){
      return response.json();
    })
    .then(function(paises){
      console.log(paises.data[0].state)
      for (pais of paises.data){
        let option = document.createElement('option');
        let optionText = document.createTextNode(pais.state);
        option.append(optionText)
        campoPaises.append(option)
      }
    })
    .catch(function(error){
      console.log(error);;
    })
}
