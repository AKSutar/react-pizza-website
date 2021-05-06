import React, {useState} from "react";
import Navbar from "../Navbar/index.js";
import Sidebar from "../Sidebar/index.js";
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements.js";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <HeroContainer>
        {/* Here the navbar will trigger the above function when it is been clicked  */}
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in just 20 minutes</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    );
};

export default Hero;
