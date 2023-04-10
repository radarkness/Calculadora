function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma(+)\n 2 - subtração(-)\n 3 - multiplicação(*)\n 4 - divisão(/)\n 5 - divisão_inteira(%)\n 6 - potenciação(**)'));
    
    if (operacao > 6 || operacao <= 0) {
        alert('Opção invalida');
        calculadora();
    }
    
    let n1 = Number(prompt('insira um valor:'));
    let n2 = Number(prompt('insira outro valor:'));
    let resultado;
    
    if (operacao == 1) {
        soma(n1,n2);
    }    else if (operacao == 2) {
         subtracao(n1,n2);
    }    else if (operacao == 3) {
         multiplicacao(n1,n2);
    }    else if (operacao == 4) {
         divisao(n1,n2);
    }    else if (operacao == 5) {
         divisaoInteira(n1,n2);
    }    else if (operacao == 6) {
         potenciacao(n1,n2);
    }        

    while (true) {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - sim \n 2 - não')
   
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert ('muito obrigado, até a próxima');
            break;
        } else {
            alert ('Digite uma opção valida');         
        }
    }
}

function soma(n1,n2) {
    let resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);  
}

function subtracao(n1,n2) {
    let resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}

function multiplicacao(n1,n2) {
    let resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}

function divisao(n1,n2) {
    let resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}

function divisaoInteira(n1,n2) {
    let resultado = n1 % n2;
    alert(`O Resultado entre ${n1} e ${n2} é igual a ${resultado}`);
}

function potenciacao(n1,n2) {
    let resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
}

calculadora();