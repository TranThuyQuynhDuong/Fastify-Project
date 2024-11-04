import React, { useEffect, useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CRow,
} from '@coreui/react';
import apiBanner from '../../../service/apiBanner';
import { useNavigate } from 'react-router-dom';
import { imageURL } from "../../../service/config";
import axiosInstance from "../../../axio";
import apiUploadFile from "../../../service/apiUploadFile";

const CreateBanner = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('/');
    const [position, setPosition] = useState('slider-main');
    const [status, setStatus] = useState(2);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = document.querySelector("#image");
        if (name !== '' && description !== '' && image.files.length !== 0 && position !== '') {
            e.preventDefault();
            const banner = {
                name: name,
                description: description,
                link:link,
                position: position,
                status: status,
                image: ""
            };

            let file = new FormData();
            file.append("files", image.files[0]);

            axiosInstance.enableUploadFile();

            apiUploadFile.uploadFile(file)
                .then(async (res) => {
                    let filename = res.data.filename;
                    banner.image = filename;

                    axiosInstance.enableJson();
                    const responseBanner = await apiBanner.createBanner(banner)
                    if(responseBanner.data !== null){
                        alert('Thêm dữ liệu thành công !');
                        setTamp(responseBanner.data.id);
                        navigate('/banner/bannerlist', { replace: true });

                    }else{
                        alert('Thêm dữ liệu thất bại !');
                    }
                })
                .catch(e => console.log(e))

        }
        else {
            e.preventDefault();
            alert('Vui lòng nhập đầu đủ thông tin !')
        }


    };

    // trash cat
    function trashBanner(id) {
        apiBanner.trashBanner(id).then(function (result) {
            if (result.data.success === 'true') {
                alert(result.data.message);
                setTamp(id);
            }
            else {
                alert(result.data.message);
            }
        })
    }

    // hien thi
    function displayBanner(id) {
        apiBanner.displayBanner(id).then(function (result) {
            if (result.data.success === 'true') {
                alert(result.data.message);
                setTamp(id);
            }
            else {
                alert(result.data.message);
            }
        })
    }


    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Thêm banner mới</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <CFormLabel htmlFor="name">Tên banner</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    placeholder="Nhập tên banner"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="description">Mô tả</CFormLabel>
                                <CFormTextarea
                                    id="description"
                                    rows="3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></CFormTextarea>
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="link">Link</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="link"
                                    placeholder="Nhập link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="position">Vị trí</CFormLabel>
                                <CFormSelect
                                    id="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                    <option value="slider-main">Slider chính</option>
                                    <option value="slider-secondary">Slider phụ</option>
                                    <option value="banner-top">Banner trên</option>
                                    <option value="banner-bottom">Banner dưới</option>
                                </CFormSelect>
                            </div>
                            <div className="mb-3">
                                        <label>Hình ảnh </label>
                                        <input id="image" type="file" name="image" className="form-control" />
                                    </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="status">Trạng thái</CFormLabel>
                                <CFormSelect
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(parseInt(e.target.value))}
                                >
                                    <option value={1}>Hiển thị</option>
                                    <option value={2}>Ẩn</option>
                                </CFormSelect>
                            </div>
                            <CButton type="submit" color="primary">
                                Lưu
                            </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default CreateBanner;