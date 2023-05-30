// this is the home page
import './home.scss'

function Home(){
    return(
        <div className="home">
            <div>
                <div className="container-fluid yellow pt-3 pb-3">
                    <h3 className="logo">Logo</h3>
                    <div className="container text-center">
                        <h1>Welcome to Architechs</h1>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <div className="container text-center"><p>Feed Preview</p></div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/dtKu8DBhmz6itQKE2dRgAW.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/flatten.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/p0d1nww7.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
            <div className="container text-center">
                <p>News</p>
                <div className="container flexbox">
                <div className="card mt-1 ms-1 me-1" styles="width: 18rem;">
                    <img src="/images/gang-aqua-451086435-56a02fca3df78cafdaa06fee.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card mt-1 ms-1 me-1 hide2" styles="width: 18rem;">
                    <img src="/images/p0d1nww7.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card mt-1 ms-1 me-1 hide" styles="width: 18rem;">
                    <img src="/images/scale.webp" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div></div>
        </div>
    )
}

export default Home;