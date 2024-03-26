const AreaNegocioService = require('../services/AreaNegocioService');
const DepartamentoService = require('../services/DepartamentoService');
const UnidadeService = require('../services/UnidadeService');
const SubcategoriaService = require('../services/SubcategoriaService');
const AssuntoService = require('../services/AssuntoService');
const CategoriaService = require('../services/CategoriaService');

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
    const subcategorias = await SubcategoriaService.getAll(selectedCategory);
    return subcategorias;
  } catch (error) {
    throw error;
  }
}

async function fetchAssunto(category, subcategory) {
  try {
    const assuntos = await AssuntoService.getAll(category, subcategory);
    return assuntos;
  } catch (error) {
    throw error;
  }
}

async function fetchCategoria() {
  try {
    const categorias = await CategoriaService.getAll();
    return categorias;
  } catch (error) {
    throw error;
  }
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}


function generateGroup(categoria, subcategoria) {
  if (categoria === "TASY") {
    return "TASY - Analista";
  } else if (categoria === "Rede/E-mail/Microsoft 365") {
    return "Infraestrutura - Service Desk";
  } else if (categoria === "MV") {
    return "MV - Analista";
  } else if (categoria === "Sistema Sênior") {
    return "Sênior - Analista";
  } else if (categoria === "Cadastro") {
    return "SAP - Suprimentos";
  } else if (categoria === "SAP" && subcategoria === "Acesso ao SAP") {
    return "SAP - TI";
  } else if (categoria === "SAP" && subcategoria === "Contabilidade") {
    return "SAP - Contabilidade";
  } else if (categoria === "SAP" && subcategoria === "Controladoria") {
    return "SAP - Controladoria";
  } else if (categoria === "SAP" && subcategoria === "Faturamento / Contas a Receber") {
    return "SAP - Planejamento";
  } else if (categoria === "SAP" && subcategoria === "Ingresso Fiscal / Contas a Pagar / Tesouraria") {
    return "SAP - Financeiro";
  } else if (categoria === "SAP" && subcategoria === "Megaduty") {
    return "SAP - Fiscal";
  } else if (categoria === "SAP" && subcategoria === "Suprimentos") {
    return "SAP - Suprimentos";
  } else if (categoria === "SAP" && subcategoria === "Projetos") {
    return "SAP - Projetos";
  } else {
    return "";
  }
}

module.exports = { fetchAreaNegocioItems, fetchDepartamentoItems, fetchUnidadeItems, fetchSubcategories, fetchAssunto, fetchCategoria, generateRandomString, generateGroup };
