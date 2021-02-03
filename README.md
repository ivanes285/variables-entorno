# variables-entorno

En esta app de ejemplo se hace uso de los modulos como dotenv y crossenv que nos permiten 
manejar nuestras variables de entorno(constraseñas,tokens,apikey), las cuales NUNCA se deben publicar o 
dejar visibles en el codigo ya que estas pueden ser vulneradas.
# Nota
Nota: En Nodejs existe una variable global llamada process la cual es un objeto que contiene toda la 
información de nuestro sistema entonces con process.env. podemos acceder a una variable de entorno que 
tengamos en nuestro sistema o que agreguemos.


Ahora tenemos un pequeño problema, dependiendo del SO que estés utilizando cambia un poco la manera en como
nosotros tenemos que definir nuestras variables de entorno al menos para cada terminal por ejemplo:

LINUX o MAC Os 
export  PORT=4000

WIWNDOS
set PORT=4000

Para solucionar este problema y no preocuparnos en que SO nos encontramos, en node existe un modulo llamado
cross-env y tambien otro modulo llamado dotenv.


