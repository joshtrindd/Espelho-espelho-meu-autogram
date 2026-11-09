
import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi'
import Header from './components/Header'
import Post from './components/Post'
import posts from './data/posts.json'
import './App.css'

// Perfis que aparecerão nos stories
const stories = [
  { nome: 'bmw_mk4', foto: '/images/avatars/bmwmk4.png' },
  { nome: 'nissan', foto: '/images/avatars/gtr.png' },
  { nome: 'pourshe', foto: '/images/avatars/pourshe.png' },
  { nome: 'cristotj', foto: '/images/avatars/cristotj.jpg' },
  { nome: 'castiel', foto: '/images/avatars/castiel.jpg' },
  { nome: 'bana', foto: '/images/avatars/bana.jpg' }

]

// Perfis sugeridos
const sugestoes = [
  { nome: 'bmw_life', foto: '/images/avatars/bmw.jpg' },
  { nome: 'bana', foto: '/images/avatars/bana.jpg' },
  { nome: 'gabriel', foto: '/images/avatars/gabriel.jpg' }
]

function App() {
  return (
    <div className="app">
      <Header />

      <div className="layout-autogram">

        {/* ESQUERDA: STORIES */}
        <aside className="stories-sidebar">
          <h3>Stories</h3>

          {stories.map((perfil) => (
            <div className="story" key={perfil.nome}>
              <img src={perfil.foto} alt={perfil.nome} />
              <span>{perfil.nome}</span>
            </div>
          ))}
        </aside>

        {/* CENTRO: PUBLICAÇÕES */}
        <main className="feed" aria-label="Feed de publicações">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>

        {/* DIREITA: SUGESTÕES */}
        <aside className="sugestoes-sidebar">
          <h3>Sugestões para você</h3>

          {sugestoes.map((perfil) => (
            <div className="perfil-sugestao" key={perfil.nome}>
              <img src={perfil.foto} alt={perfil.nome} />

              <div className="info-perfil">
                <strong>{perfil.nome}</strong>
                <small>Sugerido para você</small>
              </div>

              <button type="button">Seguir</button>
            </div>
          ))}
        </aside>

      </div>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        
        <button type="button" aria-label="Início"><FiHome /></button>
        <button type="button" aria-label="Pesquisar"><FiSearch /></button>
        <button type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
        <button type="button" aria-label="Atividades"><FiHeart /></button>
        <button type="button" aria-label="Perfil"><FiUser /></button>
      </nav>
    </div>
  )
}

export default App
