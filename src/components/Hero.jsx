const Hero = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <h2> Name:{props.item["name"]}</h2>
      <p>Age:{props.item["age"]}</p>
    </div>
  );
};

export default Hero;
