function createPlush(N) {
    if (N % 2 === 0) {
      console.log("N debe ser un número impar.");
      return;
    }
  
    const M = N * 3;
    const message = "BIENVENIDO";
    const aditions = Math.floor((M - message.length) / 2);
  
    for (let i = 0; i < N; i++) {
      let row = "";
  
      for (let j = 0; j < M; j++) {
        if (i === Math.floor(N / 2) && j >= aditions && j < aditions + message.length) {
          row += message[j - aditions];
        } else if (i === 0 || i === N - 1 || j === 0 || j === M - 1) {
          row += "-";
        } else if (j === 1 || j === M - 2) {
          row += "|";
        } else {
          row += ".";
        }
      }
  
      console.log(row);
    }
  }

  createPlush(7);
  
  
  