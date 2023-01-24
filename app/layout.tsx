import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
       <div className="text-center bg-slate-800 py-2 my-6 rounded-md">
       <Image src="/rat_present.png" 
      alt='logo'
      width={200}
      height={200}
      className='mx-auto'
      />
        <Link href='/'>
         <h1 className="text-2xl text-white font-semibold mt-4">
      D_Landfill Blog
    </h1> 
          </Link>    
    <p className="text-slate-300">
      D_Landfill Blog is a blog generator for D_Landfill.
    </p>
  </div>
    </header>  
  )
  
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-12 text-center text-slate-400">
    
      <h3>
        D_Landfill Blog is a blog generator for D_Landfill.
      </h3>
      </div>
    </footer>
  )
  
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-4"> 
        {header}    
        {children}
        {footer}  
        </div>        
        </body>
    </html>
  )
}
