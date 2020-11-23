import PropTypes from "prop-types"
import React from "react"
import { Button, FormGroup, Spinner } from "reactstrap"
import { Formik, Form, FastField } from "formik"

import { PHOTO_CATEGORY_OPTIONS } from "constants/global"
import InputField from "custom-fields/InputField"
import SelectField from "custom-fields/SelectField"
import RandomPhotoField from "custom-fields/RandomPhotoField"
import * as Yup from "yup"

//import { InputField } from "../../../../custom-fields/InputField"


PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    //working with Formik, before declare the controls, have to declare initual values for
    const { initialValues, isAddMode } = props

const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    photo: Yup.string().when("categoryId", {
        is: 1,
        then: Yup.string().required("This field is required"),
        otherwise: Yup.string().notRequired()
    })
})
    return (
        //add initialValues inside tag Formik
       <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >

           {formikProps => {

               const { values, errors, touched, isSubmitting } = formikProps
               console.log("values, errors, touched",{values, errors, touched})
               
               return (
                <Form>
                    <FastField 
                        //props of FastField
                        name="title"
                        component={InputField}
                        //props that pass data to InputField
                        label="Title"
                        placeholder="Eg: Wow nature"
                    />

                    <FastField 
                        //props of FastField
                        name="categoryId"
                        component={SelectField}
                        //props that pass data to SelectField

                        label="Category"
                        placeholder="What is your photo category?"
                        options={PHOTO_CATEGORY_OPTIONS}
                    />

                    <FastField 
                        name="photo"
                        component={RandomPhotoField}
                        //props that pass data to RandomPhotoField

                        label="Photo"
                        
                    />
        
                    <FormGroup>
                        <Button type="submit" color={isAddMode ? "primary" : "success"}>
                            {isSubmitting && <Spinner size="sm"/>}
                            {isAddMode ? "Add to album" : "Update your photo"}
                        </Button>
                    </FormGroup>
                </Form>
               )
           }}
       </Formik>
    )
}

export default PhotoForm;