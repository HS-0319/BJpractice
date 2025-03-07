function solution(maps) {
    const queue = [];
    
    const visitedArray = Array.from({length: maps.length}, () => new Array(maps[0].length).fill(false));
    
    const dist = Array.from({length: maps.length}, () => new Array(maps[0].length).fill(0));
        
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    
    queue.push([0,0]);
    visitedArray[0][0] = true;
    dist[0][0] = 1;
    
    while(queue.length) {
        const [curX, curY] = queue.shift();
        
        for(let i = 0; i < 4; i++) {
            const x = curX + dx[i];
            const y = curY + dy[i];
            
            if(x > -1 && x < maps.length &&
               y > -1 && y < maps[0].length) {
                if(maps[x][y] === 1 && !visitedArray[x][y]) {
                    queue.push([x,y]);
                    visitedArray[x][y] = true;
                    
                    if(dist[x][y] === 0) {
                        dist[x][y] = dist[curX][curY] + 1;
                    }
                }
            }
        }
    }
    
    return dist[maps.length - 1][maps[0].length - 1] ? dist[maps.length - 1][maps[0].length - 1] : -1
}