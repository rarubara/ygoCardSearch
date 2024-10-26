import { Link } from 'react-router-dom'

// menu + logo + login + carrito
const Header = () => {
    return (
        <header className='sticky z-index-999'>
            <nav className='flex justify-between p-4 mx-4 '>
                <img src='menu.svg' alt='menu' className='w-44px mostrar' />
                <Link to="/" className='cursor-pointer'>
                <img src='logo.svg' alt='logo' />
                </Link>
                <section className='flex gap-4 justify-center align-center'>
                    <Link to="/login" className='align-center green-700 decoration-none cursor-pointer'>
                        Login
                    </Link>
                    <img src='cart.svg' alt='cart' className='w-44px cursor-pointer' />
                </section>
            </nav>
        </header>
    )
}

export default Header