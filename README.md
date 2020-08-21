# Transiciones y animaciones

Antes de implementar una transición o animación, nos podemos preguntar cuándo o para qué puedo usar estas herramientas, estas son algunas de las respuestas:

- Proporcionar información visual cuando se interactúa con un elemento.
- Destacar las relaciones entre los elementos.
- Destacar la disponibilidad de una acción.
- Destacar los resultados de una acción.
- Revelar información escondida como un menú o un *tooltip*.
- Centrar la atención en lo que es importante, sin crear distracciones innecesarias.
- Agregar carácter a las interacciones comunes.

Las animaciones deben llamar la atención... pero no demasiado. Hay que asegurarse de que el movimiento no requiera demasiado tiempo y no dure demasiado en la pantalla. Este es especialmente el caso si hablamos de elementos con los que los usuarios deberían interactuar con frecuencia. Una o dos veces puede ser divertido, pero con un uso frecuente puede volverse realmente frustrante.

Hay lindos ejemplos en la documentación de material design https://material.io/design/motion/understanding-motion.html

TLDR: No queremos llegar a esto:

![homer web page](./images/homer-web.gif)


## Las transiciones

Las transiciones no son otra cosa que el efecto de un cambio en el estado de un elemento de forma gradual en un intervalo de tiempo. Cuando hablamos de cambio de estado nos referimos a cambios en los valores de sus propiedades.


Este tipo de efectos producen en una página la sensación de que está *"viva"*.

### Sintaxis

Podemos definir las propiedades individuales de transición o usar la propiedad abreviada.

Utilizando las propiedades individuales:
```css
div {
    width: 100px;
    height: 100px;
    background: red;

    transition-property: width;
    transition-duration: 2s;
    transition-delay: 800ms;
    transition-timing-function: ease;
}
```

Utilizando la propiedad abreviada:
```css
div {
    width: 100px;
    height: 100px;
    background: red;

    transition: width 2s 800ms ease;
}
```

Los valores no son obligatorios y el orden de los valores solo importa si ponemos un valor de *delay*, que en ese caso hay que ponerlo después del valor de *duration*.

![propiedad abreviada transition](./images/transition-propiedad-abreviada.png)


### Ejemplo Artículos

Para los ejemplos lo que vamos a hacer es tomar prestado otros ejemplos y darle vida con transiciones.

Para el primer caso voy a tomar el ejemplo donde aprendieron sobre *padding* y darle una transición.

![artículos antes](./images/articulos-antes.gif)

#### Preparaciones previas

Para este ejemplo quiero poder poner foco en los distintos artículos, tanto con la tecla tab o con un clic. Para esto necesito agregar un *tabindex* a cada contenedor en orden creciente.

```html
<section class="container" tabindex="1">
...
</section>

<section class="container" tabindex="2">
...
</section>

<section class="container" tabindex="3">
...
</section>
```

Esto me permite definir:

```css
section.container {
    margin: 0px auto;
    /* Por defecto tiene padding: 0; */
}

section.container:focus {
    padding: 40px 0;
}
```

Y así va quedando:

![artículos mediante](./images/articulos-mediante.gif)

#### Agregándole la transición

Ahora sí que tengo el estado inicial y el estado final puedo agregarle la transición:

```css
section.container {
    margin: 0px auto;
    transition-property: padding;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
}

section.container:focus {
    outline: none;
    /* Le saco el borde que el focus me pone por defecto */
    padding: 40px 0;
}
```

Y así queda:

![artículos después](./images/articulos-despues.gif)

[Ejemplo en vivo](https://uqbar-project.github.io/css-12-transiciones-y-animaciones/muchosArticulos.html)

### Consola de animaciones

En muchos casos puedo querer ver la animación en detalle o editarlas en tiempo real y en ese caso existe las herramientas de animación de firefox y chrome

En el caso de chrome:

![animations tool chrome](./images/animations-tool-chrome.gif)

En el caso de firefox:

![animations tool firefox](./images/animations-tool-firefox.gif)

### Ejemplo Variables

En este ejemplo por suerte ya tenemos definido dos estados y vamos a expandir sobre eso

```css
.primario {
    background-color: var(--color-secundario);
    color: var(--letra-primario);
    height: 3rem;
    width: 10rem;
    border-radius: var(--border-radius-default);
}

.primario:hover {
    filter: brightness(75%);
}
```
![variables antes](./images/variables-antes.gif)

Empecemos con una transición de brillo.

```css
.primario {
    background-color: var(--color-secundario);
    color: var(--letra-primario);
    height: 3rem;
    width: 10rem;
    border-radius: var(--border-radius-default);
    transition: filter 200ms 100ms;
}

.primario:hover {
    filter: brightness(75%);
}
```

![variables antes](./images/variables-durante.gif)

Y ya podríamos decir que terminamos... ¿no? ¡No!


```css
.primario {
    background-color: var(--color-secundario);
    color: var(--letra-primario);
    height: 3rem;
    width: 10rem;
    border-radius: var(--border-radius-default);
    cursor: pointer;
    transition: all 200ms 100ms, box-shadow 1s 100ms ease-in-out;
}

.primario:hover {
    --letra-primario: white;
    --color-secundario: red;
    font-size: 20px;
    filter: brightness(75%);
    transform: scale(1.5);
    box-shadow: 0px 0px 6px 4px grey;
}
```

Nótese que transiciona valores por cambios en variables y también transiciona con valores no definidos ya que toma los valores por defecto.

![variables después](./images/variables-despues.gif)

Mmm capaz es un poco mucho...

[Ejemplo en vivo](https://uqbar-project.github.io/css-12-transiciones-y-animaciones/variables.html)

### Propiedades

#### *transition-property*:
Especifica el nombre de la propiedad a la cual ponerle un efecto de transición.

```css
.class {
    transition-property: background-color;
}
```

Se pueden especificar propiedades compuestas.
```css
.class {
    /* Incluira padding-top padding-right padding-bottom padding-left */
    transition-property: padding;
}
```

Otra opción es incluir todas las propiedades.
```css
.class {
    transition-property: all;
}
```

#### *transition-duration*:
Especifica cuanto tiempo tomara la transición entre dos estados diferentes. Utiliza las unidades `s`
para segundos y `ms` para milisegundos.

![ejemplo duration](./images/ejemplo-duration.gif)

#### *transition-delay*:
Especifica cuanto tiempo tomara la transición en empezar. Utiliza las unidades `s`
para segundos y `ms` para milisegundos.

![ejemplo delay](./images/ejemplo-delay.gif)

#### *transition-timing-function*:
Esto permite establecer una curva de aceleración para que la velocidad de la transición pueda variar a lo largo de su duración. Hay que aclarar que, aunque se modifique la aceleración, la duración permanecerá intacta.

Un ejemplo modificando su valor desde la consola de chrome.

![ejemplo timing function](./images/ejemplo-timing.gif)

También se puede en Firefox.

![ejemplo timing function firefox](./images/ejemplo-timing-firefox.png)

#### Multiples transiciones

Puedo crear múltiples transiciones si separo las propiedades con una coma. Es necesario definir todas las otras propiedades con coma ya que tomará el siguiente valor definido y volverá al primer valor en caso de no tener otro.
```css
.class {
    transition-property: padding, padding-top, color, background-color;
    transition-duration: 2s, 0s, 200ms;
    transition-delay: 0s, 800ms;
    transition-timing-function: ease-in-out;
}
```
Que seria equivalente a
```css
.class {
  transition: padding 2s 0s ease-in-out,
        padding-top 0s 800ms ease-in-out,
        color 200ms 0s ease-in-out,
        background-color 2s 800ms ease-in-out;
}
```

## Las animaciones

Las animaciones son bastante parecidas a las transiciones. Ambas tienen en común que actúan sobre los valores de las propiedades de un elemento transformándolos gradualmente en otros valores. Sin embargo, las animaciones ofrecen bastante más control que las transiciones en el proceso de transformación del elemento.

### Sintaxis

Al igual que las transiciones se puede definir las propiedades individuales o usar la propiedad abreviada.

Utilizando las propiedades individuales:
```css
div {
    animation-name: mi-animacion;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 0.2s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: forwards;
}
```

Utilizando la propiedad abreviada:
```css
div {
  animation: mi-animacion 5s linear 0.2s infinite normal forwards;
}
```

Ningún valor es obligatorio y cada propiedad tiene un valor por defecto.

### Keyframes

A diferencia de las transiciones no se espera a que suceda un cambio en el estado del elemento. Por eso para usar animaciones necesitamos *keyframes* que describirán el comportamiento que tendrá la animación durante su periodo de ejecución.

Se definen de la siguiente manera:

```css
@keyframes mi-animacion {
    0% {
        width: 10px;
        height: 10px;
        background-color: red;
	}
    25% {
        width: 200px;
    }
    50% {
        height: 200px;
    }
    75% {
        width: 100px;
        height: 100px;
    }
    100% {
        width: 200px;
        height: 100px;
        background-color: green;
    }
}
```

Así se vera la animación aplicada a un elemento

![ejemplo timing function](./images/ejemplo-keyframes.gif)

[Ejemplo en vivo](https://uqbar-project.github.io/css-12-transiciones-y-animaciones/keyframes.html)

### Ejemplo animación inicial

En este ejemplo vamos a tomar el ejemplo de medidas espaciales y vamos a agregar una animación de inicio que puede servir para presentar la información secuencialmente al usuario.

![ejemplo animación inicial](./images/ejemplo-animacion-inicial.png)

Vamos a utilizar una animación reutilizable a todos los elementos que quiera.

```css
@keyframes aparecer {
  0% {
    opacity: 0;
    transform: translate(100px, 0);
  }
  25% {
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
.material_elemento,
.video_contenedor,
.testimonio_elemento,
hr {
  animation: aparecer 1.2s;
}
```

![ejemplo animación inicial durante](./images/ejemplo-animacion-inicial-durante.gif)

Una de las ventajas que podemos observar es que la animación empieza a reproducir cuando termina de cargar los elementos. Ahora puedo controlar el orden en el cual se muestran individualmente.

```css
.material_elemento,
.video_contenedor,
.testimonio_elemento,
hr {
    animation: aparecer 1.2s;
    animation-fill-mode: both;
    /* Necesario para que los elementos tomen los valores iniciales durante el delay */
}
.material_elemento:nth-child(1) {
    animation-delay: 0;
}
.material_elemento:nth-child(2) {
    animation-delay: 0.5s;
}
.material_elemento:nth-child(3) {
    animation-delay: 1s;
}
hr:nth-of-type(1),
.video_contenedor {
    animation-delay: 1.5s;
}
hr:nth-of-type(2),
.testimonio_elemento:nth-child(1) {
    animation-delay: 2s;
}
.testimonio_elemento:nth-child(2) {
    animation-delay: 2.5s;
}
.testimonio_elemento:nth-child(3) {
    animation-delay: 3s;
}
```

Y asi queda la carga inicial de la página:

![ejemplo animación inicial despues](./images/ejemplo-animacion-inicial-despues.gif)

### Propiedades

#### *animation-name*:
Especifica el nombre de la animación que es definida por la regla *@keyframes*.

#### *animation-duration*:
Similar a *transition-duration*, especifica cuanto tiempo durara una iteración de la animación. Utiliza las unidades `s`
para segundos y `ms` para milisegundos.

#### *animation-delay*:
Similar a *transition-delay*, especifica cuanto tiempo tomara la animación en empezar y las siguientes veces si tiene mas de una iteración. Utiliza las unidades `s`
para segundos y `ms` para milisegundos.

#### *animation-timing-function*:
Similar a *transition-timing-function*, esto permite establecer una curva de aceleración para que la velocidad de la animación pueda variar a lo largo de su duración.

#### *animation-iteration-count*:
Especifica la cantidad de veces que la animación es reproducida. Se puede definir la cantidad de veces o *infinite* para que la reproduzca indefinidamente.

#### *animation-direction*:
Indica si debe reproducirse normalmente o invertir la dirección de la animación. Adicionalmente se puede especificar que intercambie la dirección por cada iteración.

Un pequeño ejemplo para ilustrar su uso.

```css
.foto_normal {
    transform-origin: center center;
    animation: rotacion-pelota 3s 3 ease-in-out;
    animation-direction: alternate;
}

@keyframes rotacion-pelota {
    from { /* from equivale a 0% */
        transform: translate(-100px, 0) rotate(0deg);
    }
    to { /* to equivale a 100% */
        transform: translate(100px, 0) rotate(360deg);
    }
}
```

![ejemplo animation direction](./images/ejemplo-animation-direction.gif)

#### *animation-fill-mode*:
Como vemos en el ejemplo de *animation-direction* al termina la animación el elemento deja de tomar los valores de la animacion y esta propiedad permite indicar si quiero que mantenga los valores una vez terminada o antes de que empiece si tiene un valor de *animation-delay*.

Y modificando este valor quedaria asi
```css
.foto_normal {
    transform-origin: center center;
    animation: rotacion-pelota 3s 3 ease-in-out;
    animation-direction: alternate;
    animation-fill-mode: forwards;
}
```

![ejemplo fill mode](./images/ejemplo-animation-fill-mode.gif)

#### *animation-play-state*:
Determina si una animación está en ejecución o en pausa.

Si quiero pausar la animación al poner el mouse sobre el elemento puedo hacerlo de esta manera.
```css
.foto_normal:hover {
  animation-play-state: paused;
}
```

![ejemplo play state](./images/ejemplo-animation-play-state.gif)


## Material adicional
[Documentación de mozilla sobre transiciones](https://developer.mozilla.org/es/docs/Web/CSS/transition)

[Documentación de mozilla sobre animaciones](https://developer.mozilla.org/es/docs/Web/CSS/animation)

[Documentación de w3schools sobre transiciones](https://www.w3schools.com/cssref/css3_pr_transition.asp)

[Documentación de w3schools sobre animaciones](https://www.w3schools.com/cssref/css3_pr_animation.asp)


[Transiciones y animaciones con CSS3](https://www.adictosaltrabajo.com/2012/07/09/css3-transiciones-animaciones/)

[CSS animations on demand](https://animista.net/)

[Understanding motion](https://material.io/design/motion/understanding-motion.html)

[When It Makes Sense to Use Animations in Web Design](https://www.elegantthemes.com/blog/tips-tricks/when-it-makes-sense-to-use-animations-in-web-design)

[The ultimate guide to proper use of animation in UX](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)

[Css animation examples](https://www.mockplus.com/blog/post/css-animation-examples)

[Prefers reduced motion media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
