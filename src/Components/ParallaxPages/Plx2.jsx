import React from "react";
import img from "../Images/card2.jpeg";
import img1 from "../Images/card1.jpg";
import img2 from "../Images/card9.jpg";

const ParallaxSection = ({ backgroundImage, title }) => (
  <div
    className="parallax-1 flex items-center justify-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      height: "50vh",
    }}
  >
    <div className="parallax-inner py-10 md:py-20 lg:py-40">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold text-white">
        {title}
      </h1>
    </div>
  </div>
);

const ContentSection = ({ title, children }) => (
  <div className="content-section my-10">
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold my-5">
      {title}
    </h2>
    <p className="text-base text-justify md:text-lg lg:text-xl font-semibold py-5 px-4 md:px-10 lg:px-20">
      {children}
    </p>
  </div>
);

const Plx2 = () => {
  return (
    <>
      <section>
        <ParallaxSection backgroundImage={img} title="Parallax 1" />
        <ContentSection title="Parallax effect">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam,
          quis eius libero iste, itaque, eos animi est ullam eaque nulla eveniet
          esse neque perspiciatis suscipit porro similique? Quisquam,
          consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo ipsam, quis eius libero iste, itaque, eos animi est ullam eaque
          nulla eveniet esse neque perspiciatis suscipit porro similique?
          Quisquam, consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illo ipsam, quis eius libero iste, itaque, eos animi
          est ullam eaque nulla eveniet esse neque perspiciatis suscipit porro
          similique? Quisquam, consequatur.
        </ContentSection>

        <ParallaxSection backgroundImage={img1} title="Parallax 2" />
        <ContentSection title="Parallax effect">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam,
          quis eius libero iste, itaque, eos animi est ullam eaque nulla eveniet
          esse neque perspiciatis suscipit porro similique? Quisquam,
          consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae earum velit molestias eos at reprehenderit eaque laboriosam
          quos explicabo. Minus blanditiis porro molestias fugit ratione nemo
          itaque optio dolorem amet? Incidunt, perferendis. Enim maiores
          provident dicta delectus sunt sit praesentium, neque pariatur sint.
          Eligendi quidem, deleniti ab eos, rem facilis quasi inventore
          blanditiis, quos vel voluptatibus quia. Iure nesciunt necessitatibus
          eligendi delectus voluptates magni aliquid fugit vitae consequuntur
          officia deleniti recusandae, nulla laudantium eveniet inventore dolore
          optio adipisci deserunt repellat quos veritatis consectetur? Quisquam
          assumenda a dolor aliquam adipisci necessitatibus consequatur ad et
          iusto totam! Sapiente id quasi excepturi quidem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo ipsam, quis eius libero iste,
          itaque, eos animi est ullam eaque nulla eveniet esse neque
          perspiciatis suscipit porro similique? Quisquam, consequatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Beatae earum velit
          molestias eos at reprehenderit eaque laboriosam quos explicabo. Minus
          blanditiis porro molestias fugit ratione nemo itaque optio dolorem
          amet? Incidunt, perferendis. Enim maiores provident dicta delectus
          sunt sit praesentium, neque pariatur sint. Eligendi quidem, deleniti
          ab eos, rem facilis quasi inventore blanditiis, quos vel voluptatibus
          quia. Iure nesciunt necessitatibus eligendi delectus voluptates magni
          aliquid fugit vitae consequuntur officia deleniti recusandae, nulla
          laudantium eveniet inventore dolore optio adipisci deserunt repellat
          quos veritatis consectetur? Quisquam assumenda a dolor aliquam
          adipisci necessitatibus consequatur ad et iusto totam! Sapiente id
          quasi excepturi quidem.
        </ContentSection>

        <ParallaxSection backgroundImage={img2} title="Parallax 3" />
        <ContentSection title="Parallax effect">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam,
          quis eius libero iste, itaque, eos animi est ullam eaque nulla eveniet
          esse neque perspiciatis suscipit porro similique? Quisquam,
          consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae earum velit molestias eos at reprehenderit eaque laboriosam
          quos explicabo. Minus blanditiis porro molestias fugit ratione nemo
          itaque optio dolorem amet? Incidunt, perferendis. Enim maiores
          provident dicta delectus sunt sit praesentium, neque pariatur sint.
          Eligendi quidem, deleniti ab eos, rem facilis quasi inventore
          blanditiis, quos vel voluptatibus quia. Iure nesciunt necessitatibus
          eligendi delectus voluptates magni aliquid fugit vitae consequuntur
          officia deleniti recusandae, nulla laudantium eveniet inventore dolore
          optio adipisci deserunt repellat quos veritatis consectetur? Quisquam
          assumenda a dolor aliquam adipisci necessitatibus consequatur ad et
          iusto totam! Sapiente id quasi excepturi quidem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo ipsam, quis eius libero iste,
          itaque, eos animi est ullam eaque nulla eveniet esse neque
          perspiciatis suscipit porro similique? Quisquam, consequatur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Beatae earum velit
          molestias eos at reprehenderit eaque laboriosam quos explicabo. Minus
          blanditiis porro molestias fugit ratione nemo itaque optio dolorem
          amet? Incidunt, perferendis. Enim maiores provident dicta delectus
          sunt sit praesentium, neque pariatur sint. Eligendi quidem, deleniti
          ab eos, rem facilis quasi inventore blanditiis, quos vel voluptatibus
          quia. Iure nesciunt necessitatibus eligendi delectus voluptates magni
          aliquid fugit vitae consequuntur officia deleniti recusandae, nulla
          laudantium eveniet inventore dolore optio adipisci deserunt repellat
          quos veritatis consectetur? Quisquam assumenda a dolor aliquam
          adipisci necessitatibus consequatur ad et iusto totam! Sapiente id
          quasi excepturi quidem.
        </ContentSection>
      </section>
    </>
  );
};

export default Plx2;
