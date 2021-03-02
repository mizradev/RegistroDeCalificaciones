# Sistema de Registro de Calificaciones
Sistema desarrollado como proyecto para la clase de programación e implementación de sistemas

### Instalar y ejecutar el proyecto
- Clonar el repositorio con el siguiente comando
    ``` git clone https://github.com/soymizra/RegistroDeCalificaciones.git ```


- Crear un archivo `.env` en la raiz del proyecto dentro de la carpeta RegistroDeCalificaciones. El contenido del archivo tendran las variables para configurar la conexion a mysql. Ejemplo del archivo:
    ``` 
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=""
    MYSQL_DATABASE=bibliovirtual
    MYSQL_PORT=3306
    ```
- Crear una rama diferente de ```main```, con el nombre del modulo que se va a desarrollar, con el comando de ejemplo: ``` git checkout -b modulo_registro_calificaciones ```

- Posicionarse en la carpeta RegistroDeCalificaciones
    ``` cd RegistroDeCalificaciones/ ```

- Instalar las dependencias del proyecto, con el comando: ``` npm install  ```


- Ejecutar el proyecto con el comando: ``` npm run dev ```
