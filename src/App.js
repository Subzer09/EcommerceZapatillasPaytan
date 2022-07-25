import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
function App() {
  let nombreTienda = "SHOES SHOP"
  return (
      <>
        <div className="row">
            <div className="col-lg-12">
                <NavBar title={nombreTienda} />
                <ItemListContainer greeting="Bienvenidos" />
            </div>
        </div>
      </>
  );
}

export default App;
