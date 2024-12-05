<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto</title>
    <link rel="stylesheet" href="Normalize.css">
    <link rel="stylesheet" href="Proyecto.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Funnel+Display&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
</head> 
    <div class="Nav" id="Mynav">
        <a href=<i class="fa-solid fa-cookie-bite" class="Activo">Menu</a>
        <a href="#Intro">Intro</a>
        <a href="#About us">Nosotros</a>
        <a href="#Product">Producto</a>
        <a href="#Video">Video</a>
        <a href="#Clientes">Clientes</a>
        <a href="Proyecto1.html">Galeria</a>
        <a href="#Ubicacion">Ubicacion</a>
        <a href="#Equipo">Equipo</a>
        <a href="#Contact">Contact</a>
        <a href="#Preguntas">Preguntas</a>
        <a href="JavaScrip:void(0);" class="icon" onclick="myfuncion()">
        <i class="fa fa-bars"></i>
        </a>
    </div>
    <section class="intro">
    <div class="hero">
        <h1 id="Intro">Cook'Kies</h1>
        <br>
        <h2>Let Him Cook</h2>
        <br>
        <br>
        <a href="https://example.com" class="btn">Bienvendo</a>
    </div>
    <main>
        <h2 class="new">Intro</h2>
        <p class="new2">
        Nosotros somos pocos pero podemos hacer muchas cosas, en esta pagina tenemos la mision de que tus ojos y tu paladar queden satisfechos con una deliciosa galleta,
        decorada a tu gusto con diferentes sabores y mejores texturas con una experiencia inimaginable. Puedes decorar tu paladar y transmitir el sabor con tus seres queridos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quae soluta iusto molestias illo, sunt necessitatibus asperiores similique dicta nostrum voluptatum aliquam minus ipsa aspernatur quam amet repudiandae omnis quas!
        </p>
        <script>
            function myfuncion(){
                var x = document.getElementById("myNav");
                if(x.className === "Nav"){
                    x.className += "responsive";
                }else{
                    x.className = "Nav";
                }
            }
        </script>
    </main>
    </section>

    <section class="Aboutus">
        <div class="contenedor">
        <h1 class="Sub1" id="About us">Sobre Nosotros</h1>

            <h2 class="sub2">Mision</h2>
            <div class="firstimg"></div>
            <p class="mision">Nuestra misión es que todos disfruten de nuestras deliciosas galletas, ofreciendo una variedad de sabores y brindando una excelente experiencia al cliente. Valoramos la opinión de nuestros usuarios para mejorar continuamente y aspiramos a que nuestras galletas sean las mejores del mercado.
            </p>
            <h2 class="sub3">Vision</h2>
            <div class="segundo"></div>
            <p class="vision">La visión de nuestra empresa de galletas es proporcionar experiencias placenteras y convenientes a los consumidores, enfocándose en productos de alta calidad y un servicio excepcional. Nuestros valores fundamentales incluyen la innovación, el trabajo en equipo, la honestidad y la orientación al cliente, todo orientado a superar las expectativas de nuestros clientes.</p>
</p>

        </div>
    </section>
    <section class="info">

        <h2 id="Product">Nuestro Producto</h2>

    <div class="ingredientes"></div>
    <h2 class="ingre">Ingredientes</h2>
    <p class="ingren">
        Se recolectan los ingredientes o se obtienen de vendedores confiable para eviatr que esten en mal estado y mantener un estado de higiene       
    </p>

    <div class="poder"></div>
    <h2 class="Proceso">Proceso</h2>
    <p class="proces">
        En el proceso es donde la masa se moldea y tambien donde se meten al horno para terminar de ser horneadas solo para despues ser empaquetadas
    </p>

    <div class="holi"></div>
    <h2 class="Packet">Empaquetado</h2>
    <p class="Paquete">Siempre tratamos que nuestro producto se vea presentable incluso en el empaquetado, pensando en como lo puede recibir el publico</p>

    </section>

    <section class="carusel">
        <h1 id="Clientes">Nuestros Clientes</h1>
        <div class="carousel-container">
            <div class="carousel-inner" id="carousel">
                <div class="comment">
                    <div class="profile-section">
                        <img src="cap1.png" alt="Juan Pérez" class="profile-image">
                    </div>
                    <div class="comment-text">
                        <h3>Martin</h3>
                        <p>"¡Un Ecxelente producto, sietnto que no desperdicie el dinero"</p>
                        <div class="rating">
                            ★★★☆☆
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="profile-section">
                        <img src="gojito.jpeg" alt="Ana García" class="profile-image">
                    </div>
                    <div class="comment-text">
                        <h3>Gojo Satoru</h3>
                        <p>"La atención al cliente es de primera. Definitivamente volveré a comprar."</p>
                        <div class="rating">
                            ★★★★★
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="profile-section">
                        <img src="cap2.png" alt="Carlos López" class="profile-image">
                    </div>
                    <div class="comment-text">
                        <h3>Pintor Austriaco con bigote chistoso</h3>
                        <p>"Muy buena calidad y envío rápido. Recomendado 100%."</p>
                        <div class="rating">
                            ★★★★☆
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="profile-section">
                        <img src="lanzaguisantes.jpeg" alt="Maria Fernández" class="profile-image">
                    </div>
                    <div class="comment-text">
                        <h3>El Fotosintesis</h3>
                        <p>"Un servicio increíble, el mejor que he recibido en mucho tiempo."</p>
                        <div class="rating">
                            ★★★☆☆
                        </div>
                    </div>
                </div>
                <div class="comment">
                    <div class="profile-section">
                        <img src="come galletas.jpeg" alt="Maria Fernández" class="profile-image">
                    </div>
                    <div class="comment-text">
                        <h3>Mounstruo Come Galletas</h3>
                        <p>"La vida de un critico es sencilla en muchos aspectos."</p>
                        <div class="rating">
                            ★★★★★ 
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="carousel-controls">
                <button class="control-btn" onclick="prevComment()">❮</button>
                <button class="control-btn" onclick="nextComment()">❯</button>
            </div>
        </div>
    
        <script>
            let currentIndex = 0;
    
            const carousel = document.getElementById("carousel");
            const comments = document.querySelectorAll(".comment");
    
            function nextComment() {
                if (currentIndex < comments.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            }
    
            function prevComment() {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = comments.length - 1;
                }
                updateCarousel();
            }
    
            function updateCarousel() {
                const offset = -currentIndex * 100;
                carousel.style.transform = `translateX(${offset}%)`;
            }
    
            updateCarousel();
        </script>
    </section>

    <section class="equipo">
        <div class="responsive-container-block container">
            <p id="Equipo" class="text-blk team-head-text">
              Equipo
            </p>
            <div class="responsive-container-block">
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="leo.jpg">
                  </div>
                  <p class="text-blk name">
                    Leonardo Sandoval
                  </p>
                  <p class="text-blk position">
                    Bitacora
                  </p>
                  <p class="text-blk feature-text">
                    Encargado de la Bitacora de cada dia
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="Franco.jpg">
                  </div>
                  <p class="text-blk name">
                    Franco Arturo
                  </p>
                  <p class="text-blk position">
                    Codigo
                  </p>
                  <p class="text-blk feature-text">
                    Verificar el funcionamiento del codigo
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="juan.jpg">
                  </div>
                  <p class="text-blk name">
                    Juan Manuel Pinto
                  </p>
                  <p class="text-blk position">
                    Creador de la tabla de errores
                  </p>
                  <p class="text-blk feature-text">
                    Crea la tabla de errores y verifica que se cumpla
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="Pedro.jpg">
                  </div>
                  <p class="text-blk name">
                    Pedro Gael
                  </p>
                  <p class="text-blk position">
                    Encargado del Codigo en general
                  </p>
                  <p class="text-blk feature-text">
                    Creo el codigo desde la parte ya puesta
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="yo.jpg">
                  </div>
                  <p class="text-blk name">
                    Ramiro Ramos
                  </p>
                  <p class="text-blk position">
                    Trello
                  </p>
                  <p class="text-blk feature-text">
                    Encargado de actualizar el trello grupal
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="omar.jpg">
                  </div>
                  <p class="text-blk name">
                    Omar 
                  </p>
                  <p class="text-blk position">
                    Conclucion grupal
                  </p>
                  <p class="text-blk feature-text">
                    Encargado de la inclucion grupal para entregar
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
              <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                <div class="card">
                  <div class="team-image-wrapper">
                    <img class="team-member-image" src="jesus.png">
                  </div>
                  <p class="text-blk name">
                    Jesus Alejandro
                  </p>
                  <p class="text-blk position">
                    Informacion e imagenes
                  </p>
                  <p class="text-blk feature-text">
                    Mando imagenes e informacion del equipo
                  </p>
                  <div class="social-icons">
                    <a href="https://www.twitter.com" target="_blank">
                      <img class="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg">
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                      <img class="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg">
                    </a>
                  <a href="https://www.tiktok.com/@weon108?_t=8rOZYdfBcwy&_r=1">
                    <svg class="tiktok-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 290"><path fill="#FF004F" d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/><path d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/><path fill="#00F2EA" d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/></svg>
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
        <video id="Video" src="cacagada.mp4" controls></video>
        <center>
<div class="ubicacion">
        <iframe id="Ubicacion"
 src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1053.9268391856488!2d-103.4566279405126!3d19.722489340492693!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1732157743705!5m2!1ses!2smx" 
 width="500" 
 height="400" 
 style="border:0;" 
 allowfullscreen="" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
  
        </iframe>
        <p><a href="https://maps.app.goo.gl/dsbM3fwRnzwxmuR8A">
          Nos encontramos por la Avenida Juan Jose Arreola Zuñiga, calle: Vicente Mendilona 26, Loma Bonita, Ciudad Guzman en el municipio de Zapotlan el Grande Mexico.
        </a></p>
</div>
</center>

<section class="FQAs">
  <div class="nuevo-contenedor">
<h2 id="Preguntas" class="title">Preguntas Frecuentes</h2>

<div class="faq">
  <div class="question">                          <!--Primera Pregunta-->
    <h3>Por que lo hicimos?</h3>
    

    <svg width="15" heigth="10" viewBox="0 0 42 25">
      <path 
      d="M3 3L21 21L39 3" 
      stroke="white" 
      stroke-width="7" 
      stroke-linecap="round"/>
    </svg>

  </div>
  <div class="answers">
    <p>
      Decidimos crear Cook'Kies solamente por curiosidad, a como reaccionaria la gente a nuestra idea
    </p>
  </div>
</div>

<div class="faq">                                 <!--Segunda Pregunta-->
  <div class="question">
    <h3>Donde se encuntra?</h3>
    

    <svg width="15" heigth="10" viewBox="0 0 42 25">
      <path 
      d="M3 3L21 21L39 3" 
      stroke="white" 
      stroke-width="7" 
      stroke-linecap="round"/>
    </svg>

  </div>
  <div class="answers">
    <p>
      En la parte de arriba puedes reconocer nuestra ubicacion facilmente
    </p>
  </div>
</div>

<div class="faq">                                 <!--Tercera Pregunta-->
  <div class="question">
    <h3>Que es Cook'Kies?</h3>
    

    <svg width="15" heigth="10" viewBox="0 0 42 25">
      <path 
      d="M3 3L21 21L39 3" 
      stroke="white" 
      stroke-width="7" 
      stroke-linecap="round"/>
    </svg>

  </div>
  <div class="answers">
    <p>
      Cook'Kies es solo una tienda virtual adaptada a la epoca moderna para complacer tu paladar de galletas
    </p>
  </div>
</div>

<div class="faq">                                <!--Cuarta Pregunta-->
  <div class="question">
    <h3>Somos confiables en la elaboracion?</h3>
    

    <svg width="15" heigth="10" viewBox="0 0 42 25">
      <path 
      d="M3 3L21 21L39 3" 
      stroke="white" 
      stroke-width="7" 
      stroke-linecap="round"/>
    </svg>

  </div>
  <div class="answers">
    <p>
      Nosotros siempre demostraremos la confianza que tiene nuestro sitio, siempre esperando lo mejor de nuestros clientes
    </p>
  </div>
</div>

<div class="faq">                               <!--Quinta Pregunta-->
  <div class="question">
    <h3>De que estan hechas las galletas?</h3>
    

    <svg width="15" heigth="10" viewBox="0 0 42 25">
      <path 
      d="M3 3L21 21L39 3" 
      stroke="white" 
      stroke-width="7" 
      stroke-linecap="round"/>
    </svg>

  </div>
  <div class="answers">
    <p>
      De ingredientes artesanales como harina, chispas, leche(deslactosada) y siempre tratamod de expandir nuestro catalogo
    </p>
  </div>
</div>

</div>
<script src="Proyecto.js"></script>
</section>
<br>
<br>

    <section formulario>
  <div class="content">

      <h1 class="logo" id="Contact">Contact <span>Us</span></h1>

      <div class="contact-wrapper animated bounceInUp">
          <div class="contact-form">
              <h3>Contact us</h3>
              <form action="">
                  <p>
                      <label for="Name">FullName</label>
                      <input type="text" name="fullname" id="Name">
                  </p>
                  <p>
                      <label for="Email">Email Adress</label>
                      <input type="email" name="email" id="Email">
                  </p>
                  <p>
                      <label for="Tel">Phone Number</label>
                      <input type="tel" name="phone" id="Tel">
                  </p>
                  <p>
                      <label for="AFF">Affair</label>
                      <input type="text" name="affair" id="AFF">
                  </p>
                  <p class="block">
                     <label >Message</label> 
                      <textarea name="message" rows="3"></textarea>
                  </p>
                  <p class="block">
                      <button>
                          Send
                      </button>
                  </p>
              </form>
          </div>
          <div class="contact-info">
              <h4>More Info</h4>
              <ul>
                  <li><i class="fas fa-map-marker-alt"></i> Baker Street</li>
                  <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                  <li><i class="fas fa-envelope-open-text"></i> contact@website.com</li>
              </ul>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
              <p>Company.com</p>
          </div>
      </div>

  </div>
</section>

<footer>
  <!-- Sección de contacto -->
  <div>
      <h3>Contacto</h3>
      <p>Dirección: Calle Ficticia #565, Ciudad: Guzmán Jalisco, País:México</p>
      <p>Teléfono: +52 8545244</p>
      <p>Email: contacto@Leonardo.com</p>
      <p>Ramiro@.com</p>
      <p>Juan Manuel@.com</p>
      <p>Pedro@.com</p>
      <p>Jesus@.com</p>
      <p>Omar@.com</p>
      <p>Franco@.com</p>



  </div>

  <!-- Sección de enlaces rápidos -->
  <div>
      <h3>Enlaces Rápidos</h3>
      <ul>
          <li><a href="#Intro">Inicio</a></li>
          <li><a href="#Product">Servicios</a></li>
          <li><a href="#About us">Sobre nosotros</a></li>
          <li><a href="#Clientes">Blog</a></li>
          <li><a href="#Contact">Contáctanos</a></li>
      </ul>
  </div>

  <!-- Sección de redes sociales -->
  <div>
      <h3>Síguenos</h3>
      <!-- Footer con los íconos de las redes sociales -->

<a href="https://www.instagram.com" target="_blank" title="Instagram">
<i class="fab fa-instagram"></i>
</a>
<a href="https://www.facebook.com" target="_blank" title="Facebook">
<i class="fab fa-facebook"></i>
</a>
<a href="https://www.twitter.com" target="_blank" title="Twitter">
<i class="fab fa-twitter"></i>
</a>
  </div>

  <!-- Copyright -->
  <div class="copyright">
      <p>&copy; 2024 CooK'Kies@. Todos los derechos reservados.</p>
  </div>
</footer>

<!-- Incluir Font Awesome para los iconos sociales -->
<script src="https://kit.fontawesome.com/a076d05399.js"></script>



</body>
</html>
