import PropType from "prop-types";
import React from "react";
import { Button } from "reactstrap"
import "./RandomPhoto.scss"

RandomPhoto.propType = {
    name: PropType.string,
    imageUrl: PropType.string,
    onImageUrlChange: PropType.func,
    onRandomButtonBlur: PropType.func
}

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: "",
    onImageUrlChange: null,
    onRandomButtonBlur: null
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo_button">
                <Button 
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo_photo">
                {imageUrl && (
                    <img 
                        src={imageUrl} 
                        alt="Oops...not found.Please click again"
                        onError={handleRandomPhotoClick}
                    />
                )}
            </div>
        </div>
    )
}

export default RandomPhoto