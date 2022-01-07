import Link from "next/link";
import ThemeToggle from "./ThemeToggle"
export default function NavBar(){
  return(
    <nav className='flex justify-between '>
      <Link href='/'><a className='font-semibold text-xl'>Kevin</a></Link>
      <ul className='flex space-x-5 text-xl'>
        <li>
          <Link href='/'>Works</Link>
        </li>
        <li>
          <Link href='/'>About</Link>
        </li>
        <li>
          <Link href='/'>Posts</Link>
        </li>
      </ul>
     <ThemeToggle/> 
    </nav>
  )
}
