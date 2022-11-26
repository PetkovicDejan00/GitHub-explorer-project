import {RepoChoice} from './pages/RepositoryChoice/RepoChoice'
import {Repos} from './pages/Repositories/Repos'
import {RepoPage} from './pages/RepositoryPage/RepoPage'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
          <>
            <Routes>                  
              <Route path="/" element={<RepoChoice />} />
              <Route path="/repositories" element={<Repos />} />
              <Route path="/repository/*" element={<RepoPage />} />
              <Route path="*" element={<h1>Error: Not Found!</h1>} />
            </Routes>
          </>
  )
}

export default App
