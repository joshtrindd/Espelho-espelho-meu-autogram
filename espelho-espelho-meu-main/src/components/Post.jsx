
import { useState } from 'react'
import {
  FiBookmark,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
  FiSend
} from 'react-icons/fi'

function Post({ post }) {
  // SISTEMA DE CURTIDAS
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const likes = typeof post.likes === 'number'
    ? post.likes + (liked ? 1 : 0)
    : `${post.likes}${liked ? ' + 1' : ''}`

  // SISTEMA DE COMENTÁRIOS
  const [comentarios, setComentarios] = useState([])
  const [novoComentario, setNovoComentario] = useState('')
  const [mostrarComentarios, setMostrarComentarios] = useState(false)

  // FUNÇÃO PARA ADICIONAR COMENTÁRIOS
  function adicionarComentario(event) {
    event.preventDefault()

    if (novoComentario.trim() === '') return

    const comentario = {
      id: crypto.randomUUID(),
      usuario: 'Você',
      texto: novoComentario.trim()
    }

    setComentarios((atuais) => [...atuais, comentario])
    setNovoComentario('')
  }

  return (
    <article className="post">

      {/* CABEÇALHO DA PUBLICAÇÃO */}
      <header className="post__header">
        <img
          className="post__avatar"
          src={post.avatar}
          alt={`Foto de ${post.user}`}
        />

        <div className="post__user">
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>

        <button
          className="icon-button post__more"
          type="button"
          aria-label="Mais opções"
        >
          <FiMoreHorizontal />
        </button>
      </header>

      {/* DESCRIÇÃO DA PUBLICAÇÃO */}
      <div className="post__content">
        <p className="post__caption">{post.caption}</p>
      </div>

      {/* IMAGEM DA PUBLICAÇÃO */}
      <img
        className="post__image"
        src={post.image}
        alt={post.alt}
      />

      <div className="post__content">

        {/* BOTÕES */}
        <div className="post__actions">

          {/* CURTIR */}
          <button
            className={`icon-button${liked ? ' icon-button--liked' : ''}`}
            type="button"
            aria-label={liked ? 'Descurtir' : 'Curtir'}
            aria-pressed={liked}
            onClick={() => setLiked(!liked)}
          >
            <FiHeart />
          </button>

          {/* COMENTAR */}
          <button
            className="icon-button"
            type="button"
            aria-label="Mostrar comentários"
            aria-expanded={mostrarComentarios}
            onClick={() => setMostrarComentarios(!mostrarComentarios)}
          >
            <FiMessageCircle />
          </button>

          {/* ENVIAR */}
          <button
            className="icon-button"
            type="button"
            aria-label="Enviar"
          >
            <FiSend />
          </button>

          {/* SALVAR */}
                  <button
          className={`icon-button post__save ${saved ? 'post__save--active' : ''}`}
          type="button"
           aria-label={saved ? 'Remover dos salvos' : 'Salvar publicação'}
          aria-pressed={saved}
          onClick={() => setSaved(!saved)}
          >
          <FiBookmark />
          </button>

        </div>

        {/* QUANTIDADE DE CURTIDAS */}
        <p className="post__likes">
          <strong>{likes} curtidas</strong>
        </p>

        {/* QUANTIDADE DE COMENTÁRIOS */}
        <button
          className="post__comments-toggle"
          type="button"
          onClick={() => setMostrarComentarios(!mostrarComentarios)}
        >
          Ver comentários ({comentarios.length})
        </button>

        {/* ÁREA DE COMENTÁRIOS */}
        {mostrarComentarios && (
          <section className="comentarios">

            <h4>Comentários</h4>

            {/* LISTA DE COMENTÁRIOS */}
            {comentarios.map((comentario) => (
              <div
                className="comentario"
                key={comentario.id}
              >
                <strong>{comentario.usuario}</strong>
                <p>{comentario.texto}</p>
              </div>
            ))}

            {/* FORMULÁRIO */}
            <form onSubmit={adicionarComentario}>
              <input
                type="text"
                placeholder="Adicione um comentário..."
                value={novoComentario}
                onChange={(event) =>
                  setNovoComentario(event.target.value)
                }
              />

              <button type="submit">
                Publicar
              </button>
            </form>

          </section>
        )}

      </div>
    </article>
  )
}

export default Post
