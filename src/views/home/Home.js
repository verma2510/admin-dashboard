import { Textfield } from '../../components/textfield/Textfield';
import './home.css'
import { VscAccount } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { Products } from '../products/Products';
import { TabSwitch } from '../../components/tab-switch/TabSwitch';
import { Button } from '../../components/button/Button';

export const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeBreadcrumb">
          <span>Dashboard</span> &gt; <span>Products</span> &gt;
          <strong>All Products</strong>
        </div>
        <div className="leftSide">
          <Textfield placeholder="Search..." icon={IoIosSearch} />
          <VscAccount className="leftSideLogo" />
        </div>
      </div>
      <div className="productFeatures">
        <TabSwitch />
        <div className="featureButtons">
          <Button className='exportButton'>Export</Button>
          <Button className='addProductButton'>Add Product</Button>
        </div>
      </div>
      <div className="homeProducts">
        <Products />
      </div>
    </div>
  );
}
