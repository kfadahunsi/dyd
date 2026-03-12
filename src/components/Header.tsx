import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <div className='flex justify-between items-center px-5 mt-2'>
        <img src='/dydsmall.jpeg' className='h-10 lg:h-15'/>
        <h1 className='h2'>DYD League</h1>
        <ModeToggle/>
    </div>
  )
}