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

//Creacion coleccion "estadios"
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

// Insertar documentos en la colección "deportista"
db.deportista.insertMany([
    {
        nombre: "Lionel Messi",
        cc: "123456789",
        nacimiento: new Date("1987-06-24"),
        sexo: "Masculino",
        posicion: "Delantero"
    },
    {
        nombre: "Cristiano Ronaldo",
        cc: "987654321",
        nacimiento: new Date("1985-02-05"),
        sexo: "Masculino",
        posicion: "Delantero"
    },
    {
        nombre: "Serena Williams",
        cc: "123987456",
        nacimiento: new Date("1981-09-26"),
        sexo: "Femenino",
        posicion: "Defensa"
    },
    {
        nombre: "Michael Phelps",
        cc: "456123789",
        nacimiento: new Date("1985-06-30"),
        sexo: "Masculino",
        posicion: "Arquero"
    },
    {
        nombre: "Usain Bolt",
        cc: "789123456",
        nacimiento: new Date("1986-08-21"),
        sexo: "Masculino",
        posicion: "Medio"
    }
]);

// Insertar documentos en la colección "entrenador"
db.entrenador.insertMany([
    {
        nombre: "Jose Mourinho",
        cc: "123456789",
        nacimiento: new Date("1963-01-26"),
        sexo: "Masculino",
        equipo: "AS Roma"
    },
    {
        nombre: "Pep Guardiola",
        cc: "987654321",
        nacimiento: new Date("1971-01-18"),
        sexo: "Masculino",
        equipo: "Manchester City"
    },
    {
        nombre: "Carlo Ancelotti",
        cc: "456789123",
        nacimiento: new Date("1959-06-10"),
        sexo: "Masculino",
        equipo: "Real Madrid"
    },
    {
        nombre: "Emma Hayes",
        cc: "789123456",
        nacimiento: new Date("1976-10-18"),
        sexo: "Femenino",
        equipo: "Chelsea FC Women"
    },
    {
        nombre: "Jurgen Klopp",
        cc: "654321987",
        nacimiento: new Date("1967-06-16"),
        sexo: "Masculino",
        equipo: "Liverpool FC"
    }
]);

// Insertar documentos en la colección "encuentro"
db.encuentro.insertMany([
    {
        fecha: new Date("2023-11-11"),
        estadio: "Santiago Bernabeu",
        torneo: "La Liga",
        equipo_local: {
            _id: "equipo1",
            nombre: "Real Madrid",
            marcador: 2
        },
        equipo_visitante: {
            _id: "equipo2",
            nombre: "Chelsea FC Women",
            marcador: 1
        },
        arbitro: {
            _id: "arb1",
            nomArb: "Howard Webb"
        }
    },
    {
        fecha: new Date("2023-11-15"),
        estadio: "Anfield",
        torneo: "Premier League",
        equipo_local: {
            _id: "equipo3",
            nombre: "Liverpool FC",
            marcador: 3
        },
        equipo_visitante: {
            _id: "equipo4",
            nombre: "Manchester City",
            marcador: 1
        },
        arbitro: {
            _id: "arb2",
            nomArb: "Mike Dean"
        }
    },
    {
        fecha: new Date("2023-11-20"),
        estadio: "Stamford Bridge",
        torneo: "Premier League",
        equipo_local: {
            _id: "equipo5",
            nombre: "Chelsea FC Women",
            marcador: 2
        },
        equipo_visitante: {
            _id: "equipo6",
            nombre: "AS Roma",
            marcador: 0
        },
        arbitro: {
            _id: "arb3",
            nomArb: "Anthony Taylor"
        }
    },
    {
        fecha: new Date("2023-11-25"),
        estadio: "Camp Nou",
        torneo: "La Liga",
        equipo_local: {
            _id: "equipo7",
            nombre: "AS Roma",
            marcador: 2
        },
        equipo_visitante: {
            _id: "equipo8",
            nombre: "Real Madrid",
            marcador: 2
        },
        arbitro: {
            _id: "arb1",
            nomArb: "Howard Webb"
        }
    },
    {
        fecha: new Date("2023-12-01"),
        estadio: "Old Trafford",
        torneo: "Premier League",
        equipo_local: {
            _id: "equipo9",
            nombre: "Manchester City",
            marcador: 1
        },
        equipo_visitante: {
            _id: "equipo10",
            nombre: "Liverpool FC",
            marcador: 1
        },
        arbitro: {
            _id: "arb2",
            nomArb: "Mike Dean"
        }
    }
]);

// Insertar documentos en la colección "arbitro"
db.arbitro.insertMany([
    {
        nombre: "Howard Webb",
        cc: "123456789",
        nacimiento: new Date("1971-07-14"),
        sexo: "Masculino"
    },
    {
        nombre: "Mike Dean",
        cc: "987654321",
        nacimiento: new Date("1975-03-13"),
        sexo: "Masculino"
    },
    {
        nombre: "Anthony Taylor",
        cc: "456789123",
        nacimiento: new Date("1979-03-24"),
        sexo: "Masculino"
    },
    {
        nombre: "Felix Brych",
        cc: "789123456",
        nacimiento: new Date("1975-08-03"),
        sexo: "Masculino"
    },
    {
        nombre: "Stéphanie Frappart",
        cc: "456123789",
        nacimiento: new Date("1983-12-14"),
        sexo: "Femenino"
    }
]);

// Insertar documentos en la colección "equipo"
db.equipo.insertMany([
  {
      _id: "equipo1",
      nombre: "Barcelona FC",
      ciudad: "Barcelona",
      tecnico: {
          _id: "tec001",
          nomTecnico: "Xavi Hernandez"
      },
      jugadores: [
          { jugador: "Lionel Messi", posicion: "Delantero" },
          { jugador: "Gerard Piqué", posicion: "Defensa" },
          { jugador: "Sergio Busquets", posicion: "Centrocampista" },
          { jugador: "Ansu Fati", posicion: "Delantero" }
      ]
  },
  {
      _id:"equipo2",
      nombre: "Real Madrid",
      ciudad: "Madrid",
      tecnico: {
          _id: "tec002",
          nomTecnico: "Carlo Ancelotti"
      },
      jugadores: [
          { jugador: "Karim Benzema", posicion: "Delantero" },
          { jugador: "Sergio Ramos", posicion: "Defensa" },
          { jugador: "Luka Modric", posicion: "Centrocampista" },
          { jugador: "Eden Hazard", posicion: "Delantero" }
      ]
  },
  {
      _id:"equipo3",
      nombre: "Manchester City",
      ciudad: "Manchester",
      tecnico: {
          _id: "tec003",
          nomTecnico: "Pep Guardiola"
      },
      jugadores: [
          { jugador: "Kevin De Bruyne", posicion: "Centrocampista" },
          { jugador: "Ruben Dias", posicion: "Defensa" },
          { jugador: "Raheem Sterling", posicion: "Delantero" },
          { jugador: "Phil Foden", posicion: "Centrocampista" }
      ]
  },
  {
      _id:"equipo4",
      nombre: "Juventus",
      ciudad: "Turín",
      tecnico: {
          _id: "tec004",
          nomTecnico: "Massimiliano Allegri"
      },
      jugadores: [
          { jugador: "Cristiano Ronaldo", posicion: "Delantero" },
          { jugador: "Giorgio Chiellini", posicion: "Defensa" },
          { jugador: "Paulo Dybala", posicion: "Delantero" },
          { jugador: "Arthur Melo", posicion: "Centrocampista" }
      ]
  },
  {
      _id:"equipo5",  
      nombre: "Liverpool FC",
      ciudad: "Liverpool",
      tecnico: {
          _id: "tec005",
          nomTecnico: "Jurgen Klopp"
      },
      jugadores: [
          { jugador: "Mohamed Salah", posicion: "Delantero" },
          { jugador: "Virgil van Dijk", posicion: "Defensa" },
          { jugador: "Sadio Mane", posicion: "Delantero" },
          { jugador: "Jordan Henderson", posicion: "Centrocampista" }
      ]
  }
]);

// Insertar documentos en la colección "posiciones"
db.posiciones.insertMany([
  {
      equipo: {
          nombre: "AS Roma"
      },
      Puntos: 24,
      PartidosJugados: 8,
      PartidosGanados: 6,
      PartidosEmpatados: 0,
      PartidosPerdidos: 2
  },
  {
      equipo: {
          nombre: "Manchester City"
      },
      Puntos: 20,
      PartidosJugados: 8,
      PartidosGanados: 5,
      PartidosEmpatados: 2,
      PartidosPerdidos: 1
  },
  {
      equipo: {
          nombre: "Real Madrid"
      },
      Puntos: 18,
      PartidosJugados: 8,
      PartidosGanados: 4,
      PartidosEmpatados: 3,
      PartidosPerdidos: 1
  },
  {
      equipo: {
          nombre: "Chelsea FC Women"
      },
      Puntos: 16,
      PartidosJugados: 8,
      PartidosGanados: 3,
      PartidosEmpatados: 3,
      PartidosPerdidos: 2
  },
  {
      equipo: {
          nombre: "Liverpool FC"
      },
      Puntos: 12,
      PartidosJugados: 8,
      PartidosGanados: 2,
      PartidosEmpatados: 3,
      PartidosPerdidos: 3
  }
]);

// Insertar documentos en la colección "estadios"
db.estadios.insertMany([
  {
      nombre: "Camp Nou",
      capacidad: 99354,
      ciudad: "Barcelona",
      inaugurado: new Date("1957-09-24")
  },
  {
      nombre: "Santiago Bernabéu",
      capacidad: 81044,
      ciudad: "Madrid",
      inaugurado: new Date("1947-12-14")
  },
  {
      nombre: "Old Trafford",
      capacidad: 74879,
      ciudad: "Manchester",
      inaugurado: new Date("1910-02-19")
  },
  {
      nombre: "Allianz Arena",
      capacidad: 75000,
      ciudad: "Munich",
      inaugurado: new Date("2005-05-30")
  },
  {
      nombre: "Anfield",
      capacidad: 53394,
      ciudad: "Liverpool",
      inaugurado: new Date("1884-08-28")
  }
]);