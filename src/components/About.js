import {useEffect, useState} from "react"
import sanityClient from "../client.js"
import background from "../bc_bg.png"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source) => {
  return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    const getAuthor = async() => {
      try {
        const data = await sanityClient.fetch(`*[_type == "author"] {
          name,
          bio,
          "authorImage": image.asset->url 
        }`)
        setAuthor(data[0])
      } catch (error) {
        console.error(error)
      }
    }
    getAuthor()
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={background} alt="Stars in space" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-purple-400 rounded-lg shadow-2xl lg:flex p-20">
          <img 
            src={urlFor(author.authorImage).url()} 
            alt={author.name} 
            className="rounded w-auto h-32 lg:w-auto lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-pink-300 mb-4">Meow there. I'm{" "}
              <span className="text-pink-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent 
                blocks={author.bio} 
                projectId="1e0r5r3c" 
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
