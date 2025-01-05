import React, { useEffect } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import InsightsCard from "./components/InsightsCard";
import Navbar from "./components/Navbar";
import saveResponseToFirestore from "./Firebase/saveResponseToFirebase";

const response = {
  heading: "10 Insights from Data Analysis",
  content:
    "1. The majority of observations in the dataset have an oxygen saturation of 93%.\n" +
    "2. The data was collected on July 6th, 2021.\n" +
    "3. The data is considered final and complete.\n" +
    "4. The code for oxygen saturation is 2708-6.\n" +
    "5. The code for oxygen saturation by pulse oximetry is 59408-5.\n" +
    "6. The data falls under the category of clinical observations.\n" +
    "7. The data measures basic bodily functions such as blood pressure, heart rate, and respiratory rate.\n" +
    "8. The data also includes measurements for height, weight, body mass index, head circumference, and body surface area.\n" +
    "9. The data was collected using pulse oximetry.\n" +
    "10. The data was collected from a single source, identified by the identifier value of a-80000.vitalamb-162413.",
};

const App: React.FC = () => {
  const [data, setData] = React.useState<any>(null);
  const [anamolies, setanalomies] = React.useState<any>(null);

  useEffect(() => {
    alert(process.env);
    alert(process.env.REACT_APP_FETCH_API_URL);
    try {
      const fetchResponse = async (query: string) => {
        const response = await fetch("http://127.0.0.1:6660/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({
            query:
              // "Give me 5 outliers, anamolies or any insights from my input data. tell me about in one line for each",
              // "Summaries should include key health indicators (e.g., trends, anomalies, high-risk areas)",
              query,
            // "give me an abstact on data insights",
          }),
        });

        // Await the parsed JSON response
        const info = await response.json();
        console.log(info.response);
        return info.response;
      };
      fetchResponse(
        "Summaries should include key health indicators (e.g., trends, anomalies, high-risk areas)"
      ).then((response) => {
        setData(response);
        saveResponseToFirestore(response);
      });
      fetchResponse(
        "Give me 5 outliers, anamolies or any insights from my input data. tell me about in one line for each"
      ).then((response) => {
        setanalomies(response);
      });
    } catch (error) {
      setData({
        heading: "Error",
        content: "An error occurred while fetching the data.",
      });
    }
  }, []);
  return (
    <ChakraProvider>
      <Navbar />
      <Box p={4}>
        {data?.heading && data?.content && <InsightsCard response={data} />}
        {anamolies?.heading && anamolies?.content && (
          <InsightsCard response={anamolies} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;
