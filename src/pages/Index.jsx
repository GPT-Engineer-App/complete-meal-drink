import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                NutriMeal
              </Heading>
              <Text fontSize="xl" mb={6}>
                The complete meal in a drink, packed with 26 essential vitamins and nutrients.
              </Text>
              <Button colorScheme="blue" size="lg">
                Order Now
              </Button>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1594479379002-0844e1812340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcmVwbGFjZW1lbnQlMjBkcmlua3xlbnwwfHx8fDE3MTEyODc2ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="NutriMeal Drink" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose NutriMeal?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Icon as={FaCheckCircle} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Complete Nutrition
              </Heading>
              <Text>NutriMeal contains all the essential nutrients your body needs in a single drink.</Text>
            </Box>
            <Box>
              <Icon as={FaCheckCircle} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                26 Vitamins & Minerals
              </Heading>
              <Text>We've packed NutriMeal with 26 essential vitamins and minerals to support your health.</Text>
            </Box>
            <Box>
              <Icon as={FaCheckCircle} color="green.500" boxSize={8} mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Convenient & Tasty
              </Heading>
              <Text>NutriMeal is a delicious and convenient way to get the nutrition you need on the go.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white" textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Try NutriMeal?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Order now and experience the convenience of a complete meal in a drink.
          </Text>
          <Button colorScheme="white" color="blue.500" size="lg">
            Order Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
