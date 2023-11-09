/**
 * APP GET
 * @author Professor José de Assis
 * https://joseassis.com.br
 */

let peso, altura, idade, imc, fcm, tmb

function calcular() {
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value
    if (frmIMC.txtIdade.value === "") {
        alert("Preencha a idade")
        frmIMC.txtIdade.focus()
    } else if (frmIMC.txtPeso.value === "") {
        alert("Preencha o peso")
        frmIMC.txtPeso.focus()
    } else if (frmIMC.txtAltura.value === "") {
        alert("Preencha a altura")
        frmIMC.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo")
    } else if (frmIMC.nivel.value === "") {
        alert("Selecione o nível de atividade")
        frmIMC.nivel.focus()
    } else {
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = (`IMC: ${imc.toFixed(2)}`)
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "icons/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "icons/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "icons/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade grau I"
            document.getElementById("grafico").src = "icons/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade grau II"
            document.getElementById("grafico").src = "icons/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade extrema"
            document.getElementById("grafico").src = "icons/obesidadeExtrema.png"
        }
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm
        let select = document.getElementById("atividade")
        let opcaoValor = Number(select.options[select.selectedIndex].value)
        if (document.getElementById("m").checked === true) {
            tmb = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * opcaoValor
        }
        if (document.getElementById("f").checked === true) {
            tmb = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * opcaoValor
        }
        document.getElementById("calorias").innerHTML = tmb.toFixed(2)
    }
}

function limpar() {
    document.getElementById("imc").innerHTML = "IMC"
    document.getElementById("status").innerHTML = "status"
    document.getElementById("freq").innerHTML = "FCM"
    document.getElementById("grafico").src = "icons/reset.png"
    document.getElementById("calorias").innerHTML = "calorias"
}