import {useState} from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if (count < stock) setCount(count + 1)
    }

    const restCount = () => {
        if (count > initial) setCount( count - 1)
    }

    return (
        <>
            <div className="card" style={{
                "width": "18rem"
            }}>
                <div className="card-body">
                    <h5 className="card-title">Producto</h5>
                    <div className="row text-center mt-4">
                        <div className="col-3">
                            <button className="btn btn-light" onClick={restCount}>

                                <i className="bi bi-dash"></i>
                            </button>
                        </div>
                        <div className="col-6">
                            { count }
                        </div>
                        <div className="col-3">
                            <button className="btn btn-light" onClick={addCount}>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-outline-dark" onClick={() => onAdd(count)}>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount