require('dotenv').config();
const axios = require('axios');

exports.handler = async function (event, context) {
  const gameName = event.queryStringParameters.game_name;
  const pageSize = event.queryStringParameters.page_size;

  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=${pageSize}`,
    );

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response.data.results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Error al obtener los datos de la API externa',
      }),
    };
  }
};
