console.log(document.title);


/*![](consola.png)

Aquí hemos ejecutado `document.querySelector('.infocard')` para obtener el primer elemento de todos los que coincidan con dicha ejecución.

Una vez lo tenemos, podemos interactuar con él y obtener la información que nos interese, para poder transformarla o mostrarla tal cual.

1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

2. Cambia el color de fondo de la primera generación de Pokimon.

3. Imprime por consola la URL de la página.

4. Imprime por consola el dominio de la página.

5. Imprime todos los nodos de imagen.

6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

*Premium:*

7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`*/



document.getElementById('gen-1').style.background= 'blue'

console.log(document.URL)

console.log((document.URL).hostname);

document.querySelectorAll('.infocard img').forEach(img => console.log(img));

document.querySelectorAll('img').forEach(img => {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

document.querySelectorAll('.infocard-lg-data.text-muted').forEach(pokiman => {
    if (pokiman.querySelector('.itype.flying')) {
        pokiman.querySelector('.itype.flying').style.backgroundColor= 'red'
        
    }});





