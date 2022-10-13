import TitleManageCourse from "../components/TitleManageCourse";
import SelectPricing from "../components/ComponentPricing";
import OptionsPricing from "../components/ComponentPricing/options";
import CoursesManageNav from '../components/CoursesManageNav';
import { SetPrice , SendPrice} from '../store/CreateCoursePrice.Slice';
import { useDispatch } from 'react-redux';

function CoursesManagePricing(){

    // const dispatch = useDispatch();

    const obj = {
        SetPrice,
        SendPrice
    }

    return(
        <div className="main-container-manage-goals">
            <CoursesManageNav action={obj.SendPrice}/>
            <TitleManageCourse
            title='Pricing' />
            <div className="container-manage-goals">
            <h3 className="subtitle-manage-pricing">Course Price Tier</h3>
                <p className="p-manage-pricing">Please select the price tier for your course below and click 'Save'. The list price that students will see in other currencies is determined using the price tier matrix.</p>
                <p className="p-manage-pricing">If you intend to offer your course for free, the total length of video content must be less than 2 hours.</p>
                <div className="container-pricing-select">
                <SelectPricing 
                name="currency"
                id="currency"
                >
                <OptionsPricing value='USD'>USD</OptionsPricing>

                </SelectPricing>

                <SelectPricing 
                name="price"
                id="price"
                action={obj.SetPrice}
                >
                <OptionsPricing value='Free'>Free</OptionsPricing>
                <OptionsPricing value='19.99'>$19.99</OptionsPricing>
                <OptionsPricing value='24.99'>$24.99</OptionsPricing>
                <OptionsPricing value='29.99'>$29.99</OptionsPricing>
                <OptionsPricing value='34.99'>$34.99</OptionsPricing>
                <OptionsPricing value='39.99'>$39.99</OptionsPricing>
                <OptionsPricing value='44.99'>$44.99</OptionsPricing>
                <OptionsPricing value='49.99'>$49.99</OptionsPricing>
                <OptionsPricing value='54.99'>$54.99</OptionsPricing>
                <OptionsPricing value='59.99'>$59.99</OptionsPricing>
                <OptionsPricing value='64.99'>$64.99</OptionsPricing>
                <OptionsPricing value='69.99'>$69.99</OptionsPricing>
                <OptionsPricing value='74.99'>$74.99</OptionsPricing>
                <OptionsPricing value='79.99'>$79.99</OptionsPricing>
                <OptionsPricing value='84.99'>$84.99</OptionsPricing>
                <OptionsPricing value='89.99'>$89.99</OptionsPricing>
                <OptionsPricing value='94.99'>$94.99</OptionsPricing>
                <OptionsPricing value='99.99'>$99.99</OptionsPricing>
                <OptionsPricing value='109.99'>$109.99</OptionsPricing>
                <OptionsPricing value='119.99'>$119.99</OptionsPricing>
                <OptionsPricing value='124.99'>$124.99</OptionsPricing>
                <OptionsPricing value='129.99'>$129.99</OptionsPricing>
                <OptionsPricing value='139.99'>$139.99</OptionsPricing>
                <OptionsPricing value='149.99'>$149.99</OptionsPricing>
                <OptionsPricing value='159.99'>$159.99</OptionsPricing>
                <OptionsPricing value='169.99'>$169.99</OptionsPricing>
                <OptionsPricing value='174.99'>$174.99</OptionsPricing>
                <OptionsPricing value='179.99'>$179.99</OptionsPricing>
                <OptionsPricing value='189.99'>$189.99</OptionsPricing>
                <OptionsPricing value='199.99'>$199.99</OptionsPricing>

                </SelectPricing>
                </div>
            </div>
        </div>
    )
}
export default CoursesManagePricing;