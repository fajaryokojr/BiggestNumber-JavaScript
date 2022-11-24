const num = 123;
const maxRedigit = function(num) {
    if (num < 0 || num > 900)
        return null
    return +num
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join('')
};
console.log(maxRedigit(num));