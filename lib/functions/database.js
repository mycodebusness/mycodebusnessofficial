const { Client } = require("@vercel/postgres");

const client = new Client();
client.connect();

module.exports = client;
