import './App.css'
import AllRoutes from "~/components/AllRoutes/index.jsx";
import {Toaster} from "sonner";

function App() {
  return (
    <>
      <Toaster
        richColors={true}
        position={"top-right"}
        expand={false}
        closeButton={true}
      />
      <AllRoutes/>
    </>
  )
}

export default App
