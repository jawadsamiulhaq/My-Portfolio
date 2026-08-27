export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Jawad Sami Ul Haq</p>
      {/* <p>built with react &amp; typescript</p>  */}
    </footer>
  );
}
