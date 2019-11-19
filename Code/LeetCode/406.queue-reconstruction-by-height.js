/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    for (let i = 0; i < people.length; i++) {
        let p = people[i]
        if (p[1] != i) {
            people.splice(i, 1)
            people.splice(p[1], 0, p)
        }
    }
    return people
};

reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])