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
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // chuyen trang

    const [categories, setCategories] = useState([]);
    const [catName, setCatName] = useState('');
    const [parent, setParent] = useState(0);
    const [sortOrder, setSortOrder] = useState(0);
    const [status, setStatus] = useState(2);

    useEffect(() => {
        apiCategory.getCategoryById(id).then((res) => {
            try {
                setCatName(res.data.category_name);
                setParent(res.data.parent);
                setSortOrder(res.data.sort_order);
                setStatus(res.data.status);
            } catch (e) {
                console.log(e);
            }
        });

        apiCategory.getAll().then((res) => {
            try {
                const data = res.data;
                const categoryData = data.map((item) => {
                    return {
                        id: item.id,
                        name: item.category_name,
                        slug: item.slug,
                        parent: item.parent_name,
                        sort_order: item.sort_order
                    };
                });
                setCategories(categoryData);
            } catch (e) {
                console.log(e);
            }
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (catName !== '') {
            const category = {
                category_name: catName,
                parent: parent,
                sort_order: sortOrder,
                status: status
            };

            await apiCategory.updateCategory(category, id).then((res) => {
                if (res.data != null) {
                    alert("Cập nhật dữ liệu thành công!");
                    navigate('/category/categorylist/1/10', { replace: true });
                } else {
                    alert("Không thành công!");
                }
            });
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    };

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Chỉnh sửa danh mục</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm className="row g-3" onSubmit={handleSubmit}>
                            <CCol md={6}>
                                <CFormLabel htmlFor="inputName">Tên danh mục</CFormLabel>
                                <CFormInput type="text" id="inputName" value={catName} onChange={(e) => setCatName(e.target.value)} />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel htmlFor="inputParent">Danh mục cha</CFormLabel>
                                <CFormSelect id="inputParent" value={parent} onChange={(e) => setParent(e.target.value)}>
                                    <option value="0">None</option>
                                    {categories.map((item, index) => (
                                        <option value={item.id} key={index}>{item.name}</option>
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
                            <CCol md={12}>
                                <CFormLabel htmlFor="inputStatus">Trạng thái</CFormLabel>
                                <CFormSelect id="inputStatus" value={status} onChange={(e) => setStatus(e.target.value)}>
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

export default UpdateCategory;
