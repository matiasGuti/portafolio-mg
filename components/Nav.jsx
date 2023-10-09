import Link from "next/link";

const Nav = () => {
  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4 md:px-10 px-7'>
        <ul className='w-full flex-center gap-1 font-quicksand text-sm text-gray-700 sm:tracking-[1.8px] sm:gap-5 sm:text-lg lg:gap-12'>
          <li><Link className="nav-menu" href="/">Home</Link></li>
          <li><Link className="nav-menu" href="#">Experiencia</Link></li>
          <li><Link className="nav-menu" href="#">Portafolio</Link></li>
          <li><Link className="nav-menu" href="#">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
