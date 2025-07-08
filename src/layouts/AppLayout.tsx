import Header from '@/components/app/general/Header'
import '../index.css'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="main-body">
                { children }
            </div>
        </>
    )
}

export default AppLayout