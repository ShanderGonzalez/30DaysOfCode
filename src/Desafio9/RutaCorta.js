/*Complejo: Encontrar la ruta más corta en un laberinto
Desafío: Dado un laberinto representado por una matriz, 
donde 0 representa un camino libre y 1 representa una pared,
 encuentra la ruta más corta desde una posición inicial hasta
 una posición objetivo. Puedes moverte en las direcciones arriba,
 abajo, izquierda y derecha. Puedes asumir que siempre hay una ruta
 válida desde la posición inicial hasta la posición */

 function findShortestPath(maze, start, end) {
  const visited = Array(maze.length).fill().map(() => []);
  const queue = [[start]];
  visited[start[0]][start[1]] = true;
  
  while (queue.length) {
    const path = queue.shift(), [row, col] = path[path.length - 1];
    if (row === end[0] && col === end[1]) return path;
    
    [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => {
      const [newRow, newCol] = [row + dx, col + dy];
      if (maze[newRow]?.[newCol] === 0 && !visited[newRow][newCol] && (visited[newRow][newCol] = true)) {
        queue.push([...path, [newRow, newCol]]);
      }
    });
  }
  
  return [];
}

  const maze = [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ];
  const start = [0, 0];
  const end = [4, 4];
  
  const shortestPath = findShortestPath(maze, start, end);
  console.log(shortestPath);