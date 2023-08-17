import HomePage from '../components/HomePage'
import NavbarSidebar from '../components/NavbarSidebar'

const Home = () => {
    return (
        <div>
            <NavbarSidebar content={<HomePage/>} />
        </div>
    )
}

export default Home
