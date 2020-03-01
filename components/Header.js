import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="container">
        <Link href="/">
          <img className="nav-logo" src="/img/logo.png" alt="logo" />
        </Link>
        <Link href="/browse">
          <span className="pull-right nav-link">Browse</span>
        </Link>
      </nav>
    </header>
  );
}
