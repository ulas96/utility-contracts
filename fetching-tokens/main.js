const {totalDaiTransferred} = require('./transfered-dai');

totalDaiTransferred(12400000, 12400010).catch(
    (error) => {
        console.error(error);
        process.exit(1);
    }
)