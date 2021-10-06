import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: process.env.REACT_APP_DB_KEY,
  domain: "db.eu.fauna.com",
  port: 443,
  scheme: "https",
});
const q = faunadb.query;
export { client, q };
