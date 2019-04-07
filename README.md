// feedbacks
que todo el form del post sea obligatorio
que haya tooltip que diga al usuario de que trata info/trueque
editar duplica
los post no se agregan ordenadamente
que la linea que separa cada post sea mas gruesa que las demás lineas
poder ordenar por categoría
botones de like 


Definición del producto

Historias de usuario

Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

# ENRAIZADOS

## Descripción Enraizados

En la actualidad, el ritmo de vida que llevamos nos ha alejado de la naturaleza, del campo, de nuestras raíces. Sin embargo habemos muchos que sentimos la necesidad de tener contacto con la naturaleza y hemos adoptado distintos tipos de plantas aún estando en un entorno urbano, nos preocupamos por la recuperación y preservación de entornos verdes. En varias ocasiones nos dirigimos al internet buscando información de como cuidar las plantas que hemos adquirido o que hemos puesto a crecer desde su semilla. Realizamos una encuesta a más de 60 personas, el 70% de ellas poseen plantas porque consideran que tener plantas, brinda armonía a los espacios que habitan, todos ellos están interesados en tener información al respecto de como cuidarlas.

Así surge la necesidad de crear un espacio donde podamos concentrar y compartir información necesaria respecto las plantas, una comunidad que se nutra con el conocimiento y/o investigación al respecto de las plantas sus usos y bondades.

## Introducción

ENRAIZADOS es una red social que tiene como principal objetivo reunir a los amantes de las plantas, de todo tipo y a distintos niveles. Desde los interesados en las plantas de ornato, plantas para autoconsumo e incluso emprendedores que proveen o distribuyen productos relacionados con y para las plantas.

Nuestras principales premisas son:

Compartir información respecto de las plantas:
Cuales son las propiedades de ciertas plantas.
Cómo mantenerlas sanas.
Información acerca de las maneras de aprovechar nuestros cultivos.
Los beneficios que estas plantas podrían traer.
Entre otros.
Intercambiar o vender plantas, sus frutos y semillas.
Brindar un espacio a los distribuidores o proveedores de productos relacionados con las plantas.

Para comenzar a echar raíces en nuestra red social, los usuarios deberán crear una cuenta con su dirección de correo electrónico o mediante su cuenta de gmail. Una vez dados dados de alta, podrán ingresar al muro principal para crear y visualizar los comentarios que han realizado los usuarios, podrán editar los comentarios, eliminarlos y darles like.

### Prototipos

Prototipo de baja fidelidad
(https://i.postimg.cc/2LBCwPxF/Enraizados-P1.png)

(https://i.postimg.cc/9z4XC7jR/Enraizados-P2.png)

Prototipo de alta resolución
(https://i.postimg.cc/ZWLvpdnY/principal.png)

(https://i.postimg.cc/3dmvr6Hv/Login2.png)

(https://i.postimg.cc/wtTyVjRX/Muro1.png)


#### Historias de Usuario


El usuario debe ver una pantalla principal que describa brevemente el enfoque y el contenido de la página. Así como el botón de “Ingresar” y “Crear cuenta”.
DOD:

Plantear en el HTML la estructura con titulo legible
Párrafo. Descripción del enfoque y el contenido de la página.
Botón “Ingresar”
Botón “Crear cuenta”
El usuario debe clickear el botón “Ingresar” o “Crear cuenta” y se desplegará una ventana en la que se pedirán datos como “Nombre”, “Correo electrónico”, “Contraseña”
Se considera hecho cuando haya un login o signup:

Que obtenga y guarde los datos
Que no permita hacer submit sin haber llenado los campos correspondientes
Lo que se escriba en el imputado de contraseña debe ser secreto
El estilo tendra los colores base
Una vez que el usuario se ha registrado, deberá poder ingresar haciendo click al botón de ingresar y visualizar la “página principal” o “timeline” donde se encuentra el contenido en un <div content> correspondiente a “INFO o TRUEQUE”
Se considera hecho cuando aparezca en el timeline un apartado donde aparecerán las publicaciones que comparta el usuario.

El usuario deberá ver en la parte superior del timeline un apartado para crear publicaciones, en este, podrá ingresar texto y al publicar este aparecerá en el timeline “INFO o TRUEQUE”. El usuario deberá seleccionar un checkbox del tipo de publicación.
DOD:

Input para texto
botón de publicar
función para guardar texto y publicarlo en la linea de tiempo
El usuario puede dar click a un botón dentro de la publicación para dar like.
DOD:

Poner botón de like
Función para conteo de likes
Mediante las funciones del SPA podemos pasar de una sección a otra, mediante botones, donde podremos visualizar el apartado de la pagina principal y el timeline
