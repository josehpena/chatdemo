const axios = require('axios');
const Users = require('../models/User');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(request, response) {
    const users = await Users.find();

    return response.json(users);
  },

  async store(request, response) {
    const { username, name, email, password, latitude, longitude } = request.body;

    let user = await Users.findOne({ email });

    if (!user) {

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      user = await Users.create({
        username,
        name,
        email,
        password,
        location,
      })

      // Filtrar as conexões que estão há no máximo 10km de distância
      // e que o novo dev tenha pelo menos uma das tecnologias filtradas
      /*
      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      )

      sendMessage(sendSocketMessageTo, 'new-dev', user);
      */
    }

    return response.json(user);
  },
};