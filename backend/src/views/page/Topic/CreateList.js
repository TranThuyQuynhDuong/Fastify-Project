import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

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
import apiTopic from '../../../service/apiTopic';

const CreateTopic = () => {

    const [name, setName] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(2);
    const [topics, setTopics] = useState([]); // State to hold the list of parent topics

    const navigate = useNavigate();

    useEffect(() => {
        

        
    apiTopic.getAll().then((res) => {
        try {
          const data = res.data
          const topicData = data.map((item) => {
            return {
              id: item.id,
              name: item.name,
            }
          })
          setTopics(topicData)
        } catch (e) {
          console.log(e)
        }
      })
    }, []);

    const handleSubmit = async (e) => {
        if (name !== '') {
            e.preventDefault();
            const topic = {
                name: name,
                parent_id: parent_id,
                description: description,
                status: status
            };

            try {
                const res = await apiTopic.createTopic(topic);
                if (res.data != null) {
                    alert("Thêm dữ liệu thành công!");
                    navigate('/topic/topiclist');
                } else {
                    alert("Không thành công!");
                }
            } catch (error) {
                console.error(error);
                alert("Đã có lỗi xảy ra, vui lòng thử lại!");
            }
        } else {
            e.preventDefault();
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    };
console.log(name)
    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Thêm chủ đề mới</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <CFormLabel htmlFor="name">Tên chủ đề</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    placeholder="Nhập tên chủ đề"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                        <label>Danh mục cha (*)</label>
                                        <select name="parent_id" className="form-control" onChange={(e) => setParentId(e.target.value)} value={parent_id}>
                                            <option value="0">None</option>
                                            {topics.map((item, index) => {
                                                return (
                                                    <option value={item.id} key={index}>{item.name}</option>
                                                )
                                            })}
                                        </select>
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

export default CreateTopic;
