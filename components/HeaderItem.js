import Link from 'next/link'
function HeaderItem({Icon , title}) {


    var links = {
        website : 'https://adil-h.vercel.app/'
    }

    

    return (

    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-black">
        <Icon className='h-8 mb-1 group-hover:animate-bounce'/>

        
        <a href="" className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</a>
        
        
    </div>
    )
}
export default HeaderItem;