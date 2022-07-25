import ItemCount from "./ItemCount";

function ItemListContainer({greeting}) {

    const onAdd = (cant) => {
        console.log(`Has agregado ${cant} item al carrito!!!`)
    }

    return (
        <>
            <main className="row">
                <div className="col-12">
                    <h1>{ greeting }</h1>
                </div>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </main>
        </>
    )
}

export default ItemListContainer