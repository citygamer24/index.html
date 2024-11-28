<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-65">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Cumpleaños</title>
    <link rel="stylesheet" href="indexc.css">
    <link rel="stylesheet" href="indexj.js">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
</head>

<body style=" font-family: Arial, sans-serif;">
    <div id="intro-screen">
        <h1>¡Bienvenido a Mi Página!</h1>
        <br>
        <p> De mi Cumpleaños</p>
    </div>
    <div id="main-content"><!--// agrega que al entrar ala pagina s -->
        <h1>
            <div id="carouselExampleIndicators" class="carousel slide" style="max-width: 20%; margin: 0 auto;">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="pastel.jpg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="cumplaños.jpg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="vela.jpg" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>


              <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" onclick="changeContent('home')">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="nav-home" class="nav-link active" href="javascript:void(0)" onclick="changeContent('home')">Home</a>
          </li>
          <li class="nav-item">
            <a id="nav-regalos" class="nav-link" href="javascript:void(0)" onclick="changeContent('regalos')">Regalos</a>
          </li>
          <li class="nav-item">
            <a id="nav-fecha" class="nav-link" href="javascript:void(0)" onclick="changeContent('fecha')">Fecha</a>
          </li>
          <li class="nav-item">
            <a id="nav-error" class="nav-link disabled" href="javascript:void(0)">ERROR</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Secciones de contenido -->
  <div class="container mt-5">
    <!-- Página principal -->
    <div id="home" class="content">
      <h3>Bienvenido a la Página Principal</h3>
      <p>Aquí puedes encontrar información general sobre nuestra página.</p>
    </div>
    <!-- Sección Regalos -->
    <div id="regalos" class="content" style="display:none;">
      <h3>Regalos</h3>
      <p>Esta sección trata sobre opciones para regalar en diferentes ocasiones.</p>
    </div>
    <!-- Sección Fecha -->
    <div id="fecha" class="content" style="display:none;">
      <h3>Fecha</h3>
      <p>En esta sección mostramos información sobre eventos programados o fechas importantes.</p>
    </div>
    <!-- Sección ERROR -->
    <div id="error" class="content" style="display:none;">
      <h3>Error</h3>
      <p>Sección deshabilitada. Esta opción no está disponible.</p>
    </div>
  </div>
                <p>Footer</p>
                <!--footer-->
                <footer class="text-center text-lg-start bg-body-tertiary text-muted">
                    <!--section: social media-->
                    <section class="d-flex justify-content-center justify-content-ig-between p-4 border-bottom">
                        <!--left-->
                        <div class="me-5 d-none d-lg-block">
                            <span>esta es la pagina que estare haciendo en el pasar de los dias para poner aprueba mis habilidades y conocimientos de la escuela</span>
                        </div>
                        <!--left-->
                        <!--right-->
                        <div style="margin: 0 auto;">
                            <svg xmlns="https://www.w3.org/200/svg" width="16" height="16" fill="currentcolor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002"></path>
                            </svg>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script></script>
    <script src="indexj.js"></script>
</body>
</html>
