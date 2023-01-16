import HeaderItem from '../components/HeaderItem'
import {QuestionMarkCircleIcon , HomeIcon} from '@heroicons/react/outline'

function Header() {


    return (

        <header className="flex pt-6 px-5 bg-[#9a8c98] justify-between h-auto">
            <div className=' hidden md:inline-flex max-w-2xl'>
                
                <HeaderItem title='ABOUT CREATOR' Icon={QuestionMarkCircleIcon}/>
                
            </div>

            <h1 className='text-2xl font-bold leading-7 cursor-pointer text-gray-900 md:text-3xl sm:truncate '>Permutation and Combination Calculator</h1>

        </header>
    )
}
export default Header;