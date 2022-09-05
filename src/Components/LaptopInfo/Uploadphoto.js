import axios from 'axios';
import React, { Component } from 'react'
import Laptop from './Laptop';

export class Uploadphoto extends Component {


    state = {
        profileImg: '',
        selectedFiled: ''
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({profileImg : reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    myHandler = (e) => {
        this.setState({
            selectedFiled : e.target.files[0]
        })
        console.log('shemovida', e.target.files[0])
    }


    submitHandler = async (e) => {
        e.preventDefault();
        
        var url = 'https://pcfy.redberryinternship.ge/api/laptop/create/'

        const formData = new FormData();

        formData.append('fileUpload', this.state.selectedFiled, this.state.selectedFiled.name)
        formData.append('name', 'redberry')

        let response = await axios.post(url, formData);

        console.log('resp', response)
    }


    render() {

    const {profileImg} = this.state


    // const handleImageButtons = e => this.props.formik.values.fileUpload = e.target.value

    console.log('midi', this.props.formik.values.fileUpload)


    const base64code = ""

    const handleImage = (e) => {
        const files = e.target.files;
        const file = files[0];
        getbase64(file);
    }


    const onLoad = (fileString) => {
        this.base64code = fileString
    }

    const getbase64  = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result )
        }
    }


    //  if(this.base64code !== undefined){
        

    //     this.props.formik.values.fileUpload = this.props.image

    //     // .substring(16,900)

    //     console.log('kaikaci', this.base64code.length)
    // }


    if(profileImg.length === 0){
    
        return (
            <>
        
            <div className='page' onChange={this.imageHandler} id="raari"> 
                <div>
                    <input 
                            type='file' 
                            id='fileUpload' 
                            name='fileUpload'
                            onChange={(e) => this.props.formik.setFieldValue('fileUpload', e.currentTarget.files[0])}
                        ></input>
                </div>
            
                
                <div className='upload-img-wrapper'>
                    <label htmlFor='fileUpload'>
                        <h5 
                        className='upload-img'
                        >ჩააგდე ან ატვირთე ლეპტოპის ფოტო</h5>
                    </label>
                    <div className='btn-cont'>
                        <label htmlFor='fileUpload' >
                            <button className='upload-btn'>ატვირთე</button>
                        </label>
                        
                    </div>
                </div>
            </div>
            </>
        )
    }else if(profileImg.length > 0){
        return <>
            <div className='page'>
                <img src={profileImg} className="add-photo">
                </img>
            </div>

            
        </>
    }
    
  }
}

export default Uploadphoto