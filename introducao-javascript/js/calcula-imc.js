var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i <= pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    calculaImc(peso,altura);
}

function calculaImc(peso,altura){

    if(((peso > 300)||(peso <=0)) || ((altura > 3)||(altura < 0.1))){
        paciente.querySelector('.info-imc').textContent = 'Verificar medidas!';
        // ***** adiciona uma classe à lista de classes já existentes no html
        paciente.classList.add('medida-invalida');
    }else{
        var imc = (peso/(altura * altura)).toFixed(2);
        paciente.querySelector('.info-imc').textContent = imc;
        return imc;
    }
}
