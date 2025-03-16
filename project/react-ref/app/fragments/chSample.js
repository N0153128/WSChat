import { Button, HStack, Text, Theme, Card, Heading } from "@chakra-ui/react"
import Head from "next/head"

export default function Demo() {
  return (
    <HStack>
      <Button variant="surface">Click me</Button>
      <Text appearance="light">Hello world</Text>

        <Card.Root size="md">
            <Card.Header>
                <Heading>Lorem Ipsum</Heading>
            </Card.Header>
            <Card.Body>
                <Text>
                    Hello World
                </Text>
            </Card.Body>
        </Card.Root>
    </HStack>
  )
}