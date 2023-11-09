/* global use, db */
// MongoDB Tournament
// base de datos MongoDb que permita la gestión de los participantes a un torneo deportivo, 
// deben incluir como minimo las siguientes colecciones (deportistas, entrenadores, árbitros, 
// encuentros deportivos, resultados y posiciones). 
// Ustedes escogen el tipo de evento deportivo que deseen trabajar, 
// el cual debe ser real y tener disponible los resultados y detalles del torneo deportivo.

use('torneo');

// Firt collection.
db.getCollection('equipo').insertMany([
  { 'nombre': 'team1', 'date': new Date('2014-03-01T08:00:00Z'), 'pais':'Colombia' },
  { 'nombre': 'team2', 'date': new Date('2014-03-01T08:00:00Z'), 'pais':'Colombia' },
]);