import { useEffect, useState } from 'react'

function App() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // NOTE: fetch data from a cross origin (cors) url endpoint (the following url is from my own API deployed on cyclic)

        // TIP: you must use cors middleware in your API server file to allow cross origin requests
        fetch('https://shy-lime-scorpion-hose.cyclic.app/', {
            mode: 'cors',
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading
                ? 'Loading...'
                : posts.map((post, index) => (
                      <div key={index}>
                          <h1>Name: {post.name}</h1>
                          <p>Age: {post.age}</p>
                      </div>
                  ))}
        </>
    )
}

export default App
