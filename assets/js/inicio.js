document.addEventListener('DOMContentLoaded', function () {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const ruaSelect = document.getElementById('rua');
    const form = document.getElementById('enderecoForm');

    estadoSelect.addEventListener('change', function () {
        const estado = estadoSelect.value;
        cidadeSelect.disabled = false;
        ruaSelect.disabled = true;

        if (estado === 'SP') {
            cidadeSelect.innerHTML = '<option value="SaoPaulo">São Paulo</option>';
            ruaSelect.innerHTML = '<option value="MarginalTiete">Marginal Tietê</option>';
        } else if (estado === 'RJ') {
            cidadeSelect.innerHTML = '<option value="RioDeJaneiro">Rio de Janeiro</option>';
            ruaSelect.innerHTML = '<option value="EstradaIbicui">Estrada de Ibicuí</option>';
        } else {
            cidadeSelect.disabled = true;
            ruaSelect.disabled = true;
            cidadeSelect.innerHTML = '<option selected>Escolha a cidade</option>';
            ruaSelect.innerHTML = '<option selected>Escolha a rua</option>';
        }
    });

    cidadeSelect.addEventListener('change', function () {
        ruaSelect.disabled = false;
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const estado = estadoSelect.value;
        const cidade = cidadeSelect.value;
        const rua = ruaSelect.value;
        const visaoAtual = document.getElementById('visaoAtual').checked;

        if (estado && cidade && rua) {
            if (visaoAtual) {
                window.location.href = '../pages/monitorarV.html';
            } else {
                window.location.href = '../pages/monitorar.html';
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
