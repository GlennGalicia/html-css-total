# NOTAS GENERALES

## Box Sizing
Define el ancho(width) para un elemento HTML, si añades paddings no sumará al ancho definido, sino que dentro ajustara el contenido.

## Display
Existen 5 tipos de displays en CSS, en Block,
inline e inline-block(básicos). Cada elemento HTML posee
un tipo de display por defaul, ejemplo:

La etiqueta "a" por default establece display: inline
mientras que un parrafo "p" establece display: block

Al implementar display: block se puede implementar width y heigh.

## Flexbox

### flex-direction 
Si tu flex-direction es row, justify-content será utilizado para alienar contenido horizontalmente, ya sea al centro, a la izquierda o derecha.

Si tu flex-direction es colum, justify-content será utilizado para alinear el contenido verticalmente, ya sea al inicio, centro o al final.

### align-items
Si tu flex-direction es row, align-items será utilizado para alinear el contenido verticalmente, ya sea al centro, al inicio o al final.

Si tu flex-direction es colum, align-items será utilizado para alinear el contenido horizontalmente, ya sea al inicio, centro o al final tomando el papel que hacia justify-content.

## CSS Grid
Te permite definir la ubicación y el tamaño de tu sitio web.

Flexbox es unidimencional(row o colum), pero CSS Grid te permite distribuir elementos en ambas.

## Imagenes
Por defecto cuentan con display inline, se recomienda implementar las siguientes declaraciones: max-width: 100% y display:block

## Fuentes
Una opción es añadir fuentes desde Google Fonts, se enlazan en el head de html y en el archivo CSS se importan las fuentes dentro de los selectores 

## Unidades
Existen 2 tipos de unidades:

Absolutas: las unidades absolutas son las que son exactas, como pueden ser centrimetros o pixeles.

Relativas: las unidades relativas toman su valor en base a otro elemento. Algunos ejemplos: em,rem,vh,vw y porcentajes.

Tienen la ventaja de que se adaptan mejor a diferentes resoluciones y densidades de pixeles, lo cual lo hace mejor opción para la gran cantidad de dispositivos que utilizan los usuarios para navegar.

Utilizar Flexbox para la alineación o distribución de los elementos que estaran dentro de contenedores.

Utiliza CSS Grid para definir el layout de tu sitio web, como pueden ser las columnas o contenedores de elementos.