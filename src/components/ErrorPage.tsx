import { useRouteError } from "react-router"


export default function ErrorPage() {

    const error = useRouteError()
    console.error(error)
    

  return (
    <div className=''>
        <h1 className='h1'>OOPS!</h1>
        <p className="p">Sorry, something went wrong</p>
        {error instanceof Error && <p>
            <i>{error.message}</i>
        </p>}
    </div>
  )
}
