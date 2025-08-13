'use client'

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// contactSchema validates the contact form fields
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
})

// ContactFormData represents the data submitted by the contact form
interface ContactFormData extends z.infer<typeof contactSchema> {}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    const mailtoLink = `mailto:d.d.hightower@gmail.com?subject=${encodeURIComponent(
      'Website Contact'
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )}`
    window.location.href = mailtoLink
    reset()
  }

  return (
    <Box className="container mx-auto px-5 max-w-84rem" py={10}>
      <Heading
        as="h1"
        fontSize={{ base: '4xl', md: '5xl' }}
        fontWeight="bold"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.25)"
        mb={8}
      >
        Contact
      </Heading>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        maxW="lg"
        display="flex"
        flexDirection="column"
        gap={4}
        bg="whiteAlpha.600"
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            {...register('name')}
            bg="white"
            borderColor="#33302e"
            borderRadius="md"
            focusBorderColor="#990f3d"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register('email')}
            bg="white"
            borderColor="#33302e"
            borderRadius="md"
            focusBorderColor="#990f3d"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register('message')}
            bg="white"
            borderColor="#33302e"
            borderRadius="md"
            focusBorderColor="#990f3d"
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          alignSelf="flex-start"
          className="bg-text-charcoal-light hover:bg-text-white hover:text-charcoal-light border border-charcoal text-white font-bold duration-200 transition-colors mb-6 lg:mb-0"
          borderRadius="0"
          backgroundColor="#33302e"
          _hover={{ backgroundColor: 'white' }}
        >
          Send
        </Button>
      </Box>
      <Box mt={8}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Email
        </Heading>
        <Link href="mailto:d.d.hightower@gmail.com" color="#990f3d">
          ddhightower.author@gmail.com
        </Link>
      </Box>
    </Box>
  )
}
