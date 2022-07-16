import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  let nombreTienda = "SHOES SHOP"
  return (
      <>
        <div className="row">
            <div className="col-lg-12">
                <NavBar title={nombreTienda} />
                <ItemListContainer />
            </div>
        </div>
      </>
  );
}

export default App;
