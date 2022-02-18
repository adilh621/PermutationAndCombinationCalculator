import Image from 'next/image'
import HeaderItem from '../components/HeaderItem'
import {BadgeCheckIcon, QuestionMarkCircleIcon , CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

function Header() {


    return (

        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className='flex flex-grow  max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='FAQ' Icon={QuestionMarkCircleIcon}/>
            </div>

            <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate pb-4'>Permutation and Combination Calculator</h1>

        </header>
    )
}
export default Header;