import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
        <h3>Boulangerie</h3>
        <div>
            <button>Tortas</button>
            <button>Patiserie</button>
            <button>Panaderia</button>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar