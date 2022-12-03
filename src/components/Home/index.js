import Loader from 'react-loader-spinner'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
