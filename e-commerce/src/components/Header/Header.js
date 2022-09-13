import SearchIcon from '@mui/icons-material/Search';
import GrainIcon from '@mui/icons-material/Grain';
import './Header.css'

const Header = () => {
    return (<div id='header'>
      <div className="search__box">
      <SearchIcon className='search__Icon' />
      <input className='search__Input' type="search" placeholder='Search among 100+ products'></input>
      <GrainIcon className='Grain__Icon' />
      </div>
    </div>)
}

export default Header;