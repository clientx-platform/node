const axios = require('axios');

const DEFAULT_HOST = 'https://app.clientx.io';
const DEFAULT_API_VERSION = 'api/v1';

const buildClient = ({
  config: {
    host = DEFAULT_HOST,
    apiVersion = DEFAULT_API_VERSION,
    apiAccessToken
  }
}) => {
  return axios.create({
    baseURL: `${host}/${apiVersion}`,
    timeout: 20000,
    headers: { api_access_token: apiAccessToken }
  });
};

module.exports = buildClient;
