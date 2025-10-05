import CustomerDashboard from "./components/Consumerstats";
import SwitchCarousel from "./components/SwitchCarousel";

function App() {
  return (
    <div className=" roboto-flex bg-white/35 ">
      <SwitchCarousel />
      <CustomerDashboard />
    </div>
  );
}

export default App;
