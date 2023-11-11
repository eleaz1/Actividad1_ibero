/*********************************************************************************************
 * Universidad Iberoamericana
 * Presentador por:
 * Ivan Agudelo
 * Jose Ducón
 *********************************************************************************************/

/* global use, db */
// MongoDB Tournament
// base de datos MongoDb que permita la gestión de los participantes a un torneo deportivo, 
// deben incluir como minimo las siguientes colecciones (deportistas, entrenadores, árbitros, 
// encuentros deportivos, resultados y posiciones). 
// Ustedes escogen el tipo de evento deportivo que deseen trabajar, 
// el cual debe ser real y tener disponible los resultados y detalles del torneo deportivo.

use('torneo');

//Creacion coleccion "deportista"
db.createCollection("deportista", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "cc"],
            properties: {
                nombre: {
                    bsonType: "string"
                },
                cc: {
                    bsonType: "string"
                },
                nacimiento: {
                    bsonType: "date"
                },
                sexo: {
                    bsonType: "string"
                },
                posicion: {
                    bsonType: "string"
                }
            }
        }
    }
})

//Creacion coleccion "entrenador"
db.createCollection("entrenador", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "cc"],
            properties: {
                nombre: {
                    bsonType: "string"
                },
                cc: {
                    bsonType: "string"
                },
                nacimiento: {
                    bsonType: "date"
                },
                sexo: {
                    bsonType: "string"
                },
                equipo: {
                    bsonType: "string"
                }
            }
        }
    }
})

//Creacion coleccion "equipo"
db.createCollection("equipo", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string"
                },
                ciudad: {
                    bsonType: "string"
                },
                tecnico: {
                    bsonType: "object",
                    properties: {
                        _id: {
                            bsonType: "string"
                        },
                        nomTecnico: {
                            bsonType: "string"
                        }
                    }
                },
                jugadores:{
                    bsonType:"array",
                    items: {
                        type: "object",
                        additionalProperties: false,
                        required:["jugador","posicion"],
                        properties: {
                            jugador: {
                                bsonType: "string"
                            },
                            posicion: {
                                bsonType: "string"
                            }
                        }
                    }
                }
            }
        }
    }
})

//Creacion coleccion "arbitro"
db.createCollection("arbitro", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string"
                },
                cc: {
                    bsonType: "string"
                },
                nacimiento: {
                    bsonType: "date"
                },
                sexo: {
                    bsonType: "string"
                }
            }
        }
    }
})

//Creacion coleccion "encuentro"
db.createCollection("encuentro", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fecha"],
            properties: {
                fecha: {
                    bsonType: "date"
                },
                estadio: {
                    bsonType: "string"
                },
                torneo: {
                    bsonType: "string"
                },
                equipo_local: {
                    bsonType: "object",
                    properties:{
                        _id: {
                            bsonType: "string"
                        },
                        nombre: {
                            bsonType: "string"
                        },
                        marcador: {
                            bsonType: "int"
                        }
                    }
                },
                equipo_visitante: {
                    bsonType: "object",
                    properties: {
                        _id: {
                            bsonType: "string"
                        },
                        nombre: {
                            bsonType: "string"
                        },
                        marcador: {
                            bsonType: "int"
                        }
                    }
                },
                arbitro: {
                    bsonType: "object",
                    properties: {
                        _id: {
                            bsonType: "string"
                        },
                        nomArb: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }
})

//Creacion coleccion "posiciones"
db.createCollection("posiciones", {
  validator: {
      $jsonSchema: {
          bsonType: "object",
          required: ["equipo", "Puntos", "PartidosJugados", "PartidosGanados", "PartidosEmpatados", "PartidosPerdidos"],
          properties: {
            equipo: {
                bsonType: "object",
                properties:{
                    nombre: {
                        bsonType: "string"
                    }
                }
            },
              Puntos: {
                  bsonType: "int",
                  minimum: 0
              },
              PartidosJugados: {
                  bsonType: "int",
                  minimum: 0
              },
              PartidosGanados: {
                  bsonType: "int",
                  minimum: 0
              },
              PartidosEmpatados: {
                  bsonType: "int",
                  minimum: 0
              },
              PartidosPerdidos: {
                  bsonType: "int",
                  minimum: 0
              }
          }
      }
  }
});

db.createCollection("estadios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "capacidad", "ciudad"],
      properties: {
        nombre: {
          bsonType: "string"
        },
        capacidad: {
          bsonType: "int",
          minimum: 0
        },
        ciudad: {
          bsonType: "string"
        },
        inaugurado: {
          bsonType: "date"
        }
      }
    }
  }
});


//Se crean los inserts de las colecciones.
