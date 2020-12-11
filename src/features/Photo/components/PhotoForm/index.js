import PropTypes from "prop-types"
import React from "react"
import { Button, FormGroup, Spinner } from "reactstrap"
import { Formik, Form, Field } from "formik"

import { PHOTO_CATEGORY_OPTIONS } from "constants/global"
import InputField from "custom-fields/InputField"
import SelectField from "custom-fields/SelectField"
import RandomPhotoField from "custom-fields/RandomPhotoField"
import * as Yup from "yup"

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
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
       <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >

           {formikProps => {

               const { isSubmitting } = formikProps
               
               return (
                <Form>
                    <Field 
                        name="title"
                        component={InputField}
                        label="Title"
                        placeholder="Eg: Wow nature"
                    />

                    <Field 
                        name="categoryId"
                        component={SelectField}

                        label="Category"
                        placeholder="What is your photo category?"
                        options={PHOTO_CATEGORY_OPTIONS}
                    />

                    <Field 
                        name="photo"
                        component={RandomPhotoField}

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