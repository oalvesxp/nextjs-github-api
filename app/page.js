'use client'

import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container } from './components/ui/container'
import { Title } from './components/ui/title'
import { Form } from './components/ui/form'
import { SubmitButton } from './components/ui/submit-button'
import { useState } from 'react'

export default function Home() {
  const [repo, setRepo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(repo)
  }

  function handleInputChange(e) {
    setRepo(e.target.value)
  }

  return (
    <Container>
      <Title>
        <h1>
          <FaGithub size={25} />
          Meus Repositórios
        </h1>
      </Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={repo}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaPlus size={16} color="#f4f4f9" />
          <span className="sr-only">Adicionar repositório</span>
        </SubmitButton>
      </Form>
    </Container>
  )
}
