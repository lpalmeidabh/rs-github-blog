import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Issues } from './pages/Issues'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Issues />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
