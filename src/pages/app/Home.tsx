import AppLayout from "@/layouts/AppLayout"
import BannerFirst from '@/assets/images/banner_01.jpg'
import ImageQuestion from '@/assets/images/why.jpg'
import newImage from '@/assets/images/news.jpeg'
import new02Image from '@/assets/images/new_2.jpg'
import { AiFillBell, AiFillCodeSandboxCircle, AiFillMail } from "react-icons/ai"
import { useEffect } from "react"
import { VscGithub } from "react-icons/vsc";
import { BsFillTelephoneForwardFill } from "react-icons/bs"

const news = [
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: newImage,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: new02Image,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: newImage,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: new02Image,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: newImage,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: new02Image,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: newImage,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    },
    {
        name: 'Kiến thức kinh doanh là gì? Tầm quan trọng của Kiến thức kinh doanh?',
        image: new02Image,
        description: 'Kiến thức kinh doanh là gì? Tầm quan trọng đối với Doanh nghiệp vừa và...'
    }
]

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Trang chủ'
    }, [])
    return (
        <AppLayout>
            <section className="bg-slide lg:h-[calc(100vh-53px)]">
                <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                    <div className="py-2 bg-white mb-5 rounded-xl relative">
                        <div className="absolute left-0 flex items-center bg-[#003699] top-0 bottom-0 px-3.5 text-2xl text-white z-1 rounded-l-md">
                            <AiFillCodeSandboxCircle />
                        </div>
                        <div className="absolute right-0 flex items-center bg-[#003699] top-0 bottom-0 px-3 text-2xl text-white z-1 rounded-r-md">
                            <AiFillBell />
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
            <section>
                <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/2 md:pr-5 w-full mb-5">
                            <p className="font-bold text-md mb-5">MakeWow - Thiết kế web & AI marketing</p>
                            <p className="font-bold text-2xl mb-5">TẠI SAO CHỌN MakeWow</p>
                            <p className="font-bold text-xl mb-5">
                                Khi sở hữu thiết kế Website tại Net5s.vn cá nhân hay tổ chức sẽ nhận được những lợi ích sau:
                            </p>
                            <ul className="space-y-3 list-disc ml-5">
                                <li>Website chuyên nghiệp Với giao diện và chức năng đúng với yêu cầu.</li>
                                <li>Nhận diện thương hiệu Nâng cao độ tin tưởng trong mắt khách hàng.</li>
                                <li>Thiết lập bảo mật website cao Và an toàn trong hoạt động.</li>
                                <li>Hệ thống quản trị hiện đại Nâng cấp nhanh chóng, dễ dàng quản trị.</li>
                                <li>Website tốc độ cao và ổn định Đảm bảo cho khách hàng của bạn load web cực hài lòng.</li>
                                <li>Website tốc độ cao và ổn định Đảm bảo cho khách hàng của bạn load web cực hài lòng.</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <img src={ImageQuestion} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                    <p className="text-3xl font-bold mb-5 text-center relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-30 before:h-1 before:bg-blue-700 before:block before:mx-auto">Tin tức gần đây</p>
                    <p className="text-md text-center mb-5">Các thông tin mới nhất giúp doanh nghiệp xây dựng website chuyên nghiệp, hỗ trợ, chia sẻ kinh nghiệm trong kinh doanh, marketing.</p>
                    <ul className="flex flex-wrap sm:-mx-[10px] space-y-3">
                        {
                            news.map((element, index) => (
                                <li key={`new_${index}`} className="md:w-[calc((100%/4)-20px)] sm:mx-[10px] sm:w-[calc((100%/2)-20px)] border border-[#dbdbdb] hover:border-[#ff7d55] rounded-md overflow-hidden">
                                    <div className="mb-3 sm:max-h-[170px] overflow-hidden">
                                        <img src={element.image} alt="" />
                                    </div>
                                    <div className="p-3">
                                        <p className="font-bold text-md mb-3">{element.name}</p>
                                        <p>{element.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section>
                <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                    <p className="font-bold text-2xl mb-5">Dịch vụ trọng điểm</p>
                    <div className="flex flex-wrap justify-center sm:-mx-[10px] space-y-[20px]">
                        {
                            [1, 2, 3, 4, 5].map((element, index) => (
                                <div key={`index_${element}_${index}`} className="rounded-md bg-[#005AFF0D] lg:w-[calc((100%/5)-20px)] sm:w-[calc((100%/3)-20px)] w-full sm:mx-[10px] py-5">
                                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mx-auto mb-5 text-4xl text-blue-700">
                                        <VscGithub />
                                    </div>
                                    <p className="font-bold text-center text-xl mb-5">Thiết kế website</p>
                                    <p className="text-center text-md">Nhiều dịch vụ</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                    <div className="border border-blue-600 rounded-xl p-10 flex flex-wrap space-y-3">
                        <div className="lg:w-1/2 w-full">
                            <p className="font-bold text-4xl mb-5">Hợp tác cùng chúng tôi</p>
                            <p className="mb-5">Kết nối ngay với chúng tôi để cùng hợp tác và phát triển. Điền thông tin vào biểu mẫu, chúng tôi sẽ liên hệ lại sớm nhất!</p>
                            <div className="flex flex-wrap space-y-3">
                                <div className="md:w-1/3 w-full flex space-x-2">
                                    <div className="md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl">
                                        <BsFillTelephoneForwardFill />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl">Phone</p>
                                        <p className="">0375071575</p>
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-3 w-full flex space-x-2">
                                    <div className="md:w-20 md:h-20 w-15 h-15 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl">
                                        <AiFillMail />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl">Email</p>
                                        <p className="">danghuutientk123@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="lg:w-1/2 w-full lg:pl-5">
                            <img src={newImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Home