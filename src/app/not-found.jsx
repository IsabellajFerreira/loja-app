import Image from "next/image";
export default function NotFound() {
    return (
      <div>
          <h1>OOPS! 404!</h1>
          <figure>
          <Image src="https://http.cat/images/404.jpg" alt="gatp no jornal" width={750} height={600}/>
        
          </figure>
          <p>Página não encontrada!</p>
      </div>
    )
  }