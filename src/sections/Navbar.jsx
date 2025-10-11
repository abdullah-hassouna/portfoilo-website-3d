import React from 'react'
import { navLinks } from '../constans';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    const NavItems = () => (
        <ul className={'nav-ul'}>
            {navLinks.map((item) => (
                <li key={item.id} className='nav-li'>
                    <a href={item.link} className='nav-li_a'>{item.name}</a>
                </li>
            ))}
        </ul>)

    return (
        <header className=' fixed top-0 left-0 right-0 z-50 bg-black/90 '>
            <div className='max-w-7xl mx-auto'>
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        GlowUP
                    </a>
                    <button onClick={toggleMenu} className='md:hidden text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                        <img src={isMenuOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="menu" className='w-6 h-6' />
                    </button>
                    <nav className='sm:flex hidden'><NavItems /></nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar