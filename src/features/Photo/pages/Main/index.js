import React, { useState } from "react"

import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import DropdownList from "components/DropdownList";

MainPage.propsTypes = {};

function MainPage(props) {
    const dispatch = useDispatch()

    const photos = useSelector(state => state.photos)
    
    const [filterCategory, setFilterCategory] = useState(null)

    const history = useHistory()

    const handlePhotoEditList = (photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl)
    }

    const handlePhotoRemoveList = (photo) => {
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId)

        dispatch(action)
    }

    const handleCategoryFilter = (category) => {        
        if(category) {
            const selectedCategoryId = category.value
            setFilterCategory(selectedCategoryId)
        } else {
            setFilterCategory(category)
        }  
    }

    const photosToRender = filterCategory ? 
        photos.filter(photo => photo.categoryId === filterCategory) : photos

    return (
        <div className="photo-main">
            <Banner title="Your favorit photos" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="py-4">
                    <Link to="/photos/add">Add new photo</Link> 
                </div>
                <DropdownList 
                    filterChange={handleCategoryFilter}
                />

                <PhotoList 
                    photoList={photosToRender}
                    onPhotoEditClick={handlePhotoEditList}
                    onPhotoRemoveClick={handlePhotoRemoveList}
                />
            </Container>        
            
        </div>
    )
}

export default MainPage
