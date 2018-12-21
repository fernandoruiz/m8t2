# M8T2
Componente software que permite:
* Generar un código QR para añadir un servicio en las aplicaciones mencionadas anteriormente.
* Validar un código TOTP introducido por el usuario para verificar si es correcto o no para el servicio anterior.


## Getting Started

Estas instrucciones te ayudarán a desplegar tanto el frontend como el backend del componente software.

### Prerequisites

* Node (v10.13.0)
* AngularCLI (v7.0.6) 

### Installing

* Instalar la versión 10.13.0 node.js (que viene también con npm), desde: https://nodejs.org/es/download/. Ejecutar node -v para comprobar que la instalación ha sido correcta.
* Instalar angularCLI ejecutando: npm install -g @angular/cli. Comprobar con: ng version (la versión instalada debe ser la 7.0.6).

### Setup

Clonar el proyecto en local y cambiar la variable de entorno que indica la url del equipo en el que lanzaremos la solución (frontend/src/environments.prod.ts).

### Build

Para compilar el frontend con la configuración correcta, ejecutamos desde el directorio frontend/, el siguiente comando:
```
ng build --prod
```

## Running

Para lanzar el frontend (por defecto, lo hará en el puerto 4200 de localhost), navegamos al directorio frontend/dist/m8t2-project y ejecutamos:
```
ng serve
```

Para lanzar el backend (puerto 3000), navegamos al directorio backend y ejecutamos:
```
node backend.js
```

## License

This project is licensed under the MIT License - Fernando Ruiz Hernández 2018
