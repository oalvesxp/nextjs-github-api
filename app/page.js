'use client'

import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container } from './components/ui/container'
import { Title } from './components/ui/title'
import { Form } from './components/ui/form'
import { SubmitButton } from './components/ui/submit-button'
import { List } from './components/ui/list'
import { DeleteButton } from './components/ui/delete-button'
import { useState, useCallback, useEffect } from 'react'
import api from '../src/services/api'
import Link from 'next/link'

export default function Home() {
  const [repo, setRepo] = useState('')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  /** DidMount */
  useEffect(() => {
    const storageRepo = localStorage.getItem('@repos')

    if (storageRepo) {
      setList(JSON.parse(storageRepo))
    }
  }, [])

  /** DidUpdate */
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem('@repos', JSON.stringify(list))
    }
  }, [list])

  /** Callback when change state on repo and/or list */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      /** Fetch API and hydrate array data */
      async function submit() {
        setLoading(true)
        setAlert(null)
        try {
          /** If input field is empty */
          if (repo === '') {
            throw new Error('Você precisa indicar um repositório')
          }

          const resp = await api.get(`repos/${repo}`)

          /** If repo is already in list */
          const hasRepo = list.find((r) => r.name === repo)
          if (hasRepo) {
            throw new Error('Você já cadastrou esse repositório')
          }

          const data = {
            id: resp.data.id,
            name: resp.data.full_name,
          }

          setList([...list, data])
          setRepo('')
        } catch (error) {
          setAlert(true)
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
    setAlert(null)
  }

  /** Callback when delete repository */
  const handleDelete = useCallback(
    (id) => {
      const find = list.filter((r) => r.id !== id)
      localStorage.setItem('@repos', JSON.stringify(find))
      setList(find)
    },
    [list]
  )

  return (
    <Container>
      <Title>
        <h1>
          <FaGithub size={25} />
          Meus Repositórios
        </h1>
      </Title>

      <Form onSubmit={handleSubmit} $error={alert}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={repo}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner size={16} color="#f4f4f9" />
          ) : (
            <FaPlus size={16} color="#f4f4f9" />
          )}
          <span className="sr-only">Adicionar repositório</span>
        </SubmitButton>
      </Form>

      <List>
        {list.map((repo) => (
          <li key={repo.id}>
            <DeleteButton onClick={() => handleDelete(repo.id)}>
              <FaTrash size={12} />
              <span className="sr-only">Apagar repositório</span>
            </DeleteButton>
            <div className="list__repo_name">{repo.name}</div>
            <div className="list__icon_detail">
              <Link
                className="list__button_info"
                href={`/repository/${repo.id}`}
              >
                <FaBars size={16} />
                <span className="sr-only">Detalhes do repositório</span>
              </Link>
            </div>
          </li>
        ))}
      </List>
    </Container>
  )
}
