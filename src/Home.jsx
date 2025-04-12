import Header from "./Components/Header.jsx";
import "./style/Global.css";
import Footer from "./Components/Footer.jsx";
import Content from "./Components/Content.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="body">
        <Content />
      </div>
      <Footer />
    </main>
  );
}
