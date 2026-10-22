import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="grad-text" style={{ fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 700 }}>
          404
        </div>
        <h1 style={{ marginBottom: 12 }}>Page not found</h1>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          This page doesn&apos;t exist — but your next customer is one click away.
          Try one of the pages below, or head back to the homepage.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/services/">
            Browse our services
          </Link>
          <Link className="btn btn-ghost" href="/work/">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
