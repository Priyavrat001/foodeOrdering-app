import { Button } from './ui/button';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {

  const {loginWithRedirect} = useAuth0();

  return (
    <Button variant="ghost" className='font-bold hover:text-orange-500 hover:bg-white' onClick={async()=> await loginWithRedirect()}>
        Log in
    </Button>
  )
}

export default Nav