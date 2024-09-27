<template>
    <div id="app" class="bg-dark text-white">
        <!-- Navbar -->
        <nav
            class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top"
        >
            <div class="container">
                <a class="navbar-brand fw-bold text-white" href="#">NeoLogic</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#about"
                                >Sobre</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#features"
                                >Recursos</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#contact"
                                >Contato</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Seção Hero com Gradiente -->
        <section class="hero-section d-flex align-items-center">
            <div class="container text-center text-white">
                <h1 class="display-4 fw-bold">
                    Consultoria de Imagem Pessoal com IA
                </h1>
                <p class="lead">
                    Descubra o futuro do estilo pessoal com soluções de IA de
                    ponta.
                </p>
                <a href="#about" class="btn btn-primary btn-lg">Saiba Mais</a>
            </div>
        </section>

        <!-- Seção Sobre -->
        <section id="about" class="about-section py-5">
            <div class="container">
                <h2 class="text-center text-white mb-4">Sobre a NeoLogic</h2>
                <p class="lead text-center text-white">
                    A NeoLogic está desenvolvendo uma solução inovadora de
                    consultoria de imagem pessoal impulsionada por IA. Nossa
                    tecnologia aprimora o estilo pessoal com recomendações
                    personalizadas baseadas em preferências, metas e identidade.
                </p>
            </div>
        </section>

        <!-- Seção Recursos -->
        <section id="features" class="features-section py-5 bg-dark">
            <div class="container">
                <h2 class="text-center text-white mb-4">Principais Recursos</h2>
                <div class="row text-center">
                    <div class="col-md-4">
                        <i
                            class="bi bi-person-circle feature-icon text-primary"
                        ></i>
                        <h5 class="text-white">Estilo com IA</h5>
                        <p class="text-muted">
                            Receba recomendações de estilo personalizadas com
                            base nas suas preferências e necessidades.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <i
                            class="bi bi-bar-chart feature-icon text-primary"
                        ></i>
                        <h5 class="text-white">
                            Análise de Tendências em Tempo Real
                        </h5>
                        <p class="text-muted">
                            Mantenha-se atualizado com as últimas tendências da
                            moda através de análise em tempo real.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <i
                            class="bi bi-check-circle feature-icon text-primary"
                        ></i>
                        <h5 class="text-white">Guarda-Roupa Personalizado</h5>
                        <p class="text-muted">
                            Planeje seu guarda-roupa de forma eficiente com
                            sugestões personalizadas.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção de Contato com Gradiente -->
        <section id="contact" class="contact-section py-5">
            <div class="container text-center">
                <h2 class="text-white mb-4">Entre em Contato</h2>
                <p class="lead text-white">
                    Quer saber mais ou tem alguma pergunta? Sinta-se à vontade
                    para nos contatar!
                </p>
                <a
                    href="mailto:contact@neologic.com"
                    class="btn btn-outline-light btn-lg"
                    >Contate-Nos</a
                >
            </div>
        </section>

        <!-- Rodapé -->
        <footer class="footer bg-black text-white py-4">
            <div class="container text-center">
                <p>&copy; 2024 NeoLogic. Todos os direitos reservados.</p>
                <a href="mailto:contact@neologic.com" class="text-white"
                    >contact@neologic.com</a
                >
            </div>
        </footer>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    /* Estilos Gerais */
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #121212;
        color: white;
    }

    /* Forçando fundo escuro globalmente */
    .bg-dark {
        background-color: #121212 !important;
    }

    /* Navbar */
    .navbar-brand {
        font-size: 1.8rem;
    }

    .nav-link {
        font-size: 1rem;
        color: white !important;
    }

    .nav-link:hover {
        color: #00c6ff !important;
    }

    /* Seção Hero com Gradiente */
    .hero-section {
        height: 100vh;
        background: rgb(2, 0, 36);
        background: linear-gradient(
            333deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(95, 9, 121, 1) 52%,
            rgba(0, 212, 255, 1) 100%
        );
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .hero-section h1 {
        font-size: 3.5rem;
        margin-bottom: 20px;
    }

    .hero-section p {
        font-size: 1.5rem;
        margin-bottom: 30px;
    }

    .btn-primary {
        background-color: #00c6ff;
        border: none;
    }

    .btn-primary:hover {
        background-color: #007bff;
    }

    /* Seção Sobre */
    .about-section {
        padding: 80px 0;
        text-align: center;
    }

    /* Seção Recursos */
    .features-section {
        background-color: #1c1c1c;
        padding: 80px 0;
    }

    .feature-icon {
        font-size: 3rem;
        margin-bottom: 10px;
    }

    /* Seção de Contato com Gradiente */
    .contact-section {
        background: rgb(2, 0, 36);
        background: linear-gradient(
            333deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(95, 9, 121, 1) 52%,
            rgba(0, 212, 255, 1) 100%
        );
        color: white;
        padding: 80px 0;
        text-align: center;
    }

    .contact-section h2 {
        font-size: 2.5rem;
    }

    .contact-section a {
        border-color: white;
    }

    /* Rodapé */
    .footer {
        background-color: #000;
        padding: 30px 0;
    }

    .footer a {
        color: white;
        text-decoration: none;
    }

    .footer a:hover {
        color: #00c6ff;
    }

    .text-muted {
        color: #cccc !important;
    }
</style>
