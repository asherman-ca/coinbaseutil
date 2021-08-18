require('dotenv').config()
const {CoinbasePro} = require('coinbase-pro-node');

const auth = {
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  passphrase: 'vfvxo4jwjvh',
  useSandbox: false
}

const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then(accounts => {
  console.log(accounts)
  // const message = `You can trade "${accounts.length}" different pairs.`;
  // console.log(message);
});
