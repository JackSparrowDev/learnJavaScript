var botao = document.querySelector('#adicionar-paciente');
botao.addEventListener('click',function(event){
    event.preventDefault();

    // 1º capturar dados digitados no formulário
    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // 2º criar novo paciente - tr e td's
    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // 3º popular as td's com os dados capturados do formulário
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    if((peso > 300 || peso <=0) || (altura > 3 || altura <= 0.1)){
        imcTd.textContent = 'Medidas inválidas';
        // ***** adiciona uma classe à lista de classes já existentes no html
        pacienteTr.classList.add('medida-invalida');
    }else{
        var imc = calculaImc(peso,altura);
        imcTd.textContent = imc;
    }

    // 4º inserir as td's na tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // 5º inserir a tr na tabela - tbody
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
});
