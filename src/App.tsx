import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-stone-800 transition-colors flex justify-center items-center'>
      <ThemeToggle />
    </div>
  )
}

export default App;