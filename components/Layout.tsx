import Header from "./Header";

const Layout : React.FC = ({children}) =>  {
  return (
    <div className="maxw-5xl mx-auto px-4 md:px-8">
      <Header/>
      {children}
    
    </div>
  )
}

export default Layout;