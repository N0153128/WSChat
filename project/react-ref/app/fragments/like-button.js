'use client';

import { useState } from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';


export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
      }

      return (
        <HStack>
        <Button variant="surface"onClick={handleClick}>Like {likes}</Button>
        </HStack>
      );
}
