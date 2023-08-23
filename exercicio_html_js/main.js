const form = document.getElementById('form-tarefa'); // Use aspas ao redor do ID

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a'); // Use aspas ao redor do ID
    const campoB = document.getElementById('campo-b'); // Use aspas ao redor do ID

    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        alert("Mensagem Positiva: O formulário é válido!");
    } else {
        alert("Mensagem Negativa: O formulário não é válido");
    }
});
