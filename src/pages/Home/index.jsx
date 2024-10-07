import DefaultLayout from "../../components/Layout/Default Layout"
import { HomeBanner } from "../../components/Banner"
import BrandsSection from "../../components/BrandsSection"
import ProductList from "../../components/Categories/Product List"
import styles from './home.module.scss'
import StyleItem from "../../components/DressStyle"
import Image from "../../assets/image/Images"
import FeedbackData from "../../components/Feedback/Data/FeedBackData"
import 'animate.css';
const Homepage = () => {
    return ( 
        <div>
       <DefaultLayout>
            <HomeBanner />
            <BrandsSection />
            <ProductList
                category="men's clothing"
                title = "NEW COLLECTION"
            />
               <ProductList
                category="women's clothing"
                title = "TOP SELLING"
            />
            <div className={`container mt-5 ${styles.dressStyles}`}>
                <h2>BROWSE BY DRESS STYLE</h2>
                <div className="row mt-5">
                    <div className="col col-md-4">
                       <StyleItem
                         title="Casual" 
                             image={Image.styleitem1}/>
                    </div>
                    <div className="col col-md-8">
                       <StyleItem
                         title="Formal" 
                             image={Image.styleitem2} />
                       </div>
                </div>
                  <div className="row mt-5">
                    <div className="col col-md-8">
                       <StyleItem
                         title="Party" 
                             image={Image.styleitem3}/>
                    </div>
                    <div className="col col-md-4">
                       <StyleItem
                         title="Gym" 
                             image={Image.styleitem4} />
                       </div>
                </div>
                
            </div>
            <FeedbackData
            />
            </DefaultLayout>
            
            </div>
        
    )
    
}
export default Homepage