import './App.css';
import NavBar from "./components/NavBar";

function App() {
  let nombreTienda = "SHOES SHOP"
  return (
      <>
        <div className="row">
            <div className="col-lg-12">
                <NavBar title={nombreTienda} />
            </div>
        </div>
      </>
  );
}

export default App;
