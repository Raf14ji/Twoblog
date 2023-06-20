export const KomponenFooter = () => {
    return (
        <footer class="text-center text-lg-start bg-light text-muted mt-5">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" class="me-4 fw-bold text-reset">
                        TWETTIR
                    </a>
                    <a href="" class="me-4 fw-bold text-reset">
                        FACEBOOG
                    </a>
                    <a href="" class="me-4 fw-bold text-reset">
                        INSTAGRIM
                    </a>
                </div>
            </section>

            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fs-2 font-monospace fw-bold text-warning"></i>TwoBlog
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Magni, unde. 
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Kategori
                            </h6>
                            <p>
                                <a href="/berita" class="text-reset">Berita</a>
                            </p>
                            <p>
                                <a href="/olahraga" class="text-reset">Olahraga</a>
                            </p>
                            <p>
                                <a href="/cuaca" class="text-reset">Cuaca</a>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fas fa-home me-3"></i>Jakarta, Indonesia</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 62 812 3456 789</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4 background-color: rgba(0, 0, 0, 0.05);">
                © 2023 Copyright
            </div>
        </footer>
    )
}