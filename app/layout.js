import '@/style/globals.css';

import Nav from '@/components/Nav';

export const metadata = {
  title: 'Matias Gutierrez',
  description: 'Pagina Portafolio de Matias Gutierrez',
};

function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
