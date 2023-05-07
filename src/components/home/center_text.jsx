import Typical from "react-typical";

const Center_Text = () => {
  return (
    <h2>
      <Typical
        steps={[
          "Hello!", 2000, "H", 1000,
          "HOME Page", 4000, "H", 2000,
          "Haste makes waste.", 5000, "H", 3000,
          "Health is better than wealth.", 5500, "H", 3500,
          "History repeats itself.", 6000, "H", 4000,
          "Hunger is the best sauce.", 5000, "H", 3000,
          "Honesty is the best policy.",6000,"H", 3000,
          "Hahahahahahahahahahahahahahahahahahahahahahahahahahahahah!!!",
        ]}
        wrapper="h2"
      />
    </h2>
  );
};

export default Center_Text;