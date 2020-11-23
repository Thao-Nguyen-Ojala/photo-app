import React from "react"

import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import PhotoFilter from "features/Photo/components/PhotoFilter";
import DropdownList from "features/Photo/components/DropdownList";


MainPage.propsTypes = {};

function MainPage(props) {
    const dispatch = useDispatch()

    const initialValues = {
        categoryId: null
    }

    const photos = useSelector(state => state.photos)
    console.log("List of photos", photos)

    const history = useHistory()

    const handlePhotoEditList = (photo) => {
        console.log("Edit", photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl)
    }

    const handlePhotoRemoveList = (photo) => {
        console.log("Remove", photo)
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId)

        dispatch(action)
    }

    const handleCategoryFilter = (categoryId) => {
        console.log("cate id", categoryId)
    }

    return (
        <div className="photo-main">
            <Banner title="Your favorit photos" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link> 
                </div>
                <DropdownList />
                <PhotoFilter 
                initialValues={initialValues}
                onCategoryChangeFilter={handleCategoryFilter}
                />

                <PhotoList 
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditList}
                    onPhotoRemoveClick={handlePhotoRemoveList}
                />
            </Container>        
            
        </div>
    )
}

export default MainPage