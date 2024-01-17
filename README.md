# `Project-Productions`

*Um projeto meu, sobre um site de notícias.* \
`(Tudo nesse projeto tem como objetivo treinar programção, não sendo algo oficial)`

## **By GDT (2023)** 

**Productions** é um site de notícias atualizadas diariamente, buscando informar todos seus usuários com notícias do mundo todo. 

### Feito com Html

```Html
<!DOCTYPE html>
<html lang="pt-br">

<head>
   <title>Productions - Saiba tudo sobre Tecnologia, Ciência, Games, Filmes e séries</title>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
   <link rel="stylesheet" href="main.css" />
   <link rel="icon" href="../Icons/GDT.png" type="image/x-icon" />
</head>

<body>
   <header>
      <a href="../GDT/GDT.html" title="GDT"><img src="../Icons/GDT.png" alt="logo" /></a>
      <a href="Productions.html" title="Productions">
         <h1>Productions</h1>
      </a>
      <button name="serviço" class="head-btn">
         <h4>Produc+</h4>
      </button>
      <button name="opções" class="head-btn">
         <h2>...</h2>
      </button>
   </header>
</body>

</html>
```

### CSS

```CSS
* { 
  margin: 0; 
  padding: 0;
  box-sizing: border-box; 
}

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

::selection {color: #000080; background-color: #0169C7; text-shadow: 0px 0px 18px whitesmoke;}

body { font-family: Verdana, Geneva, Tahoma, sans-serif;}

a:link {text-decoration: none; color: rgb(2, 192, 255);}
a:visited {color: rgb(131, 224, 255);}


header {
  border-top: 8px solid darkblue;
  border-bottom: 10px solid darkblue;
  border-radius: 5px;
  font-size: larger;
  background-image: linear-gradient(rgb(142, 211, 235),rgb(142, 211, 235),lightblue,whitesmoke);
  width: 100%;
  height: 200px;
  display: flex;
}
```

#### ...e um pouco de JavaSCript

```JavaSCript
   const currentTime = new Date();

   const hours = currentTime.getHours();
   const minutes = currentTime.getMinutes();
   const seconds = currentTime.getSeconds();
   const month = currentTime.getMonth() + 1;
   const day = currentTime.getDate(); 
```
