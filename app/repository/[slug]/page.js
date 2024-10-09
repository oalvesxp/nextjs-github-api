'use client'

import { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Container } from '../../components/ui/container'
import { Owner } from '../../components/ui/owner'
import { Loading } from '../../components/ui/loading'
import { BackButton } from '../../components/ui/back-button'
import api from '../../../src/services/api'

/* <p>My Repository: {params.slug}</p> */
export default function Page({ params }) {
  const [repo, setRepo] = useState({})
  const [openIssues, setOpenIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const name = decodeURIComponent(params.slug) /** URL params  */

      try {
        /** Fetch API's */
        const [repository, issues] = await Promise.all([
          api.get(`repos/${name}`),
          api.get(`repos/${name}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ])

        setRepo(repository.data)
        setOpenIssues(issues.data)
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
        {/* <img
          src="https://avatars.githubusercontent.com/u/69631?s=200&v=4"
          alt="facebook"
        />
        <h1>Facebok</h1>
        <p>The library for web and native user interfaces.</p> */}
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>
    </Container>
  )
}
