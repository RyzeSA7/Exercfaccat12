let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"))

// Verificação e cálculo do custo
let custoPorMaca
if (quantidade < 12) {
    custoPorMaca = 1.30 // se for Menos de uma dúzia
} else {
    custoPorMaca = 1.00
}

// Cálculo do custo final
let custoTotal = quantidade * custoPorMaca

// Exibição do custo total
alert(`O custo total da compra é: R$ ${custoTotal.toFixed(2)}`)
