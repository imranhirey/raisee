import { Button, Stack, Switch } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Header = ({
    menus=true
}) => {
    return (
        <div
        style={{
            width: '100%',
            height: '150px',
            display: 'flex',
        }}
        >
            <div 
            style={{
                display: 'flex',
                flex: 0.3,
                alignItems: 'center',
            }}
            >
                <Image
                src="/logo.png"
                alt="logo"
                width={300}
                height={300}
                
                />
            </div>
           {
            menus?<>
             <div 
             style={{
                display: 'flex',
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
               <Stack direction='row' spacing={4}>
  
  <Button colorScheme='blue' variant='outline'>
   How it works
  </Button>
  <Button colorScheme='blue' variant='outline'>
    About
  </Button>
  <Button colorScheme='blue' variant='outline'>
    Contact
  </Button>

</Stack>
            </div>
            <div 
             style={{
                display: 'flex',
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
               <Button colorScheme='blue'>Login</Button>
              
               
            </div>
            </>:null
           }
           
            
        </div>
    );
};

export default Header;