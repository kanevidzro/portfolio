interface Props {
  post: {
    data: {
      title: string
    }
  }
  logoUrl?: string // URL of the logo, e.g., "/assets/kanev.svg"
}

export function getOgImage({ post, logoUrl }: Props) {
  return (
    <div
      style={{
        width: '1280px',
        height: '640px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        padding: '60px',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}>
      {/* Logo */}
      {logoUrl && (
        <img
          src={logoUrl}
          alt="Logo"
          style={{ width: '150px', marginBottom: '40px' }}
        />
      )}

      {/* Post title */}
      <h1
        style={{
          fontSize: '64px',
          fontWeight: 700,
          lineHeight: 1.2,
          margin: 0,
        }}>
        {post.data.title}
      </h1>

      {/* Footer */}
      <p
        style={{
          fontSize: '36px',
          marginTop: '20px',
          color: '#ff7f50',
        }}>
        by Kane Vidzro
      </p>
    </div>
  )
}
