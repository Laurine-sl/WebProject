import RestaurantCard from "./Components/RestaurantCard.jsx";
import Header from "./Components/Header.jsx";
import "./style/Global.css";
import Footer from "./Components/Footer.jsx";
import Filter from "./Components/Filter.jsx";

export default function App() {
  return (
    <main>
      <Header />
      <div className="body">
        <Filter />
        <div className="restaurantCard">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}
