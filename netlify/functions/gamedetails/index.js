require('dotenv').config();
const axios = require('axios');

exports.handler = async function (event, context) {
  const gameID = event.queryStringParameters.game_id;

  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameID}.json?&key=${process.env.REACT_APP_API_KEY}`,
    );

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response.data),
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
