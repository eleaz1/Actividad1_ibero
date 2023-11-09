/* global use, db */
// MongoDB Tournament
// base de datos MongoDb que permita la gestión de los participantes a un torneo deportivo, 
// deben incluir como minimo las siguientes colecciones (deportistas, entrenadores, árbitros, 
// encuentros deportivos, resultados y posiciones). 
// Ustedes escogen el tipo de evento deportivo que deseen trabajar, 
// el cual debe ser real y tener disponible los resultados y detalles del torneo deportivo.

use('torneo');

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
                entrenador: {
                    bsonType: "string"
                },
            }
        }
    }
})

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

db.createCollection("encuentro", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
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
                        id: {
                            bsonType: "int"
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

db.getCollection('deportista').insertMany([
    { 'nombre': 'abc', 'cc': '16', 'nacimiento': new Date('2014-03-01T08:00:00Z') },
    { 'nombre': 'jkl', 'cc': '15', 'nacimiento': new Date('2014-03-01T09:00:00Z') }
]);
