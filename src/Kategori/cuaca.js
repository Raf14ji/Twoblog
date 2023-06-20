import { KontenCarousel } from "../Komponen/Carousel"
import { KomponenCard } from "../Komponen/Card"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image6 from "../assets/image6.jpg"
import { KomponenFooter } from "../Komponen/footer"

export const CuacaPage = () => {
    return (
        <div>
            <KontenCarousel />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Cuaca</h1>
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image2} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image3} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image6} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image3} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image6} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image2} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <KomponenFooter/>
            </section>
        </div>
    )
}