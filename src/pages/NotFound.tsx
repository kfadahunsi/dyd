import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router'

export default function NotFound() {
    const navigator = useNavigate()

    function handleHome(){
        navigator("/")
    }
     
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='h1 mb-5'>OOPS!</h1>
        <p className='mb-2'>We cannot find the page you are looking for.</p>
        <Button onClick={handleHome}>Return home</Button>
    </div>
  )
}
