import { KomponenCard } from "./Card"
import { KomponenFooter } from "./footer"
import { KontenCarousel } from "./Carousel"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image8 from "../assets/image8.jpg"

export const MainContent = () => {
    return (
        <>
            <div>
                <KontenCarousel />
                <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Berita</h1>
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image8}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image3}/>                
                        </div>
                    </div>
                </div>
                </section>
                <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Olahraga</h1>
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image8}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                    </div>
                </div>
                </section>
                <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Cuaca</h1>
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                        <div className="col-4 ">
                            <KomponenCard image={image4}/>                
                        </div>
                    </div>
                </div>
                </section>
                <section>
                    <KomponenFooter/>
                </section>
            </div>
        </>
    )
}