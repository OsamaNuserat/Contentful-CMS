import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            dolor impedit sint hic facilis culpa illo repellat, accusantium
            soluta numquam voluptas iusto ut dignissimos, labore deleniti.
            Voluptatibus obcaecati modi voluptatum at deserunt. Rem quidem et
            soluta fuga eveniet deserunt, doloribus adipisci corporis porro
            nihil impedit dolorum recusandae nam libero consectetur?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
