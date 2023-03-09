import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  // next params 
  // get the params from the url using next router
React.useEffect(() => {
    const router = useRouter()
    const { query } = router
    console.log(query)
})

    
    return (
        <div>
           i am lOGIN  
        </div>
    );
};

export default Login;