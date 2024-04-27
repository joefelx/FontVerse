const Layout = ({ children }) => {
  return (
    <div className="p-5 w-full flex flex-col justify-center items-center">
      <div className="w-3/4 h-full">{children}</div>
    </div>
  );
};

export default Layout;
