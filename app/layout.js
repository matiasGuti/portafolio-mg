import '@/style/globals.css'

export const metadata = {
  title: 'Matias Gutierrez',
  description: 'Pagina Portafolio de Matias Gutierrez',
}

function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;