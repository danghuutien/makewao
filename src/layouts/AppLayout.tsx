import Header from '@/components/app/general/Header'
import '../index.css'
import Footer from '@/components/app/general/Footer'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="main-body">
                { children }
            </div>
            <Footer />
        </>
    )
}

export default AppLayout