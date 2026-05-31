import { useState } from 'react'

const heroArtwork = '37-1.png'
const PAGE_SIZE = 4

const galleries = [
  {
    id: 'character-37',
    navLabel: '37',
    title: '37',
    subtitle: 'The Number Transcends All Matters',
    origin: 'Reverse: 1999',
    role: 'Star Arcanist / Mental / Geometry',
    mood: '数字、海风、几何、抽象世界',
    description:
      '37 是《Reverse: 1999》中与数字和几何紧密相连的角色。资料中提到她对“抽象世界”有强烈亲近感，并以数字理解世界；因此这一组作品适合用清透蓝绿、细腻线条和安静的数学感来呈现。',
    files: [
      'character-37/3 (1).png',
      'character-37/3 (2).png',
      'character-37/3 (3).png',
      'character-37/3 (4).png',
      'character-37/3 (5).png',
      'character-37/3 (6).png',
      'character-37/3 (7).png',
      'character-37/3 (8).png',
      'character-37/3 (9).png',
      'character-37/3 (10).png',
    ],
  },
  {
    id: 'character-mutsimi',
    navLabel: 'Mutsumi',
    title: 'Mutsumi Wakaba',
    subtitle: 'Mortis',
    origin: 'BanG Dream! Ave Mujica',
    role: 'Guitar / Ave Mujica',
    mood: '沉静、克制、舞台人格、冷色人物光',
    description:
      '若叶睦是 Ave Mujica 的吉他手，舞台名 Mortis。官方资料描述她不太表露情绪、不善言辞，但会以自己的方式关心他人；这一组更适合做成安静、克制、带一点舞台疏离感的人物系列。',
    files: [
      'character-mutsimi/2 (1).png',
      'character-mutsimi/2 (2).png',
      'character-mutsimi/2 (3).png',
      'character-mutsimi/2 (4).png',
      'character-mutsimi/2 (5).png',
    ],
  },
  {
    id: 'character-togawa',
    navLabel: 'Togawa',
    title: 'Sakiko Togawa',
    subtitle: 'Oblivionis',
    origin: 'BanG Dream! Ave Mujica',
    role: 'Keyboard / Ave Mujica',
    mood: '高贵、决意、舞台世界观、深色戏剧感',
    description:
      '丰川祥子是 Ave Mujica 的键盘手，舞台名 Oblivionis。官方资料强调她以承担成员人生的觉悟组建 Ave Mujica，并投入心血维护乐队世界观；这一组适合更规整、更有仪式感的视觉排布。',
    files: [
      'character-togawa/1 (1).png',
      'character-togawa/1 (2).png',
      'character-togawa/1 (3).png',
      'character-togawa/1 (4).png',
      'character-togawa/1 (5).png',
      'character-togawa/1 (6).png',
    ],
  },
]

const sourceLinks = [
  {
    label: 'Reverse: 1999 Wiki - 37',
    url: 'https://reverse1999.fandom.com/wiki/37',
  },
  {
    label: 'BanG Dream! Ave Mujica - Mutsumi Wakaba',
    url: 'https://anime.bang-dream.com/avemujica/character/mutsumi/',
  },
  {
    label: 'BanG Dream! Ave Mujica - Sakiko Togawa',
    url: 'https://anime.bang-dream.com/avemujica/character/sakiko/',
  },
]

function App() {
  const [pages, setPages] = useState(() =>
    Object.fromEntries(galleries.map((gallery) => [gallery.id, 0])),
  )

  const setGalleryPage = (galleryId, page) => {
    setPages((currentPages) => ({
      ...currentPages,
      [galleryId]: page,
    }))
  }

  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Lrtisiy AI Art home">
          <span>AI Gallery</span>
          <small>Lrtisiy AI Art</small>
        </a>
        <div className="nav-links">
          <a href="#works">作品</a>
          <a href="#styles">角色</a>
          <a href="#contact">联系</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <img className="hero-image" src={`/artworks/${heroArtwork}`} alt="AI 绘画作品头图" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="script-label">Lrtisiy AI Art</p>
          <h1>AI 绘制想象的边界</h1>
          <p className="hero-subtitle">展示由人工智能生成的视觉艺术作品</p>
          <a className="primary-button" href="#works">浏览作品</a>
        </div>
      </section>

      <section className="intro-section" id="works">
        <p className="eyebrow">Curated Characters</p>
        <h2>按角色分组的作品集</h2>
        <p>
          三组角色独立排版，每一组保留留白、说明和分页控制，让浏览节奏更规整，
          也方便之后继续扩展新的角色文件夹。
        </p>
      </section>

      <section className="collections" id="styles">
        {galleries.map((gallery, galleryIndex) => {
          const totalPages = Math.ceil(gallery.files.length / PAGE_SIZE)
          const currentPage = Math.min(pages[gallery.id] ?? 0, totalPages - 1)
          const visibleFiles = gallery.files.slice(
            currentPage * PAGE_SIZE,
            currentPage * PAGE_SIZE + PAGE_SIZE,
          )

          return (
            <article className="collection-section" key={gallery.id}>
              <div className="collection-index">
                {String(galleryIndex + 1).padStart(2, '0')}
              </div>
              <div className="collection-layout">
                <aside className="collection-profile">
                  <p className="script-label">{gallery.subtitle}</p>
                  <h3>{gallery.title}</h3>
                  <p className="origin">{gallery.origin}</p>
                  <p className="description">{gallery.description}</p>
                  <dl className="meta-list">
                    <div>
                      <dt>Role</dt>
                      <dd>{gallery.role}</dd>
                    </div>
                    <div>
                      <dt>Mood</dt>
                      <dd>{gallery.mood}</dd>
                    </div>
                    <div>
                      <dt>Works</dt>
                      <dd>{gallery.files.length} images</dd>
                    </div>
                  </dl>
                </aside>

                <div className="gallery-panel">
                  <div className="panel-head">
                    <span>{gallery.navLabel}</span>
                    <div className="pager">
                      <button
                        type="button"
                        onClick={() => setGalleryPage(gallery.id, Math.max(currentPage - 1, 0))}
                        disabled={currentPage === 0}
                        aria-label={`${gallery.title} previous page`}
                      >
                        Prev
                      </button>
                      <span>
                        {String(currentPage + 1).padStart(2, '0')} /{' '}
                        {String(totalPages).padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setGalleryPage(gallery.id, Math.min(currentPage + 1, totalPages - 1))
                        }
                        disabled={currentPage === totalPages - 1}
                        aria-label={`${gallery.title} next page`}
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <div className="art-grid">
                    {visibleFiles.map((fileName, imageIndex) => {
                      const imageNumber = currentPage * PAGE_SIZE + imageIndex + 1

                      return (
                        <figure className="art-card" key={fileName}>
                          <div className="art-image">
                            <img
                              src={`/artworks/${fileName}`}
                              alt={`${gallery.title} AI 绘画作品 ${imageNumber}`}
                              loading="lazy"
                            />
                          </div>
                          <figcaption>
                            <span>{gallery.subtitle}</span>
                            <strong>{String(imageNumber).padStart(2, '0')}</strong>
                          </figcaption>
                        </figure>
                      )
                    })}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <section className="about-contact" id="contact" aria-label="About and contact">
        <div className="about-panel">
          <p className="eyebrow">About</p>
          <h2>关于这个作品集</h2>
          <p>
            这是一个 AI 绘画作品展示网站，用于整理和呈现由人工智能生成的视觉艺术。
            页面强调角色分组、视觉风格探索、概念设计和灵感表达。
          </p>
          <div className="source-links" aria-label="Character reference links">
            {sourceLinks.map((source) => (
              <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>联系</h2>
          <p>欢迎交流 AI 绘画、概念视觉与作品合作。</p>
          <a className="mail-button" href="mailto:lrtisiy@gmail.com">
            lrtisiy@gmail.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
