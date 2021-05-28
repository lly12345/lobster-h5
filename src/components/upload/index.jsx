import React, { useEffect } from 'react'
// import { Upload, Modal } from 'antd';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { PlusOutlined } from '@ant-design/icons';
import { post } from 'utils/request'
import './index.less'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const imgArr = []

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [],
    };
  }


  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  uploadImg = (files) => {
    console.log(files);

    // 上传图片的base64编码，调接口后，返回 imageId
    // post('/upload', params).then(res => {
    //   console.log(res);
    // })
    const formData = new FormData();
    formData.append('ShopPicture', files[files.length-1].file);
    post('/upload', formData).then(res => {
      console.log(res);
      if (res.success) {
        const imgItem = {
          uid: res.data.ShopPicture[0].id,
          url: res.data.ShopPicture[0].url,
          name: 'image.png',
          status: 'done',
        }

        imgArr.push(imgItem)
        this.setState({
          fileList: imgArr
        })
        this.props.content(this.state.fileList)

      }
    })
  }

  render() {
    return (

      <ImagePicker
        files={this.state.fileList}
        onChange={this.uploadImg}
        onImageClick={(index, fs) => console.log(index, fs)}
        multiple={false}
      />


    );
  }
}

export default PicturesWall
