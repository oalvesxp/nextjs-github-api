'use client'

import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container } from './components/ui/container'
import { Title } from './components/ui/title'
import { Form } from './components/ui/form'
import { SubmitButton } from './components/ui/submit-button'

export default function Home() {
  return (
    <Container>
      <Title>
        <h1>
          <FaGithub size={25} />
          Meus Repositórios
        </h1>
      </Title>

      <Form>
        <input type="text" />
        <SubmitButton>
          <FaPlus size={16} color="#f4f4f9" />
          <span className="sr-only">Adicionar repositório</span>
        </SubmitButton>
      </Form>
    </Container>
  )
}
