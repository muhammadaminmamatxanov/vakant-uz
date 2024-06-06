import Layout from "./components/layout/layout"
import Login from "./components/auth/Login";

const App = () => {

  const user = true;

  return (
    <div>
      {user 
      ? <Layout/> : <Login/>}
    </div>
  )
 
}

export default App