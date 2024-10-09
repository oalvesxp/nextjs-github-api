import './global.css'

export const metadata = {
  title: 'App | Git Issues',
  description:
    'App que lista as Issues dos seus repositórios favoritos do Github',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
