'use client';
import LikeButton from './like-button'; 
import { HStack, Button, Stack, Card, Heading, Text } from '@chakra-ui/react';

export default function Post() {
    let arr=[];
   
      let markup = (
        <Stack>
      <Card.Root size="sm" p="2" m="2">
        <Card.Header>
            <Heading>Lorem Ipsum</Heading>
            </Card.Header>
        <Card.Body>
           <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                <br />
                <LikeButton />
        </Card.Body>
                
        </Card.Root>
        </Stack>
        
    );
    for(let i=0; i<3; i++){
        arr.push(markup);
    }
    return arr;
    // }
}