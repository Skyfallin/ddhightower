'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Textarea,
} from '@chakra-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
        maxW="md"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register('name')} />
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <FormLabel>Message</FormLabel>
          <Textarea {...register('message')} />
        </FormControl>
        <Button
          type="submit"
          alignSelf="flex-start"
          className="bg-text-charcoal-light hover:bg-text-white hover:text-charcoal-light border border-charcoal text-white font-bold duration-200 transition-colors"
          borderRadius="0"
          backgroundColor="#33302e"
          _hover={{ backgroundColor: 'white', color: '#33302e' }}
        >
          Send
        </Button>
      </Box>
      <Box mt={8}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          Email
        </Heading>
        <Link href="mailto:d.d.hightower@gmail.com" color="#990f3d">
          d.d.hightower@gmail.com
        </Link>
      </Box>
    </Box>
  )
}

