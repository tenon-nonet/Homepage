import Typical from "react-typical";

const Center_Text = () => {
  return (
    <h2>
      <Typical
        steps={[
          "Hello!", 2000, "H", 1000,
          "HOME Page", 3000, "H", 2000,
          "HikakinTV EVERYDAY", 2000, "H", 1000,"HOME Page",
          // "Health is better than wealth.", 2000, "H", 1000,
          // "History repeats itself.", 2000, "H", 1200,
          // "Hunger is the best sauce.", 2000, "H", 1200,
          // "Honesty is the best policy.",2000,"H", 1200,
          // "He looks tired.", 3000,"He", 3000,"H",3000,
          // "",10000,
          // "W",3000,"WELL...",4000,"WELCAM",300,"WELCOME Page",10000,
          // "",5000,"...",3000,"...Hi",3000,
          // "Hello...", 3000, "H", 3000,
          // "HOME",2000,"HOME Page!"
        ]}
        wrapper="h2"
      />
    </h2>
  );
};

export default Center_Text;