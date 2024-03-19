import  { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

 class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className="lg:w-[500px] md:[400px] w-[200px] lg:h-[600px] md:h-[500px] h-[300px]" src="https://i.ibb.co/fvQ0spp/hironpoint.jpg" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img className="lg:w-[500px] md:[400px] w-[200px] lg:h-[600px] md:h-[500px] h-[300px]" src="https://i.ibb.co/98NxTS9/sajek1.jpg" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img className="lg:w-[500px] md:[400px] w-[200px] lg:h-[600px] md:h-[500px] h-[300px]" src="https://i.ibb.co/1GC81XR/sajek2.jpg" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img className="lg:w-[500px] md:[400px] w-[200px] lg:h-[600px] md:h-[500px] h-[300px]" src="https://i.ibb.co/R9T7tqb/amiakhum3.jpg" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img className="lg:w-[500px] md:[400px] w-[200px] lg:h-[600px] md:h-[500px] h-[300px]" src="https://i.ibb.co/mzqXzxV/nafa.jpg" alt="5" />
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        
      </div>
    );
  }
}

export default Example