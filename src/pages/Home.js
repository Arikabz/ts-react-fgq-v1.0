import HomePage from '../components/HomePage'
import NavbarSidebar from '../components/NavbarSidebar'
import FooterSlim from '../components/FooterSlim'

console.log('starting home')
const Home = () => {
    return (
        <div>
            <NavbarSidebar content={<HomePage/>} footer={<FooterSlim/>}/>
        </div>
    )
}

export default Home
