import Home from './Pages/Home'
import Sidebar from './layouts/Sidebar'

function App() {

  return (
   <main className='h-screen w-screen md:flex'>
    <Sidebar />
    <div className='md:max-h-screen w-full md:overflow-y-scroll bg-gray-200/50 px-10 py-6 mt-12 md:mt-0'> 
      <Home />
    </div>
   </main>
  )
}

export default App
