import Link from "next/link";
import { FaPlayCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className=''>
        <Link href='/'>Text</Link>
      </div>
      <nav>
        <Link href='/'>Movies</Link>
        <Link href='/'>Series</Link>
        <Link href='/'>Kids</Link>
      </nav>
    </header>
  );
}

export default Header;