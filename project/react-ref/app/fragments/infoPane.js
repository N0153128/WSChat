'use client';
import { HStack, Button, Stack, Card, Heading, Text, Code, Blockquote, Link,Kbd } from '@chakra-ui/react';
import { Markdown } from 'react-markdown';

export default function Post() {
    let arr=[];
    let id = 0;
      let markup = (
        <Stack>
      <Card.Root size="sm" p="2" m="2" background={"gray.900/0"} borderTop="None" borderLeft="None" borderRight="None" color="fg.muted">
        <Card.Header>
            <Heading>Voidbot</Heading>
            </Card.Header>
        <Card.Body>
           <Text>
           Lorem ipsum <Kbd>Ctrl+Alt+Delete</Kbd> dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dui hendrerit,
            eleifend tortor id, <Link variant="underline" href="#" color="teal.600">lobortis ipsum</Link>. Aenean placerat tristique arcu, vitae accumsan nulla
              urna justo faucibus <Kbd>Ctrl+Alt+Delete</Kbd> lorem, sit amet laoreet elit lorem bibendum tortor. Etiam sagittis neque
               et lacus vulputate, id feugiat turpis feugiat. Aliquam consequat dui ac leo pretium tincidunt.<br /> <br />
                <Code>Nulla nec leo leo. Proin tristique diam nec ligula euismod</Code> posuere. Sed dapibus nunc non libero 
                mattis, sed cursus ex ullamcorper. Aenean ut enim sed massa aliquet commodo. Mauris vehicula et
                 magna vitae pharetra. 

           </Text>
                <br />
        </Card.Body>
                
        </Card.Root>
        </Stack>
        
    );
    arr.push(markup);
    return arr;
    // }
}