/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) {
        return 0
    }
    let q = [beginWord]
    let step = 1
    let visited = {}
    while (q.length) {
        let tempQ = []
        while (q.length) {
            let word = q.shift()
            for (let i = 0; i < word.length; i++) {
                let temp = word.substr(0, i) + word.substr(i + 1)
                for (let j = 0; j < wordList.length; j++) {
                    let check = wordList[j].substr(0, i) + wordList[j].substr(i + 1)
                    if (temp === check && !visited[wordList[j]]) {
                        if (wordList[j] == endWord) {
                            return step + 1
                        }
                        visited[wordList[j]] = true
                        tempQ.push(wordList[j])
                    }
                }
            }
        }
        q = tempQ
        step++
    }
    return 0
};