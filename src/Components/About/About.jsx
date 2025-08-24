import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="about_img" className="about-img" />
          <img src={play_icon} alt="play_icon" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrows's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, iusto provident ipsum quo aut iure omnis accusantium. Accusamus doloremque asperiores sit voluptates itaque id, ea odio aspernatur, deserunt repellendus ratione.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolor sit explicabo voluptatum, atque iusto ipsa repellendus earum recusandae ratione minima ipsam adipisci. Dolorem ut autem esse.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ab nesciunt saepe quia odit atque deserunt ratione sequi, officiis recusandae quisquam sint cupiditate aliquam magni id natus temporibus consequatur. Sed necessitatibus maxime dolore facilis tempore.</p>
        </div>
      </div>
    </>
  );
};

export default About;
