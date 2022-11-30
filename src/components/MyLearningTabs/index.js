import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import BroseNow from './BrowseNow';

function MyLearningTabs(){
    return(
        <div className="main-container-learning-tabs">
            <div className='main-container-title-learning-tabs'>
                <div className="container-title-learning-tabs">
                    <h2>My learning</h2>
                </div>
            </div>
            <Tabs className='container-all-courses-learning-tabs'>
                <div className='main-container-title-learning-tabs'>
                <TabList className='ul-all-courses'>
                    <Link to='/home/my-courses/learning'><Tab className='li-all-courses li-all-courses-all-courses'>All courses</Tab></Link>
                    <Link to='/home/my-courses/wishlist'><Tab className='li-all-courses'>Wishlist</Tab></Link>
                </TabList>
                </div>
                <div className='main-container-tab-panel'>
                <TabPanel className='container-tab-panel'>
                    <BroseNow />
                </TabPanel>
                </div>

    </Tabs>

        </div>
    )
}

export default MyLearningTabs;
