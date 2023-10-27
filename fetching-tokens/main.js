const {totalDaiTransferred} = require('./transfered-dai');

totalDaiTransferred(0x0, 0xc2f9ad).catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
)