import { KomponenCard } from "../Komponen/Card"
import { KontenCarousel } from "../Komponen/Carousel"
import { KomponenFooter } from "../Komponen/footer"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"



export const OlahragaPage = () => {
    return(
        <div>
            <KontenCarousel />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Olahraga</h1>
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image9} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image10} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image11} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image10} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image11} />
                        </div>
                        <div className="col-4 mb-4">
                            <KomponenCard image={image9} />
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