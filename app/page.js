'use client'

import { Title } from './components/ui/title'
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container } from './components/ui/container'
import { Form } from './components/ui/form'
import { SubmitButton } from './components/ui/submit-button'

export default function Home() {
  return (
    <Container>
      <main>
        <Title>
          <FaGithub size={25} />
          Meus Repositórios
        </Title>

        <Form>
          <input type="text" />
          <SubmitButton>
            <FaPlus size={16} />
            <span className="sr-only">Adicionar repositório</span>
          </SubmitButton>
        </Form>
      </main>
    </Container>
  )
}
