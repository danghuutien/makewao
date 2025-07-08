// import Logo from '@/assets/images/logo.jpg'
import { AiFillPhone, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-[#003699] text-white px-4 py-2">
            <div className="mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">MakeWow</div>
                            <div className="text-xs text-blue-100">Thiết kế web & AI marketing</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center md:space-x-4">
                    <button className="text-white hover:bg-[#002466] flex items-center p-2 outline-none border border-[#347BFF] rounded-2xl cursor-pointer">
                        <AiOutlineMenu className='sm:mr-2' />
                        <span className="hidden sm:inline">Dịch vụ</span>
                    </button>
                    <button className="text-white hover:bg-[#002466] hidden md:inline-flex items-center p-2 outline-none border border-[#347BFF] rounded-2xl cursor-pointer">
                        <AiFillPhone className='sm:mr-2' />
                        0375071575
                    </button>
                    <button className="text-white hover:bg-[#002466] hidden md:inline-flex items-center p-2 outline-none border border-[#347BFF] rounded-2xl cursor-pointer">
                        <AiOutlineMail className='sm:mr-2' />
                        danghuutientk123@gmail.com
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header