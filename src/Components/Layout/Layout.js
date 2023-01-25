
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }) {
  


    return (
        <div>
            <Header />
            <div style={{minHeight: 'calc(100vh - 131px)'}}>
                {children}
            </div>
            <Footer />
        </div>
    )
}