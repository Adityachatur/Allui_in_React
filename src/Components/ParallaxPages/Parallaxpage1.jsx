import React, { useEffect, useRef, useState } from "react";
import "./Parallax.css";

const Parallaxpage1 = () => {
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const titleRef = useRef(null);
  const tabRef = useRef(null);

  const [pageTitle, setPageTitle] = useState("Green Land");
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const scaleValue = 1 + top / 1000;

      // Update page title based on scroll position relative to bg2Ref
      if (bg2Ref.current && titleRef.current) {
        // Update page title based on scroll position
        if (top > 50) {
          setPageTitle("Welcome to Green Land");
        } else {
          setPageTitle("Green Land");
        }

        // Update transformations for bg2 and title
        bg2Ref.current.style.transform = `translateY(${
          top / 2
        }px) scale(${scaleValue})`;
        titleRef.current.style.transform = `translateY(${
          top / 2
        }px) scale(${scaleValue})`;
      }

      // Toggle 'active' class on tabRef based on scroll position
      if (tabRef.current) {
        tabRef.current.classList.toggle(
          "active",
          tabRef.current.offsetTop - top < 550
        );
      }
    };

    // Call handleScroll initially to set correct title and classes
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-body">
      <div className={"banner"}>
        <div className="bg bg-1" ref={bg1Ref}></div>
        <h1 ref={titleRef} className="transform duration-500 ease-out title">
          {pageTitle}
        </h1>
        <div className="bg bg-2" ref={bg2Ref}></div>
      </div>

      <div className={`tab intro`} ref={tabRef}>
        <h2 className="animation-show">React Js</h2>
        <p className="animation-show">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          dignissimos.
        </p>
        <button className="animation-show">Subscribe</button>
      </div>
    </div>
  );
};

export default Parallaxpage1;
