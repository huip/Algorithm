/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = Array(rooms.length).fill(false)
    function dfs(visited, roomNum) {
        if (visited[roomNum]) {
            return
        }
        visited[roomNum] = true
        let room = rooms[roomNum]
        for (let key of room) {
            dfs(visited, key)
        }
    }
    dfs(visited, 0)
    for (let v of visited) {
        if (!v) {
            return false
        }
    }
    return true
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))