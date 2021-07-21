import React, { Component } from "react"
import { post } from 'utils/request'
import './index.less'
class UploadImg extends Component {
    constructor() {
        super()
        this.state = { image: null, isShow: false }
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ image: e.target.result, isShow: true });
            };
            reader.readAsDataURL(event.target.files[0]);
            // post('/upload', event.target.files[0]).then(res=>{
            //     console.log(res);
            // })

        }
    }
    render() {
        return (
            <div className="upload-img">
                <div style={{ display: this.state.isShow ? "none" : "" }}>
                    点击上传图片
                <input type="file"
                        onChange={this.onImageChange}
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>
                </div>

                <img style={{ display: !this.state.isShow ? "none" : "" }} src={this.state.image} alt="" />
            </div>
        )
    }
}

export default UploadImg