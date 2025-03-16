import { Box, Center, Breadcrumb } from '@chakra-ui/react';
import { VscHome } from 'react-icons/vsc';
import { PiGitlabLogoSimpleFill } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { GrTest } from 'react-icons/gr';
import { GiInfo } from 'react-icons/gi';

export default function Navbar() {
    return (
        <Center fontWeight="xl">
        <Box background="gray.900" width="100%" height="40px" rounded="sm" m="2" p="2">
            <Center>
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                N0153
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                Home <VscHome />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />   

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#"> 
                                About <GiInfo />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                Blog <PiGitlabLogoSimpleFill />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                Projects < FaGithub/>
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />

                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">
                                Demos <GrTest />
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>
            </Center>
        </Box>
        </Center>
    )


}