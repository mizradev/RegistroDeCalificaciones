# Sistema de Registro de Calificaciones v0.0.1 alpha

Sistema desarrollado como proyecto para la clase de programación e implementación de sistemas

### Índice

-  [Instalación y configuración base del sistema](https://github.com/soymizra/RegistroDeCalificaciones#instalar-y-ejecutar-el-proyecto)
-  Agregar endpoints al API (muy pronto)
-  Probar endpoints (muy pronto)
-  [Agregar pantallas a un módulo](https://github.com/soymizra/RegistroDeCalificaciones#agregar-pantallas-a-un-módulo)

#### Instalación y configuración base del sistema

-  Clonar el repositorio con el siguiente comando:
   `git clone https://github.com/soymizra/RegistroDeCalificaciones.git`

-  Crear un archivo `.env` en la raiz del proyecto dentro de la carpeta RegistroDeCalificaciones. El contenido del archivo tendran las variables para configurar la conexion a mysql. Ejemplo del archivo:
   ```
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=""
   MYSQL_DATABASE=bibliovirtual
   MYSQL_PORT=3306
   ```
-  Crear una rama diferente de `main`, con el nombre del modulo que se va a desarrollar, con el comando de ejemplo: `git checkout -b modulo_registro_calificaciones`

-  Posicionarse en la carpeta RegistroDeCalificaciones
   `cd RegistroDeCalificaciones/`

-  Instalar las dependencias del proyecto, con el comando: `npm install `

-  Ejecutar el proyecto con el comando: `npm run dev`

## Modulo Login

![login](images/img2.png)

![login](images/img1.png)
