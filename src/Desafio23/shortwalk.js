const grafo = {
    "Torre Eiffel": { "Louvre": 7, "Notre Dame": 4 },
    "Louvre": { "Torre Eiffel": 7, "Notre Dame": 3, "Arco de Triunfo": 8 },
    "Notre Dame": { "Torre Eiffel": 4, "Louvre": 3, "Arco de Triunfo": 6 },
    "Arco de Triunfo": { "Louvre": 8, "Notre Dame": 6 }
  };

function dijkstra(grafo, origen, destino) {
  const distancias = {};
  distancias[origen] = 0;

  const caminoMasCorto = {};
  caminoMasCorto[origen] = [];

  const noVisitados = new Set(Object.keys(grafo));

  while (noVisitados.size > 0) {
    let atraccionActual = null;
    for (let atraccion of noVisitados) {
      if (!atraccionActual || distancias[atraccion] < distancias[atraccionActual]) {
        atraccionActual = atraccion;
      }
    }

    if (atraccionActual === destino) {
      return caminoMasCorto[atraccionActual];
    }

    const distanciasAdyacentes = grafo[atraccionActual];
    const caminoAdyacente = caminoMasCorto[atraccionActual];

    for (const atraccionAdyacente in distanciasAdyacentes) {
      const distancia = distanciasAdyacentes[atraccionAdyacente];
      const distanciaTotal = distancias[atraccionActual] + distancia;

      if (!distancias[atraccionAdyacente] || distanciaTotal < distancias[atraccionAdyacente]) {
        distancias[atraccionAdyacente] = distanciaTotal;
        caminoMasCorto[atraccionAdyacente] = [caminoAdyacente, atraccionAdyacente];
      }
    }

    noVisitados.delete(atraccionActual);
  }

  return null;
}

const origen = "Torre Eiffel";
const destino = "Arco de Triunfo";
const camino = dijkstra(grafo, origen, destino);

if (camino) {
  console.log(`El camino más corto desde ${origen} hasta ${destino} es: ${camino.join(' -> ').replace(',','')}`);
} else {
  console.log(`No existe un camino desde ${origen} hasta ${destino}`);
}
  
  
  
