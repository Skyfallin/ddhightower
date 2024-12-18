'use client'

import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FaMagnifyingGlass } from 'react-icons/fa6'

type SearchFormProps = Readonly<{
  initialQuery: string
}>

const SearchForm: React.FC<SearchFormProps> = ({ initialQuery }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { search: initialQuery },
  })
  const router = useRouter()

  const onSubmit = (data: { search: string }) => {
    const trimmed = data.search.trim()
    if (trimmed.length > 0) {
      router.push('/search/' + encodeURIComponent(trimmed))
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <InputGroup width={{ base: '200px', md: '300px' }}>
          <InputLeftElement pointerEvents="none">
            <FaMagnifyingGlass color="#33302e" />
          </InputLeftElement>
          <Input
            {...register('search')}
            borderColor="#33302e"
            placeholder="Search..."
            rounded="full"
            paddingLeft="2.5rem"
          />
        </InputGroup>
      </FormControl>
    </Box>
  )
}

export default SearchForm
