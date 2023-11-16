#Artificial Intelligence

##Machine learning
###Definicion:
**- Arthur Samuel(1959):** Campo de estudio que le da a las maquinas la habilidad de aprender sin ser programada explicitamente.

**- Tom Mitchel(1998):** Un programa de computadora aprende de la experiencia(E) con respecto a alguna clase de tareas(T) y la medida de rendimiento(R), si el rendimiento(R) de la tarea(T) mejora con la experiencia(E). 


###Tipos de algoritmos:
####1- Supervisados:
Le damos los datos de entrada y los de salida, luego la maquina aprende cual es la relacion y dependiendo de esto puede realizar una tarea sin los datos de salida.

Se divide en dos problemas, uno de **casificacion** y el otro de **regresion** o retroalimentacion.

**Ejemplos------------------**

**(a) Regresión:** dada la imagen de una persona, tenemos que predecir su edad en función de la imagen dada

**(b) Clasificación:** dado un paciente con un tumor, tenemos que predecir si el tumor es maligno o benigno.

####2- No supervisados:
**Definicion:** Le damos los datos de entrada y ya **: D**, el solo encuentra la relacion o estructura que haya entre los datos *(es la ostiaa)*.

**Ejemplos------------------**

**(a) Agrupación:** tome una colección de 1,000,000 de genes diferentes y encuentre una manera de agrupar automáticamente estos genes en grupos que de alguna manera sean similares o estén relacionados por diferentes variables, como la duración de la vida, la ubicación, los roles, etc.

**(b) Sin agrupación:** el "algoritmo de cóctel", le permite encontrar la estructura en un entorno caótico. (es decir, identificar voces individuales y música de una malla de sonidos en una fiesta de cóctel).

##Modelos
Para estabelcer notacion para uso futuro digamos que:
```python

# Tenemos que:
x[i] = "datos de entrada"
y[i] = "datos de salida"

# una cantidad de ejemplos o datos: 
m = "tamanho de la muestra tomada"

# Un par:
(x[i], y[i]) 
# se conoce como ejemplo de capacitacion.

# Una lista de ejemplos de capacitacion:
(x[i], y[i]) ; i = 1 , . . . , m 
# se conoce como conjunto de entrenamiento.

```
Nuestro objetivo es aprender una función h: X → Y para que h(x) sea un "buen" predictor para el valor correspondiente de y : ), la letra h se toma de la palabra **"hipotesis"**.

Cuando la variable Y[i] que estamos tratando de predecir es continua, como en nuestro ejemplo de vivienda, llamamos al problema de aprendizaje un problema de **regresión**. 

Cuando Y[i] puede asumir solo un pequeño número de valores discretos *(como si, por el tamanho de la sala, quisiéramos predecir si una vivienda es una casa o un apartamento, por ejemplo)*, lo llamamos un problema de **clasificación**.

##Función de costo(funcion del error al cuadrado)

Podemos medir la precisión de nuestra función de hipótesis utilizando una función de costo . Esto supone una diferencia promedio *(en realidad, una versión más sofisticada de un promedio)* de todos los resultados de la hipótesis con entradas de x y la salida real de y.

##Decenso del Gradiente

Entonces tenemos nuestra función de **hipótesis** y tenemos una **manera de medir** qué tan bien encaja en los datos (J). Ahora necesitamos estimar los parámetros en la función de hipótesis. Ahí es donde entra la **pendiente de gradiente**.

**Uso:** Se usa para minimizar la funcion de coste.


  