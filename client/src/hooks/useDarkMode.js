import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage("Dark-mode", initialValue)

  useEffect(() => {
   const body = document.querySelector('body');
   return values === true ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }, [values])

  return [values, setValues]
}