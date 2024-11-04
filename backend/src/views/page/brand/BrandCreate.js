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
import apiBrand from '../../../service/apiBrand';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../../axio";
import apiUploadFile from '../../../service/apiUploadFile';

const CreateBrand = () => {
    const [brandName, setBrandName] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState("");
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = document.querySelector("#image");

        if (brandName !== '' && description !== '' && image.files.length !== 0) {
            e.preventDefault();
            const brand = {
                name: brandName,
                description: description,
                status: status,
                icon: ""
            };

            let file = new FormData();
            file.append("files", image.files[0]);

            axiosInstance.enableUploadFile();

            apiUploadFile.uploadFile(file)
                .then(async (res) => {
                    let filename = res.data.filename;
                    brand.icon = filename;

                    axiosInstance.enableJson();
                    const responseBrand = await apiBrand.createBrand(brand)
                    if(responseBrand.data !== null){
                        alert('Thêm dữ liệu thành công !');
                        navigate('/Brand/brandlist/1/10', { replace: true });

                        setTamp(responseBrand.data.id);

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

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Thêm thương hiệu mới</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <CFormLabel htmlFor="brandName">Tên thương hiệu</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="brandName"
                                    placeholder="Nhập tên thương hiệu"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <CFormLabel htmlFor="slug">Tên slug</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="slug"
                                    placeholder="Nhập tên slug"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div class="mb-3">
                                        <label>Icon</label>
                                        <input type="file" name="image" id="image" class="form-control" />
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

export default CreateBrand;