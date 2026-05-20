function zipStrings(a, b) {

    const result = [];

    const maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {

        if (i < a.length) {
            result.push(a[i]);
        }

        if (i < b.length) {
            result.push(b[i]);
        }
    }
    
    return result.join("");
}

console.log(zipStrings("abc", "123"));
console.log(zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz"));
console.log(zipStrings("day", "night"));
console.log(zipStrings("python", "javascript"));
console.log(zipStrings("feCdCm", "reoeap"));