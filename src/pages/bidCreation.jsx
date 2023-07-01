// this is the page where the user can create a bid

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataService from '../services/dataServices';
import DataContext from '../global/dataContext';
import './bidCreation.scss';

function BidCreation() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [bidAmount, setBidAmount] = useState(0);
    const [image, setImage] = useState('');
    const { loggedInUser } = useContext(DataContext);
    const navigate = useNavigate();
    
    function validform() {
        return name.length > 0 && description.length > 0 && bidAmount > 0
        //  && image.length > 0
         ;
    }
    
    function handleSubmit(e) {
        if (validform()) {
        console.log('form is valid');
        createBid();
        } else {
        console.log('form is not valid');
        }
    }
    
    function textChange(e) {
        let text = e.target.value;
        let name = e.target.name;
        if (name === 'name') {
        setName(text);
        } else if (name === 'description') {
        setDescription(text);
        } else if (name === 'bidAmount') {
        setBidAmount(text);
        } 
        // else if (name === 'image') {
        // setImage(text);
        // }
    }
    
    async function createBid() {
        let dataService = new DataService();
        let bid = {
        name: name,
        description: description,
        bidAmount: bidAmount,
        // image: image,
        originalPosterId: loggedInUser._id
        };
        let createdBid = await dataService.createBid(bid);
        if (createdBid) {
        console.log('bid created');
        navigate(`/bid/${createdBid}`);
        } else {
        console.log('bid not created');
        }
    }
    
    return (
        <div className="bidCreation">
        <h1>Create a bid post</h1>
        <div className="card">
            <div className="card-body">
            <div className="bidCreation__form">
                <div className="bidCreation__form__input">
                <input
                    type="text"
                    className="bidCreation__form__input__name mb-1"
                    placeholder="Enter a title"
                    name="name"
                    value={name}
                    onChange={textChange}
                />
                <input
                    type="text"
                    className="bidCreation__form__input__description mb-1"
                    placeholder="Enter a description"
                    name="description"
                    value={description}
                    onChange={textChange}
                />
                <input
                    type="number"
                    className="bidCreation__form__input__bidAmount"
                    placeholder="Enter a bid amount"
                    name="bidAmount"
                    value={bidAmount}
                    onChange={textChange}
                />
                {/* <input
                    type="text"
                    className="bidCreation__form__input__image"
                    placeholder="Enter an image"
                    name="image"
                    value={image}
                    onChange={textChange}
                /> */}
                </div>
                <button className="btn btn-dark button" onClick={handleSubmit}>
                Create Bid Post
                </button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default BidCreation;