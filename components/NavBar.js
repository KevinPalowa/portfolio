import Link from "next/link";

export default function NavBar(){
  return(
    <nav className='flex justify-between bg-[#3b4252]'>
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
    </nav>
  )
}
