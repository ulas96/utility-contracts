
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

    return logs.map((x) => BigInt(x.data)).reduce((p, c) => p + c);
}

async function totalErc20Transfers(fromBlock, toBlock) {
    const res = await alchemy.core.getAssetTransfers({
        fromBlock,
        toBlock,
        fromAddress: "0x28c6c06298d514db089934071355e5743bf21d60",
        category: ["erc20"]
    });
    console.log(res.transfers.length);
    return res.transfers.length;

}

totalErc20Transfers(0x0, 0xc2f9ad).catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
)
//module.exports = totalDaiTransferred;