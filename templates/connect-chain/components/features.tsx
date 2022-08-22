import { LinkIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FeatureProps } from "./types";

export const Product = ({ title, text, href }: FeatureProps) => {
    return (
        <a href={href} target="_blank">
            <Box p={5} shadow='md' borderWidth='1px'
                _hover={{ color: 'purple.500', borderColor: 'purple.300' }}>
                <Heading fontSize='xl'>{title} &rarr;</Heading>
                <Text mt={4}>{text}</Text>
            </Box>
        </a>
    );
};

export const Dependency = ({ title, text, href }: FeatureProps) => {
    return (
        <HStack key={title} align={'top'}>
            <Box color={'purple.500'} px={2}>
                <Icon as={LinkIcon} />
            </Box>
            <VStack align={'start'}>
                <Text fontWeight={600}><Link href={href} target={'_blank'}>{title}</Link></Text>
                <Text color={'gray.600'}>{text}</Text>
            </VStack>
        </HStack>
    )
}