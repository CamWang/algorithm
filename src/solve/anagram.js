function isAnagram(sourceStr, targetStr) {
    if (sourceStr === targetStr) {
        return true;
    }
    const sourceFreq = {}, targetFreq = {};
    for (const char of sourceStr) {
        sourceFreq[char]? sourceFreq[char]++ : sourceFreq[char] = 1;
    }
    for (const char of targetFreq) {
        
    }
}