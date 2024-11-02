/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    const num = n.toString();

    let count = 0;

    for (let i = 0; i < num.length; i++) {
        const digit = num[i];
        const powerLevel = num.length - i -1;
        let digitsBefore = 0;

        if (powerLevel === 0) {
         digitsBefore = 1;
         } else if(digit > '1') {
            digitsBefore = Math.pow(10, powerLevel) + (digit * powerLevel * (Math.pow(10, powerLevel - 1)));
         } else if(digit === '1') {
            digitsBefore = (Math.pow(10, powerLevel -1) * powerLevel) + parseInt(num.slice(i + 1)) + 1;
         }

        count += digitsBefore;
        }

    return count;
};

countDigitOne(67156);