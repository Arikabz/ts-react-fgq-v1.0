import HomePage from '../components/HomePage'
import NavbarSidebar from '../components/NavbarSidebar'
import FooterSlim from '../components/FooterSlim'

const Home = () => {
    return (
        <div>
            <NavbarSidebar content={<HomePage/>} />
        </div>
    )
}

export default Home
