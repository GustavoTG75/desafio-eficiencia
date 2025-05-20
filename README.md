# Desafio Técnico - Eficiência da Máquina

Este projeto consulta a temperatura atual da cidade de **Patos de Minas** usando a API do OpenWeather, calcula a **eficiência de uma máquina** com base nessa temperatura e exibe os dados em **um gráfico interativo atualizado a cada 30 segundos**.

## 🔧 Funcionalidades

- Consulta de temperatura via API externa (OpenWeather)
- Cálculo automático da eficiência da máquina
- Registro dos dados em um banco de dados PostgreeSQL
- Visualização gráfica com Chart.js
- Atualização automática a cada 30 segundos

---

## 🧱 Banco de Dados

Certifique-se de ter o PostgreSQL rodando e crie a tabela com o seguinte comando SQL:

```sql
CREATE TABLE registros (
    id SERIAL PRIMARY KEY,
    data_hora TIMESTAMP NOT NULL,
    temperatura DECIMAL(5,2) NOT NULL,
    eficiencia DECIMAL(5,2) NOT NULL
);
```

## 🚀 Como rodar o projeto

### 📦 Backend (Node.js + Express)

1. Acesse a pasta `backend/`:

```bash
cd backend
npm install
```

2. Crie um arquivo .env dentro da pasta backend/ com as suas configurações:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_aqui
DB_NAME=postgres
OPENWEATHER_API_KEY=sua_chave_api
CITY=Patos de Minas
```

3. Inicie o servidor:

```bash
node index.js
```

O backend estará rodando em: http://localhost:3000

### 💻 Frontend

1. Acesse a pasta frontend/

2. Abra o arquivo index.html no navegador

A página mostrará o gráfico com os dados da máquina e será atualizada automaticamente a cada 30 segundos.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Chart.js
- HTML5 + CSS3 + JavaScript

## 🙋‍♂️ Autor

Gustavo Teixeira Gomes
Desenvolvedor Júnior
github.com/GustavoTG75

## ✅ Conclusão

Este projeto demonstra habilidades práticas com backend (Node.js + PostgreSQL), integração com APIs externas e visualização de dados em tempo real com frontend puro.
Tudo isso com foco em simplicidade, organização e clareza - pronto para ser usado e avaliado com facilidade.