const AreaNegocioService = require('../services/AreaNegocioService');

async function fetchAreaNegocioItems() {
  try {
    const itemsFromBackend = await AreaNegocioService.getAll();
    return itemsFromBackend;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchAreaNegocioItems };
