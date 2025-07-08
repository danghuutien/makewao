import { BsFacebook, BsInstagram, BsMessenger } from "react-icons/bs";

const Footer:React.FC = () => {
    return (
    <footer className="bg-slide text-white">
            <div className="md:max-w-7xl max-w-full p-5 px-3 mx-auto">
                <div className="flex flex-wrap md:-mx-[10px] space-x-3 md:space-x-0  mb-5">
                    <div className="md:w-[calc((100%/3)-20px)] w-full md:mx-[10px]">
                        <p className="text-xl uppercase font-bold mb-3">Liên hệ với chúng tôi</p>
                        <ul className="space-y-2">
                            <li>Email: danghuutientk123@gmail.com</li>
                            <li>Phone: 0375071575</li>
                            <li className="flex space-x-5 mt-3">
                                <BsFacebook />
                                <BsMessenger />
                                <BsInstagram />
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-[calc((100%/3)-20px)] w-full md:mx-[10px] ">
                        <p className="text-xl uppercase font-bold mb-3">Dịch vụ của chúng tôi</p>
                        <ul className="space-y-1.5">
                            <li>THiết kế website chuyên nghiệp</li>
                            <li>Marketing online hiệu quả</li>
                            <li>THiết kế website</li>
                            <li>Marketing online hiệu quả</li>
                        </ul>
                    </div>
                    <div className="md:w-[calc((100%/3)-20px)] w-full md:mx-[10px]">
                        <p className="text-xl uppercase font-bold mb-3">Dịch vụ của chúng tôi</p>
                        <ul className="space-y-1.5">
                            <li>THiết kế website chuyên nghiệp</li>
                            <li>Marketing online hiệu quả</li>
                            <li>THiết kế website</li>
                            <li>Marketing online hiệu quả</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#777] pt-5 text-center text-[#777]">
                    <p>Makewao – Kết nối ý tưởng, tạo dựng website đẳng cấp.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer