import Typical from "react-typical";

const Center_Text = () => {
  return (
    <h2>
      <Typical
        steps={["Hello!", 1000, "HOME Page."]}
        wrapper="h2"
      />
    </h2>
  );
};

export default Center_Text;