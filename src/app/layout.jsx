// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Demo: Materio - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Materio Dashboard Free - NextJS. Now, updated with lightning-fast routing powered by MUI and App router.'
}

const RootLayout = ({ children }) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <style>@import url(&#39;https://fonts.googleapis.com/css2?family=Play:wght@400;700&amp;display=swap&#39;);</style>
      <body className='flex is-full min-bs-full flex-auto flex-col play-regular'>{children}</body>
    </html>
  )
}

export default RootLayout
