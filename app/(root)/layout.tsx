const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Navbar {children}</p>
    </div>
  );
};

export default Layout;
