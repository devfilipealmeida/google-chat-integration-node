const AreaNegocioService = require('../services/AreaNegocioService');
const DepartamentoService = require('../services/DepartamentoService');
const UnidadeService = require('../services/UnidadeService');
const SubcategoriaService = require('../services/SubcategoriaService');

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

async function fetchUnidadeItems(hubList) {
  try {
    const unidades = await UnidadeService.getAll(hubList);
    return unidades;
  } catch (error) {
    throw error;
  }
}

async function fetchSubcategories(selectedCategory) {
  try {
    const unidades = await SubcategoriaService.getAll(selectedCategory);
    return unidades;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchAreaNegocioItems, fetchDepartamentoItems, fetchUnidadeItems, fetchSubcategories };
