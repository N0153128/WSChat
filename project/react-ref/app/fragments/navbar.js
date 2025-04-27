import { Box, Center, Breadcrumb } from '@chakra-ui/react';
import { VscHome } from 'react-icons/vsc';
import { PiGitlabLogoSimpleFill } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { GrTest } from 'react-icons/gr';
import { GiInfo } from 'react-icons/gi';
import { TiBusinessCard } from "react-icons/ti";

export default function Navbar() {
    return (
        <Center fontWeight="xl">
        <Box background="gray.900" width="100%" height="40px" rounded="sm" m="2" p="2">
            <Center>
                <Breadcrumb.Root size="lg">
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                VoidBot
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#"> 
                                Docs <GiInfo />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="https://github.com/N0153128/VoidBot">
                                Source <FaGithub />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                Clients <TiBusinessCard/>
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>

                    </Breadcrumb.List>
                </Breadcrumb.Root>
            </Center>
        </Box>
        </Center>
    )


}