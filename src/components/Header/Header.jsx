import "./Header.css";
export default function () {
  const dynamicCore = ["Fundamental", "Crucial", "Core"];
  const changeString = (max) => Math.floor(Math.random() * (max + 1));
  const randomData = dynamicCore[changeString(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomData} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
