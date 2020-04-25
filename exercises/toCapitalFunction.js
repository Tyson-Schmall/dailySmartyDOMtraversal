const shortStr = "Hi there";

const longStr = "the quick brown fox jumped over the lazy dog";

const strCapitalizer = string => {
    const strArray = string.split(" ");
    return strArray.map(str => str[0].toUpperCase() + str.slice(1));
}

console.log(strCapitalizer(longStr));
console.log(strCapitalizer(shortStr));