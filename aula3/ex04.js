// Selecione o formulário e os elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
console.log("JavaScript Carregado!")

// Adicione um evento de envio ao formulário
frm.addEventListener("submit", (e) => {
    // Previna o comportamento padrão do formulário
    e.preventDefault()

    // Obtenha os valores dos campos do formulário
    const nome = frm.inNome.value
    const nota1 = parseFloat(frm.inNota1.value)
    const nota2 = parseFloat(frm.inNota2.value)

    // Calcule a média das notas
    const media = (nota1 + nota2) / 2

    // Exiba a média das notas
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    // Verifique se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        // Exiba uma mensagem de aprovação
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        // Defina a cor da mensagem como azul
        resp2.style.color = "blue";
    } else {
        // Exiba uma mensagem de reprovação
        resp2.innerText = `Ops ${nome}... você foi reprovado(a)`
        // Defina a cor da mensagem como vermelha
        resp2.style.color = "red"
    }
})