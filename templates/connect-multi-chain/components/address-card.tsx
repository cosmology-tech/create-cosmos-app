import React from "react";
import {
    Box,
    Text,
    useColorModeValue,
    Flex,
    Button,
    Icon,
    Link,
    useClipboard,
    Skeleton,
    Center,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";


export const ConnectedShowAddress = ({
    username,
    showLink,
    address,
    isLoading,
}: {
    username: string,
    showLink: boolean,
    address: string,
    isLoading: boolean,
}) => {
    const { hasCopied, onCopy } = useClipboard(address);

    return (
        <Center>
            <Box
                w="full"
                maxW="xl"
                borderRadius="lg"
                boxShadow="inner"
                bg={useColorModeValue("gray.50", "whiteAlpha.200")}
                p={4}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    px={{ base: 2, sm: 3 }}
                    mb={2}
                >
                    {isLoading ? (
                        <Skeleton w="full" maxW="2xs" h={8} />
                    ) : (
                        <Flex flexGrow={1} align="center">
                            <Icon as={IoWallet} mr={2} />
                            <Text
                                fontSize={{ base: "lg", sm: "xl", md: "xl" }}
                                fontWeight="semibold"
                            >
                                {username ? username : "user not identified yet"}
                            </Text>
                        </Flex>
                    )}
                    {showLink && (
                        <Link href="#" isExternal>
                            <Icon as={FiExternalLink} mx={1} />
                        </Link>
                    )}
                </Flex>
                <Button
                    w="full"
                    borderRadius="full"
                    boxShadow="base"
                    bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
                    px={{ base: 3, md: 4 }}
                    py={1}
                    onClick={() => onCopy()}
                    isLoading={isLoading}
                    isDisabled={address.length === 0 ? true : hasCopied}
                    rightIcon={<FaRegCopy />}
                >
                    <Text
                        maxW={{ base: 40, md: "lg" }}
                        position="relative"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="normal"
                        letterSpacing="0.4px"
                        title={address}
                        height="1.25em"
                        whiteSpace="break-spaces"
                        overflow="hidden"
                        _before={{
                            content: "attr(title)",
                            width: { base: "50%", sm: 0 },
                            float: "right",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            direction: "rtl",
                        }}
                        _hover={{
                            cursor: "inherit",
                        }}
                    >
                        {address ? address : "address not identified yet"}
                    </Text>
                </Button>
            </Box>
        </Center>
    );
};