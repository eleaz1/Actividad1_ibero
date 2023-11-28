Configuración de Docker para Conjunto de Réplicas de MongoDB

Este repositorio contiene una configuración de Docker Compose para establecer un conjunto de réplicas de MongoDB con múltiples nodos. La configuración define cuatro instancias de MongoDB (mongo-rs0-1, mongo-rs0-2, mongo-rs0-3 y mongo-rs0-4) que juntas forman un conjunto de réplicas llamado rs0.

Prerrequisitos

Antes de ejecutar la configuración de Docker Compose, asegúrese de tener Docker instalado en su máquina.

Para Empezar

Clone este repositorio en su máquina local:

bash

Copy code

git clone <url-del-repositorio>

Navegue al directorio del proyecto:

bash

Copy code

cd <directorio-del-proyecto>

Construya y ejecute los contenedores del conjunto de réplicas de MongoDB:

bash

Copy code

docker-compose up --build

Detalles de Configuración

mongo-rs0-1

Imagen: "mongo-start"

Construcción: ./mongo-rs0-1

Puertos:

Host: 27017

Contenedor: 27017

Volúmenes: ./mongo-rs0-1/data:/data/db

Dependencias: "mongo-rs0-2", "mongo-rs0-3"

mongo-rs0-2

Imagen: "mongo"

Comando: --replSet rs0 --oplogSize 128

Puertos:

Host: 27018

Contenedor: 27017

Volúmenes: ./mongo-rs0-2/data:/data/db

mongo-rs0-3

Imagen: "mongo"

Comando: --replSet rs0 --oplogSize 128

Puertos:

Host: 27019

Contenedor: 27017

Volúmenes: ./mongo-rs0-3/data:/data/db

mongo-rs0-4

Imagen: "mongo"

Comando: --replSet rs0 --oplogSize 128

Puertos:

Host: 27020

Contenedor: 27017

Volúmenes: ./mongo-rs0-4/data:/data/db

Uso

Una vez que los contenedores estén en ejecución, puede conectarse al conjunto de réplicas de MongoDB utilizando los puertos especificados y configurar sus aplicaciones en consecuencia.

Conectar al Conjunto de Réplicas

Ejemplo de cadena de conexión para conectarse al conjunto de réplicas:

bash

Copy code

mongodb://localhost:27017,localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs0

Limpieza

Para detener y eliminar los contenedores, utilice el siguiente comando:

bash

Copy code

docker-compose down

Nota

Esta configuración es para propósitos de desarrollo y se deben tomar medidas de seguridad adecuadas antes de implementar en un entorno de producción.

Ajuste la configuración según sea necesario según sus requisitos específicos.

Para obtener más información sobre conjuntos de réplicas de MongoDB, consulte la documentación oficial de MongoDB.
