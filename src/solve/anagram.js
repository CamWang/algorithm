function isAnagram(sourceStr, targetStr) {
    if (sourceStr === targetStr) {
        return true;
    }
    if (sourceStr.length !== targetStr.length) {
        return false;
    }
    const sourceFreq = {}, targetFreq = {};
    for (const char of sourceStr) {
        sourceFreq[char]===undefined? sourceFreq[char] = 1 : sourceFreq[char]++;
    }
    for (const char of targetStr) {
        targetFreq[char]===undefined? targetFreq[char] = 1 : targetFreq[char]++;
    }
    return Object.keys(sourceFreq).every(key => {
        return sourceFreq[key] === targetFreq[key];
    });
}

module.exports = {
    isAnagram
}