'use client';
import { HStack, Button, Stack, Card, Heading, Text, Code, Blockquote, Link, Kbd, Image } from '@chakra-ui/react';
import { Markdown } from 'react-markdown';

export default function Post() {
    let arr=[];
    let id = 0;
      let markup = (
        <Stack>
      <Card.Root size="sm" p="2" m="2" background={"gray.900/50"} color={"fg.muted"}>
        <Card.Header>
            <Heading><Code>Bot.get_message()</Code></Heading>
            </Card.Header>
        <Card.Body>
           <Text>
           Lorem ipsum <Link variant="underline" href="#" color="teal.600">dolor sit amet, consectetur adipiscing elit</Link>.
            Aliquam sit amet dui hendrerit,
            eleifend tortor id, <Link variant="underline" href="#" color="teal.600">lobortis ipsum</Link>.
             Aenean <Kbd>Ctrl+Alt+Delete</Kbd> placerat tristique arcu, vitae accumsan nulla
               et lacus vulputate, id feugiat turpis <Kbd>Ctrl+Alt+Delete</Kbd> feugiat.
               <Image src='/logo-dark.PNG' /> Aliquam consequat dui ac leo pretium tincidunt.<br /> <br />
                <Code>Nulla nec leo leo. Proin tristique diam nec ligula euismod</Code> posuere. Sed dapibus nunc non libero 
                mattis, sed cursus ex ullamcorper. Aenean ut enim sed massa aliquet commodo. Mauris vehicula et
                 magna vitae pharetra. 
                 <Blockquote.Root><Blockquote.Content>
                 <Link variant="underline" href="#" color="teal.600">Nullam venenatis dui orci</Link>. 
                 Nulla facilisi. Nullam eget lacus at magna tempor faucibus
                  sed ac velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec 
                  tristique congue rutrum. Aliquam eu nisl felis. Nam ligula mi, cursus quis risus sed,
                   viverra finibus risus. <Link variant="underline" href="#" color="teal.600">Etiam volutpat sit amet orci eget</Link> eleifend. Aenean interdum 
                    consectetur, porttitor dignissim leo. Cras tempus leo eu erat aliquam, consectetur 
                    tristique erat fringilla. 
                  </Blockquote.Content></Blockquote.Root>
           </Text>
                <br />
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