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
import apiCategory from '../../../service/apiCategory';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
    const [catName, setCatName] = useState("");
    const [parent, setParent] = useState(0);
    const [sortOrder, setSortOrder] = useState(0);
    const [status, setStatus] = useState(2);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate(); // Sử dụng useNavigate thay cho Navigate trực tiếp

    useEffect(() => {
        apiCategory.getAll().then((res) => {
            try {
                console.log(res);
                const data = res.data;
                const categoryData = data.map((item) => ({
                    id: item.id,
                    name: item.category_name,
                    slug: item.slug,
                    parent: item.parent_name,
                    sort_order: item.sort_order,
                    status: item.status,
                }));
                setCategories(categoryData);
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (catName !== "") {
            const category = {
                category_name: catName,
                parent,
                sort_order: sortOrder,
                status,
            };

            await apiCategory.createCategory(category).then((res) => {
                if (res.data != null) {
                    alert("Thêm dữ liệu thành công !");
                    navigate('/category/categorylist/1/10', { replace: true });
                } else {
                    alert("Không thành công !");
                }
            });
        } else {
            alert("Vui lòng nhập đầu đủ thông tin !");
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Thêm danh mục</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm className="row g-3" onSubmit={handleSubmit}>
                            <CCol md={6}>
                                <CFormLabel htmlFor="inputName">Tên danh mục</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="inputName"
                                    value={catName}
                                    onChange={(e) => setCatName(e.target.value)}
                                />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="inputParent">Danh mục cha</CFormLabel>
                                <CFormSelect
                                    id="inputParent"
                                    onChange={(e) => setParent(e.target.value)}
                                    value={parent}
                                >
                                    <option value={0}>Không có</option>
                                    {categories.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </CFormSelect>
                            </CCol>
                            <CCol xs={6}>
                                <CFormLabel htmlFor="inputSortOrder">Sắp xếp</CFormLabel>
                                <CFormSelect id="inputSortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {categories.map((item, index) => (
                                        <option value={item.sort_order + 1} key={index}>Sau: {item.name}</option>
                                    ))}
                                </CFormSelect>
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="inputStatus">Trạng thái</CFormLabel>
                                <CFormSelect
                                    id="inputStatus"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={12}>
                                <CButton color="primary" type="submit">
                                    Lưu
                                </CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default CreateCategory;
