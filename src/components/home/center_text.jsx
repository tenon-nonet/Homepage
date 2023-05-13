import Typical from "react-typical";

const Center_Text = () => {
  return (
    <h2>
      <Typical
        steps={[
          "Hello!", 2000, "H", 1000,
          "HOME Page", 3000, "H", 2000,
          "HikakinTV EVERYDAY", 2000, "H", 1000,"HOME Page",
        ]}
        wrapper="h2"
      />
    </h2>
  );
};

export default Center_Text;