import React, { useEffect } from 'react'
import { ImagePicker } from 'antd-mobile';
import { PlusOutlined } from '@ant-design/icons';
import { post,upload } from 'utils/request'
import './index.less'
import MyToast from '@/components/mytoast'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
let imgArr = []

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

  uploadImg = async(files) => {
    document.querySelector('.loadding').style.display = "block"
    const formData = new FormData();
    formData.append('ShopPicture', files[files.length - 1].file);

    const res = await upload({
      url: '/upload',
      data: formData
    })
    if (res.success) {

      const imgItem = {
        uid: res.data.ShopPicture[0].id,
        url: res.data.ShopPicture[0].url,
        name: 'image.png',
        status: 'done',
      }
      imgArr = [...this.state.fileList]
      imgArr.push(imgItem)
      this.setState({
        fileList: imgArr
      }, () => {
        this.props.content(this.state.fileList)
      })

      document.querySelector('.loadding').style.display = "none"

    }

    // post('/upload', formData).then(res => {
    //   console.log(res);
    //   if (res.success) {

    //     const imgItem = {
    //       uid: res.data.ShopPicture[0].id,
    //       url: res.data.ShopPicture[0].url,
    //       name: 'image.png',
    //       status: 'done',
    //     }
    //     imgArr = [...this.state.fileList]
    //     imgArr.push(imgItem)
    //     this.setState({
    //       fileList: imgArr
    //     }, () => {
    //       this.props.content(this.state.fileList)
    //     })

    //     document.querySelector('.loadding').style.display = "none"

    //   }
    // })
  }

  render() {
    return (
      <div>
        <ImagePicker
          files={this.state.fileList}
          onChange={this.uploadImg}
          onImageClick={(index, fs) => console.log(index, fs)}
          multiple={false}
          disableDelete={true}
        />
        <div className="loadding">
          <MyToast></MyToast>
        </div>

      </div>

    );
  }
}

export default PicturesWall
