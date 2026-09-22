function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">

        {/* DIRECTORS NOTES LOGO */}
        <a href="/" className="site-logo" aria-label="Directors Notes home">

          {/* Geometric DN symbol */}
          <svg
            className="site-logo-symbol"
            viewBox="0 0 120 90"
            role="img"
            aria-hidden="true"
          >
            {/* D / triangular play shape */}
            <path
              d="M8 8 L58 45 L8 82 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />

            {/* N */}
            <path
              d="M58 8 L58 82"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
            />

            <path
              d="M58 8 L108 82"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
            />

            <path
              d="M108 82 L108 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="square"
            />
          </svg>

          {/* Directors Notes wordmark */}
          <span className="site-logo-text">
            <span>DIRECTORS</span>
            <span>NOTES</span>
          </span>

        </a>

        {/* Navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#channels">Channels</a>
          <a href="#submit">Submit</a>
          <a href="#about">About</a>
          <a href="#youtube">YouTube</a>
          <a href="#search">Search</a>
        </nav>

      </div>
    </header>
  );
}

export default SiteHeader;