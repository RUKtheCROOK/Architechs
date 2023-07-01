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
                    <h5>The site's intention</h5>
                    <p>I wanted something that would allow projects to be bid on, messages to be sent and recieved, and have a feed with posts that were able to be liked</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/flatten.webp" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                    <h5>What I wanted to learn</h5>
                    <p>I learn as much as I could so I opted to try and make everything from scratch with as little help as possible from the internet</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/p0d1nww7.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                    <h5>What I learned</h5>
                    <p>The organization of the project is the hardest part. The coding was mostly smooth sailing, but how data is stored and recieved needs to be carfully thougth out</p>
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
    <div className="card mt-1 ms-1 me-1" style={{ width: '18rem' }}>
      <img src="/images/gang-aqua-451086435-56a02fca3df78cafdaa06fee.jpg" className="card-img-top" alt="Architecture News" />
      <div className="card-body">
        <h5 className="card-title">World's Tallest Skyscraper Unveiled</h5>
        <p className="card-text">Architectural marvel "Infinity Tower" has been revealed, soaring to a height of 3,000 feet. It sets a new record as the tallest building in the world, surpassing the previous titleholder by 500 feet.</p>
        <a href="#" className="btn btn-dark">Read More</a>
      </div>
    </div>
    <div className="card mt-1 ms-1 me-1 hide2" style={{ width: '18rem' }}>
      <img src="/images/p0d1nww7.jpg" className="card-img-top" alt="Architecture News" />
      <div className="card-body">
        <h5 className="card-title">Floating Cities: The Future of Urban Living</h5>
        <p className="card-text">In an ambitious project, architects are designing fully self-sustainable floating cities. These cities aim to address the challenges of rising sea levels and overpopulation, offering a unique solution for the future.</p>
        <a href="#" className="btn btn-dark">Read More</a>
      </div>
    </div>
    <div className="card mt-1 ms-1 me-1 hide" style={{ width: '18rem' }}>
      <img src="/images/scale.webp" className="card-img-top" alt="Architecture News" />
      <div className="card-body">
        <h5 className="card-title">Revolutionary Green Building Material Discovered</h5>
        <p className="card-text">Scientists have developed a groundbreaking eco-friendly building material that absorbs carbon dioxide from the air. This innovation has the potential to revolutionize the construction industry and combat climate change.</p>
        <a href="#" className="btn btn-dark">Read More</a>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Home;