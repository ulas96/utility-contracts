
require("dotenv").config();
const { Alchemy, Network } = require("alchemy-sdk");
const { firstTopic, secondTopic } = require('./topics');
// prefix both the topics with 0x
const topics = [firstTopic(), secondTopic()].map((x) => '0x' + x);

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

async function totalDaiTransferred(fromBlock, toBlock) {
    const logs = await alchemy.core.getLogs({
        address: "0x6b175474e89094c44da98b954eedeac495271d0f", // dai contract address
        fromBlock,
        toBlock,
        topics
    });


    console.log(logs[0]);
    // take a look at the first log in the response
    // console.log(logs[0]);

    // <-- TODO #2: return the total dai transferred during this timeframe
}

module.exports = totalDaiTransferred;