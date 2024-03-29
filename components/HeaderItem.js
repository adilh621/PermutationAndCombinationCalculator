import Link from 'next/link'
function HeaderItem({Icon , title}) {


    var links = {
        website : 'https://adil-h.vercel.app/'
    }

    

    return (

    <a href={links.website} className="flex flex-col items-center cursor-pointer group w-8 sm:w-20 hover:text-black">
        <Icon className='h-8 mb-1 group-hover:animate-bounce'/>

        
        <a href="https://adil-h.vercel.app/" className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</a>
        
        
    </a>
    )
}
export default HeaderItem;