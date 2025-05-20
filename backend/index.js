const express = require('express');
const axios = require('axios');
const pool = require('./db');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;

// Cálculo da eficiência
function calcularEficiencia(temp) {
    if (temp >= 28) return 100;
    if (temp <= 24) return 75;
    return 75 + ((temp - 24) / 4) * 25;
}

// Endpoint para consulta e gravação
app.get('/consulta', async (req, res) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${process.env.CITY}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
        const response = await axios.get(url);
        const temperatura = response.data.main.temp;
        const eficiencia = calcularEficiencia(temperatura);
        const dataHora = new Date();

        await pool.query(
            'INSERT INTO registros (data_hora, temperatura, eficiencia) VALUES ($1, $2, $3)',
            [dataHora, temperatura, eficiencia]
        );

        res.json({ dataHora, temperatura, eficiencia });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar temperatura');
    }
});

// Endpoint histórico
app.get('/historico', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM registros ORDER BY data_hora ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar histórico');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});