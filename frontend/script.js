let meuGrafico = null;

async function atualizarDados() {
    await fetch('http://localhost:3000/consulta');

    const historico = await fetch('http://localhost:3000/historico');
    const dados = await historico.json();

    const labels = dados.map(item => new Date(item.data_hora).toLocaleTimeString());
    const temperaturas = dados.map(item => item.temperatura);
    const eficiencias = dados.map(item => item.eficiencia);

    document.getElementById("info").innerText = `
    Última consulta: ${labels.at(-1)}
    Temperatura: ${temperaturas.at(-1)} °C
    Eficiência: ${eficiencias.at(-1)} %
    `;

    // Destruir o gráfico anterior antes de criar um novo
    if (meuGrafico) {
        meuGrafico.destroy();
    }

    meuGrafico = new Chart(document.getElementById("grafico"), {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Temperatura (°C)',
                    data: temperaturas,
                    borderColor: 'red',
                    fill: false
                },
                {
                    label: 'Eficiência (%)',
                    data: eficiencias,
                    borderColor: 'blue',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            animation: false
        }
    });
}

atualizarDados();
setInterval(atualizarDados, 30000);