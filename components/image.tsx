import Image from 'next/image'

export default function MyImage() {
  return (
    <a href="https://www.linkedin.com/in/mrym-nasiri/">
      <Image
        src="/public/linkedin.png" 
        alt="Picture of the author" 
        width={20}
        height={20} 
      />
    </a>
  )
}