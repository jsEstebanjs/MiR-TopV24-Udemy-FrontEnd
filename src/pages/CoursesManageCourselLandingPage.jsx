import TitleManageCourse from "../components/TitleManageCourse";
import InputTitleLanding from "../components/InputTItleLanding";
import { useState } from "react";
import ReactQuill from 'react-quill';
import SelectPricing from "../components/ComponentPricing";
import OptionsPricing from "../components/ComponentPricing/options";
import PromotionalSource from "../components/PromotionalSources";

function CoursesManageCourselLandingPage(){
    const [value, setValue] = useState('')
      const modules = {
        toolbar: [
          ['bold', 'italic'],
          [{'list': 'ordered'}, {'list': 'bullet'}]
        ],
      }
    return(
        <div className="main-container-manage-goals">
            <TitleManageCourse
            title='Course landing page' />
            <div className="container-manage-goals">
                <InputTitleLanding id='title' limitNum={60} place='Insert your course title.'>Course title</InputTitleLanding>
                <InputTitleLanding id='subtitle' limitNum={120} place='Insert your course subtitle.'>Course subtitle</InputTitleLanding>
                <p className="label-input-landing">Course description</p>
                <ReactQuill 
                // theme="snow"
                value={value}
                placeholder="Insert your course description."
                onChange={setValue}
                modules={modules}
                />
                <p className="label-input-landing">Basic info</p>
                <div className="container-pricing-select">
                <SelectPricing 
                name="languaje"
                id="languaje"
                >
                <OptionsPricing value='US'>English(US)</OptionsPricing>

                </SelectPricing>

                <SelectPricing 
                name="level"
                id="level"
                >
               <OptionsPricing value='null'>--Select Level--</OptionsPricing>
                <OptionsPricing value='Beginner Level'>Beginner level</OptionsPricing>
                <OptionsPricing value='Intermediate Level'>Intermediate level</OptionsPricing>
                <OptionsPricing value='Expert Level'>Expert Level</OptionsPricing>
                <OptionsPricing value='All Levels'>All Levels</OptionsPricing>
                </SelectPricing>

                <SelectPricing 
                name="Category"
                id="Category"
                >
                <OptionsPricing value='null'>--Select Category--</OptionsPricing>
                <OptionsPricing value='Development'>Development</OptionsPricing>
                <OptionsPricing value='IT & Software'>IT & Software</OptionsPricing>
                <OptionsPricing value='Design'>Design</OptionsPricing>
                <OptionsPricing value='Marketing'>Marketing</OptionsPricing>
                <OptionsPricing value='Marketing'>Teaching & Academics</OptionsPricing>

                </SelectPricing>


                </div>
                <InputTitleLanding limitNum={-1} place='e.g Landscape Photography.'>What is primarily taught in your course?</InputTitleLanding>
                <p className="label-input-landing">Course image</p>
                <PromotionalSource accept=".png, .jpg, .jpeg" id='source-image' video={false}/>
                <p className="label-input-landing">Promotional video</p>
                <PromotionalSource accept="video/mp4,video/x-m4v,video/*" id='source-video' video={true}/>
            </div>

        </div>
    )
}
export default CoursesManageCourselLandingPage;
