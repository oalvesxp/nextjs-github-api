'use client'

import { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Container } from '../../components/ui/container'
import { Owner } from '../../components/ui/owner'
import { Loading } from '../../components/ui/loading'
import { BackButton } from '../../components/ui/back-button'
import { IssuesList } from '../../components/ui/issues-list'
import { PageActions } from '../../components/ui/page-actions'
import api from '../../../src/services/api'

/* <p>My Repository: {params.slug}</p> */
export default function Page({ params }) {
  const [repository, setRepository] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const name = decodeURIComponent(params.slug) /** URL params  */

      try {
        /** Fetch API's */
        const [repoData, issuesData] = await Promise.all([
          api.get(`repos/${name}`),
          api.get(`repos/${name}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ])

        setRepository(repoData.data)
        setIssues(issuesData.data)
        setLoading(false)
        console.log(repository.status)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }

    load()
  }, [params.slug])

  if (loading) {
    return (
      <Loading>
        <h2>Carregando... </h2>
      </Loading>
    )
  }

  return (
    <Container>
      <BackButton href="/">
        <FaArrowLeft size={24} />
        <span className="sr-only">Voltar</span>
      </BackButton>
      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssuesList>
        {issues.map((item) => (
          <li key={item.id}>
            <img src={item.user.avatar_url} alt={item.user.login} />
            <div>
              <strong>
                <a href={item.html_url} target="_blank">
                  {item.title}
                </a>
                {item.labels.map((label) => (
                  <span key={label.id}>{label.name}</span>
                ))}
              </strong>
              <p>{item.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button type="button" onClick={() => {}}>
          Voltar
        </button>
        <button type="button" onClick={() => {}}>
          Avançar
        </button>
      </PageActions>
    </Container>
  )
}
