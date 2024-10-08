'use client'

import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container } from './components/ui/container'
import { Title } from './components/ui/title'
import { Form } from './components/ui/form'
import { SubmitButton } from './components/ui/submit-button'
import { useState, useCallback } from 'react'
import api from '../src/services/api'

export default function Home() {
  const [repo, setRepo] = useState('')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  /** Callback when change state on repo and/or list */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      /** Fetch API and hydrate array data */
      async function submit() {
        setLoading(true)
        try {
          const resp = await api.get(`repos/${repo}`)
          const data = {
            name: resp.data.full_name,
          }

          setList([...list, data])
          setRepo('')
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

      submit()
    },
    [repo, list]
  )

  /** handle when change input field */
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

        <SubmitButton loading={loading ? 1 : 0}>
          <FaPlus size={16} color="#f4f4f9" />
          <span className="sr-only">Adicionar repositório</span>
        </SubmitButton>
      </Form>
    </Container>
  )
}
