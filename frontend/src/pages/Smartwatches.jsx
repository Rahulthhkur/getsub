import Collection from "./Collection";


// In your other component
const SmartWatchesPage = () => {
  return (
    <Collection 
      initialCategory="Smartwatch"
      title={{ text1: "SMART", text2: "WATCHES" }}
    />
  );
}

export default SmartWatchesPage;