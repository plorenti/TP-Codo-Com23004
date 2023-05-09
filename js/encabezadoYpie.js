/*document.getElementById("header").innerHTML =`
<div class="container-fluid bg-light mb-30">
<div class="row">
   
    <nav class="navbar navbar-expand-lg ">

        <div class="col-lg-0.5 d-none d-lg-block min-height: 50px;">
            <a class="navbar-brand" href="index.html">
                <img src="img/cuatroEstaciones.webp" height="50rem" alt="Inicio">
            </a>
        </div>
    
    
    
        <div class="col-lg-1">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <a href="index.html">
                    <img src="img/CiudadBanner.jpg" class="mx-auto" 
                        alt="Inicio">
                </a>
                <span class="navbar-toggler-icon"></span>

            </button>
        </div>
        <div class="col-lg-10">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"
                            href="quienes-somos.html">Nosotros</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="viajes-personalizados.html" role="button"
                            data-bs-toggle="dropdown">Viajes
                            personzados</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Nacional</a></li>
                            <li><a class="dropdown-item" href="#">Internacional</a></li>
                            <li><a class="dropdown-item" href="#">Turismo Express</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="agencia.html">Agencia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> -->
                </ul>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Busqueda</button>
                </form>

            </div>
        </div>
    </nav>
</div>
</div>
`
document.getElementById("footer").innerHTML=`

<div class="container-fluid bg-light text-secondary mt-5 pt-5">
<div class="row px-xl-5 pt-5">
    <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <h5 class="text-secondary text-uppercase mb-4">CONTACTO</h5>
        <p class="mb-4">Para una atencion personalizada puede comunicarse con nosotros mediante los siguientes medios de comunicacion </p>
        <p class="mb-2"><i class="fa fa-map-marker-alt text-info mr-3" aria-hidden="true"></i> Calle Sin Nombre 123</p>
        <p class="mb-2"><i class="fa fa-envelope text-info mr-3" aria-hidden="true"></i> codoAcodo@gmail.com</p>
        <p class="mb-0"><i class="fa fa-phone-alt text-info mr-3" aria-hidden="true"></i> +54 12345678</p>
    </div>
    <div class="col-lg-8 col-md-12">
        <div class="row">
            <div class="col-md-4 mb-5">
                <h5 class="text-secondary text-uppercase mb-4">AGENCIA</h5>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Inicio</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Nosotros</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Viajes</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Blog</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Redes</a>
                    <a class="text-secondary" href="contacto.html"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Contacto</a>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <h5 class="text-secondary text-uppercase mb-4">MI CUENTA</h5>
                <div class="d-flex flex-column justify-content-start">
                   <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Inicio</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Nosotros</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Productos</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Nuevo ingreso</a>
                    <a class="text-secondary mb-2" href="#"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Redes</a>
                    <a class="text-secondary" href="https://wa.me/123456678?text=Hola%20solicito%20informaci&oacute;n%20sobre" target="_blank"><i class="fa fa-angle-right mr-2" aria-hidden="true"></i>Contacto</a>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <h5 class="text-secondary text-uppercase mb-4 ">BOLETIN INFORMATIVO</h5>
                <p class="caja-seguir">Para saber más sobre de nosotros te invitamos a que nos sigas</p>
                    <div class="input-group ">
                        <div class="input-group-append">
                             <button class="btn  btn-info" id="caja-seguir "> <a href="https://wa.me/123456678?text=Hola%20solicito%20informaci&oacute;n%20sobre" target="_blank" class="btn text-white"> Contactanos para info</a></button>
                        </div>
                    </div>
                <h6 class="text-secondary text-uppercase mt-4 mb-3">Nuestras Redes</h6>
                <div class="d-flex caja-seguir">
                    
                    <a class="btn  btn-info btn-square mr-2" href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a class="btn  btn-info btn-square" href="#" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row border-top mx-xl-5 py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
    <div class="col-md-6 px-xl-0">
        <p class="mb-md-0 text-center text-md-left text-secondary">
            © <a class="text-info" href="index.html">Agencia Aconcagua</a>. Todos los derechos reservados. Diseñada
            por
            <a class="text-info" href="#">Grupo 4</a>
        </p>
    </div>
    <div class="col-md-6 px-xl-0 text-center text-md-right">
        <img class="img-fluid" src="img/payments.png" alt="">
    </div>
</div>
</div>

`

*/