const AreaNegocioService = require('../services/AreaNegocioService');
const DepartamentoService = require('../services/DepartamentoService');

async function fetchAreaNegocioItems() {
  try {
    const itemsFromBackend = await AreaNegocioService.getAll();
    return itemsFromBackend;
  } catch (error) {
    throw error;
  }
}

async function fetchDepartamentoItems(selectedAreaNegocio) {
  try {
    const departamentos = await DepartamentoService.getAll(selectedAreaNegocio);
    return departamentos;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchAreaNegocioItems, fetchDepartamentoItems };
