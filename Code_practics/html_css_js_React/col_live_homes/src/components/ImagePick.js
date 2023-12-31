import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import addimage from "../images/addicon.svg";
import '../styles/image_pick.css'

const ImagePick = ({onImageSelected, heightFromParent}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            onImageSelected(imageUrl)
        }
    };

    return (
        <div>
            <div id="image1"   className="card_style rounded-3" style={{height: heightFromParent}}>
                {selectedImage && (
                    <img src={selectedImage} className="img-fluid rounded-3 "
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>)}

                {
                    selectedImage == null && (
                        <img src={addimage} className="position-absolute top-50 start-50  translate-middle"
                             alt="Add Image"/>)
                }

                <input type="file" accept="image/*" className="file_upload" onChange={handleImageChange}/>
                {
                    selectedImage && (
                        <button type="button" onClick={() => {
                            setSelectedImage(null)
                        }} className="position-absolute top-0 end-0 m-2 btn btn-sm btn-danger">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default ImagePick;
