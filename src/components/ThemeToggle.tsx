import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='flex justify-center items-center bg-stone-900  dark:bg-amber-600 w-10 h-10 rounded-[50%] cursor-pointer'>
      {theme === 'light' ? <Moon color='white' /> : <Sun color='white' />}
    </button>
  )
}
