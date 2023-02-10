import axios from 'axios';
const API_URL = '/api/invoice/';

// read all invoices
const readAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    API_URL + 'read/all',
    config,
  );
  return response.data;
};

// read my invoices
const readMy = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    API_URL + 'read/my',
    config,
  );
  return response.data;
};

// create invoice
const create = async (invoice, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + 'create',
    invoice,
    config,
  );
  console.log(response.data);
  return response.data;
};

// read invoice
const read = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    API_URL + 'read/' + id,
    config,
  );
  return response.data;
};

// update invoice status
const updateStatus = async (id, current_status, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + 'update-status/' + id,
    current_status,
    config,
  );
  return response.data;
};

// update invoice product
const updateProduct = async (id, product, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + 'update-product/' + id,
    product,
    config,
  );
  return response.data;
};

// update invoice total
const updateTotal = async (id, total, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(total);
  const response = await axios.put(
    API_URL + 'update-total/' + id,
    { total },
    config,
  );
  return response.data;
};

// remove invoice
const remove = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    API_URL + 'delete/' + id,
    config,
  );
  return response.data;
};

const invoiceService = {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateProduct,
  updateTotal,
  remove,
};

export default invoiceService;
