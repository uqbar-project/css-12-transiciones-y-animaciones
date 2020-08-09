# Transiciones y animaciones


## Las transiciones

Las transiciones no son otra cosa que el efecto de un cambio en el estado de un elemento de forma gradual en un intervalo de tiempo. Cuando hablamos de cambio de estado nos referimos a cambios en los valores de sus propiedades.


Este tipo de efectos producen en una página la sensación de que está *"viva"*.

### Sintaxis

Podemos definir las propiedades de transición o usar usar la propiedad abreviada.

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

Los valores no son obligatorios y el orden de los valores solo importa si ponemos un valor de *delay*, que en ese caso hay que ponerlo despues del valor de *duration*.

![propiedad abreviada transition](./images/transition-propiedad-abreviada.png)


### Ejemplo Articulos

Para los ejemplos lo que vamos a hacer es tomar prestado otros ejemplos y darle vida con transiciones.

Para el primer caso voy a tomar el ejemplo donde aprendieron sobre *padding* y darle una transición. 
![articulos antes](./images/articulos-antes.gif)

#### Preparaciones previas

Para este ejemplo quiero poder poner foco en los distintos articulos, tanto con la tecla tab o con un click. Para esto necesito agregar un tabindex a cada contenedor en orden creciente.

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

Y asi va quedando:

![articulos mediante](./images/articulos-mediante.gif)

#### Agregandole la transición

Ahora si que tengo el estado inicial y el estado final puedo agregarle la transición:

```css
section.container {
    margin: 0px auto;
    transition-property: padding;
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
}

section.container:focus {
    outline: none; /* Le saco el borde que el focus me pone por defecto */
    padding: 40px 0;
}
```

Y asi queda:

![articulos despues](./images/articulos-despues.gif)

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

Empecemos transicionando el brillo

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

Y ya podriamos decir que terminamos... no? No!


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

Notece que transiciona valores por cambios en variables y tambien transiciona con valores no definidos ya que toma los valores por defecto.

![variables despues](./images/variables-despues.gif)

Mmm capaz es un poco mucho...

### Propiedades

#### *transition-property*:
Especifica el nombre de la propiedad a la cual ponerle un efecto de transicion.

```css
.class {
    transition-property: background-color;
}
```

Se pueden espificar propiedades compuestas.
```css
.class {
    /* Incluira padding-top padding-right padding-bottom padding-left */
    transition-property: padding;
}
```

Otra opcion es incluir todas las propiedades.
```css
.class {
    transition-property: all;
}
```

#### *transition-duration*:
Especifa cuanto tiempo tomara la transición entre dos estados diferentes. Utiliza las unidades `s`
para segundos y `ms` para milisegundos.

![ejemplo duration](./images/ejemplo-duration.gif)

#### *transition-delay*:
Especifa cuanto tiempo tomara la transición en empezar. Al igual que *transition-duration* utiliza las unidades `s`
para segundos y `ms` para milisegundos.

![ejemplo delay](./images/ejemplo-delay.gif)

#### *transition-timing-function*:
Esto permite establecer una curva de aceleración para que la velocidad de la transición pueda variar a lo largo de su duración. Hay que aclarar que aunque se modifique la aceleración la duracion permanecera intacta.

Un ejemplo modificando su valor desde la consola de chrome.

![ejemplo timing function](./images/ejemplo-timing.gif)

#### Multiples transiciones

Puedo crear multiples transiciones si separo las propiedades con una coma. Es necesario definir todas las otras propiedades con coma ya que tomara el siguiente valor definido y volvera al primer valor en caso de no tener otro.
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

Las animaciones son bastante parecidas a las transiciones. Ambas tienen en común que actuan sobre los valores de las propiedades de un elemento transformándolos gradualmente en otros valores. Sin embargo, las animaciones ofrecen bastante más control que las transiciones en el proceso de transformación del elemento.

### Sintaxis

### Keyframes

### Propiedades

### El ejemplo


## Docs
https://developer.mozilla.org/es/docs/Web/CSS/transition

https://developer.mozilla.org/es/docs/Web/CSS/transition-duration

https://developer.mozilla.org/es/docs/Web/CSS/transition-delay

https://developer.mozilla.org/es/docs/Web/CSS/transition-timing-function

https://www.w3schools.com/cssref/css3_pr_transition.asp


https://www.adictosaltrabajo.com/2012/07/09/css3-transiciones-animaciones/