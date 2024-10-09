'use client'

import { Title } from '../../components/ui/title'

export default function Page({ params }) {
  return (
    <>
      <Title>Repository page</Title>
      <p>My Repository: {params.slug}</p>
    </>
  )
}
