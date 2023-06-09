import React from "react";
import {useEffect, useState, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import Typed from "typed.js";
import Loader from "./Loader";
import "./Sections.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyCarousel from "./Carousel";
import "animate.css";

let lapTop = {
  position: [-0.5, -2, 0],
  rotation: [-0, 1.4, 0.6],
  path: "./3Dmodels/mac_display.gltf",
  scale: 1.4,
  iframeSrc: "https://www.youtube.com/embed/7XgqJwMbczY",
};

function Sections() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  //   const animatedPosition = useSpring({
  //     position: lapTop.position, // Initial position
  //     config: { duration: 500 }, // Animation duration in milliseconds
  //   });

  // typed js Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Games", "3D Webdesign", "3D visualizations"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(event.deltaY < 0);

      setIsScrollingUp(event.deltaY > 0);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Canvas alpha='true' className='canvas'>
						<Loader name={lapTop} />
					</Canvas> */}

      {/* column 01 */}
      <div className='w-100 d-flex flex-column flex-lg-row app'>
        <div className='w-100 '>
          <Canvas alpha='true' className='canvas'>
            <Loader name={lapTop} animate={isScrollingUp} />
          </Canvas>{" "}
        </div>

        {/* column 02 */}
        <div className='w-100 overflow-auto sections'>
          {/* Section01 start */}
          <section className='section-1'>
            <h1>WHO WE ARE ?</h1>
            <p>We are the Creators of </p>
            <div>
              <h1 className='animate__animated animate__zoomIn animate__delay-2s animate__slower'>
                Real Tuk Racing
              </h1>
            </div>
          </section>

          {/* Section2 start */}
          <section className='section-2'>
            <h2>What we do?</h2>

            <div>
              <span className='multiple-text' ref={el}></span>
            </div>
          </section>

          {/* Section3 start */}
          <section className='section-3'>
            <div>
              <h1>Contact Us</h1>
              <form>
                <div className='mb-3'>
                  <label for='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    required
                  />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3'>
                  <label for='exampleInputPassword1' className='form-label'>
                    Massage
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputMassage1'
                    required
                  />
                </div>
                <button type='submit' className='btn btn-secondery button-div'>
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* Section04 start */}
          {/* <section className='section-4'>
            <div>
              <h1>slide 4</h1>
              <p>
                Yes, the query querySelectorAll('div') is correct. It is a
                method in JavaScript that allows you to select multiple elements
                on a web page based on a CSS selector. In this case, the
                selector 'div' is used to select all the elements in the
                document.
              </p>
            </div>
          </section> */}

          {/* section05 start */}
          {/* <section className='section-5'>
            <div>
              <h1>slide 5</h1>
              <p>
                Yes, the query querySelectorAll('div') is correct. It is a
                method in JavaScript that allows you to select multiple elements
                on a web page based on a CSS selector. In this case, the
                selector 'div' is used to select all the elements in the
                document.
              </p>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}

export default Sections;
