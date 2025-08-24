import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () =>{
    return (
      <>
        <div className="hero container">
          <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptatum accusamus et, non eveniet dolorum cum officia illum a
              suscipit aut similique aperiam id impedit molestias officiis
              veritatis nostrum asperiores?
            </p>
            <button className="btn">
              Explore More <img src={dark_arrow} alt="dark_arrow" />
            </button>
          </div>
        </div>
      </>
    );
}

export default Hero;