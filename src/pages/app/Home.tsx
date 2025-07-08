import AppLayout from "@/layouts/AppLayout"
import BannerFirst from '@/assets/images/banner_01.jpg'
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { useEffect } from "react"
const Home: React.FC = () => {
    useEffect(()=>{
        document.title = 'Trang chủ'
    }, [])
    return (
        <AppLayout>
            <section className="bg-slide">
                <div className="md:max-w-7xl max-w-full p-5 mx-auto">
                    <div className="py-2 bg-white mb-5 rounded-xl relative">
                        <div className="absolute left-0 flex items-center bg-[#003699] top-0 bottom-0 px-3.5 text-2xl text-white z-1 rounded-l-md">
                            <AiFillCodeSandboxCircle />
                        </div>
                        <div className="absolute right-0 flex items-center bg-[#003699] top-0 bottom-0 px-5 text-2xl text-white z-1 rounded-r-md">
                            
                        </div>
                        <div className="marquee-container">
                            <div className="marquee-content">
                                Từ ý tưởng đến hiện thực – Makewao đồng hành cùng thương hiệu của bạn trên hành trình số hóa.
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl slide-wraper shadow-md bg-[#0000004D]">
                        <div className="slide-item">
                            <div>
                                <img src={BannerFirst} alt="" />
                            </div>
                            <div className="flex flex-wrap space-y-2 justify-between p-4 text-white">
                                <div className="">
                                    <div className="font-bold text-xl">MakeWow</div>
                                    <div className="text-sm">Thiết kế web & AI marketing</div>
                                </div>
                                <button className="px-4 py-1 border border-white rounded-md cursor-pointer sm:w-fit w-full">Liên hệ ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Home