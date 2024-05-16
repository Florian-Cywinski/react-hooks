import { useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value) => {
    // Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value  // To check whether is's a function or a value
    // Set to state
    setLocalStorageValue(value)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue   // If there exists itemFromStorage in the local storage
}

export default useLocalStorage
