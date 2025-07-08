// import Logo from '@/assets/images/logo.jpg'
import { useCallback, useState } from 'react'
import { AiFillPhone, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
const Header: React.FC = () => {
    const [openInPc, setOpenInPc] = useState(false)
    const handleOpenMenu = useCallback(()=>{
        setOpenInPc(!openInPc)
    }, [openInPc])
    return (
        <header className="bg-gradient-to-r from-blue-600 to-[#003699] text-white px-4 py-2 relative">
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
                    <button onClick={handleOpenMenu} className="text-white hover:bg-[#002466] flex items-center p-2 outline-none border border-[#347BFF] rounded-2xl cursor-pointer">
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
            <div onClick={handleOpenMenu} className={`fixed top-0 left-0 bottom-0 right-0 bg-white/30 transition duration-500 ease-in-out ${!openInPc ? 'invisible opacity-0': 'visible opacity-100 h-auto'}`}></div>
            <div className={`lg:absolute lg:left-0 lg:right-0 lg:w-full lg:top-full fixed top-0 bottom-0 right-0 w-1/2 z-10 transition duration-500 ease-in-out ${!openInPc ? 'invisible opacity-0 h-0 lg:translate-x-0 translate-x-full' : 'visible opacity-100 h-auto lg:translate-x-0 translate-x-0'}`}>
                <div className='md:max-w-7xl max-w-full px-3 mx-auto'>
                    <div className='lg:border-10 border-[#002466] rounded-xl shadow-lg -mx-2.5'>
                        <div className='lg:border-4 lg:border-blue-800 py-3 lg:rounded-xl bg-white flex flex-wrap text-[#000] lg:h-fit h-screen overflow-y-auto'>
                            <div className="lg:w-2/3 lg:border-r-3 lg:border-blue-800 p-3 flex flex-wrap">
                                <div className="lg:w-1/2 w-full space-y-5">
                                    <p className='font-bold lg:text-2xl text-lg lg:text-left text-center'>Dịch vụ website</p>
                                    <ul className='space-y-3 list-disc ml-5'>
                                        <li>THiết kế website chuyên nghiệp</li>
                                        <li>Marketing online hiệu quả</li>
                                        <li>THiết kế website chuyên nghiệp</li>
                                        <li>Marketing online hiệu quả</li>
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-5">
                                    <p className='font-bold lg:text-2xl text-lg lg:text-left text-center'>Dịch vụ marketing</p>
                                    <ul className='space-y-3 list-disc ml-5'>
                                        <li>THiết kế website chuyên nghiệp</li>
                                        <li>Marketing online hiệu quả</li>
                                        <li>THiết kế website chuyên nghiệp</li>
                                        <li>Marketing online hiệu quả</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/3 space-y-5">
                                <p className='font-bold text-2xl text-center'>Cam kết của chúng tôi</p>
                                <div className='px-5 text-justify'>
                                    Makewao cam kết cung cấp dịch vụ thiết kế và phát triển website chuyên nghiệp, tối ưu theo nhu cầu thực tế của từng khách hàng, đảm bảo thẩm mỹ, tốc độ, bảo mật và dễ sử dụng – đồng hành cùng bạn trên hành trình xây dựng thương hiệu bền vững trong môi trường số.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header