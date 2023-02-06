import profile_image from "../images/profile_image.png"

const About = () => {

    const TiltSection = () => {
        const aboutCard = document.querySelector('.about')
        aboutCard.className += ' tilt'
    }

  return (
    <div className="about-container" id="about-container">
        <div options={{max: 10 }} className="about" onMouseOver={TiltSection}>
            <div className="about-description">This is the stack level of the generated box in the current stacking context. The box also establishes a local stacking context. This means that the z-indexes of descendants are not compared to the z-indexes of elements outside this element.</div>
            <div className="about-image-container">
              <img className="about-image" src={profile_image} alt=""></img>
            </div>
        </div>
    </div>
  )
}

export default About
