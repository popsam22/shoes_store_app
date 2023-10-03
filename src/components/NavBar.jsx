import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images/index'
import {navLinks} from './index'

const NavBar = () => {
  return (
    <div>
      <header className='py-8 absolute padding-x w-full z-10'>
        <nav className='max-container flex justify-between items-center'>
          <a href='/'><img src={headerLogo} alt='Logo' width={120} height={24}/></a>
        </nav>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className='text-lg font-montserrat leading-normal text-slate-gray'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </header>
    </div>
  )
}

export default NavBar