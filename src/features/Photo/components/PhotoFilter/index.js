import React from "react"

import SelectField from "custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global"
import {  Formik, Form,FastField } from "formik"

PhotoFilter.propTypes = {}

PhotoFilter.defaultProps = {
    categoryId: null
}

function PhotoFilter(props) {
    const { initialValues, onCategoryChangeFilter } = props

    const onCategoryChange = (selectedValue) => {
        onCategoryChangeFilter(selectedValue)
        console.log("changed to ", selectedValue);
    }
    console.log("init", {initialValues})

    return (
        <Formik initialValues={initialValues}>
            { formikProps => {
                const {values} = formikProps
                console.log("values from the filter", {values} )

                return (
                <Form>
                    <FastField 
                    name="categoryId"
                    component={SelectField}
                    onChangeCallback={onCategoryChange}
                    label="Filter by category"
                    placeholder="Choose a category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                    />
                </Form>
                )
            }}
            
    </Formik>

    )
}
/*


  
*/

export default PhotoFilter