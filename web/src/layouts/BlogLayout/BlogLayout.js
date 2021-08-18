import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, userMetadata } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav className="flex">
          <div className="left">
            <Link to={routes.about()}>About</Link>
          </div>
          <div className="flex right">
            {isAuthenticated && userMetadata.email}{' '}
            <button
              className="link-button"
              onClick={isAuthenticated ? logOut : logIn}
            >
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
          </div>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="flex">
        <p className="left">
          &copy; 2021{' '}
          <a href="https://twitter.com/GiannelliTech">giannelli.tech</a>
        </p>
        <p className="right">
          <small>
            <a href="/admin/posts">Admin</a>
          </small>
        </p>
      </footer>
    </>
  )
}

export default BlogLayout
