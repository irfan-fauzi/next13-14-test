export const getDataPost = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

export const getDataGalery = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()
  return data
}