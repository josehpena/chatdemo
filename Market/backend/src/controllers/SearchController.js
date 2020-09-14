const Users = require('../models/User');
const Products = require('../models/utils/ProductSchema');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const users = await Users.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json({ users });
  },

  async productSearch(request, response) {
    const { latitude, longitude, product, maxDistance, for_sale } = request.query;

    if (for_sale == true) {
      const products = await Products.find({
        name: {
          $in: product
        },
        for_sale: true,
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: maxDistance,
          },
        },

      })
    }
    else if (for_sale == false) {
      const products = await Products.find({
        name: {
          $in: product
        },
        for_sale: false,
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: maxDistance,
          },
        },
      })
    }

    return response.json({ products })
  }
}