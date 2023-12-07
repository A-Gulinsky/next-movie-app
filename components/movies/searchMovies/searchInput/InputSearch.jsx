import { useRouter } from "next/navigation"
import { useState } from "react"

export const InputSearch = () => {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!search) {
      router.push(`/movies`)
      return;
    }

    router.push(`/movies?query=${encodeURIComponent(search)}`);
  }

  return (
    <form onClick={handleSubmit}>
      <input
        autoComplete="off"
        type="search"
        name="search"
        placeholder="search"
        value={search}
        onChange={event => setSearch(event.target.value)}  
      />
        
      <button type="submit">Search</button>
    </form>
  )
}