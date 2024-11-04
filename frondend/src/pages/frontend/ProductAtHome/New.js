import apiPost from '../../../api/apiPost';
import { useEffect, useState } from 'react';
import { imageURL } from '../../../api/config';
import { Link } from 'react-router-dom';
import './new.css'; // Import file CSS mới

function List_New() {
    const [data, setData] = useState([]);
    const [data_item, setDataItem] = useState({});

    useEffect(() => {
        apiPost.getPostNew(1, 10).then((res) => {
            try {
                const tamp = res.data.slice(0, 5); // Lấy 5 bài post đầu tiên từ API
                setData(tamp);
                setDataItem(tamp[0]); // Set bài post chính ban đầu
            } catch (e) {
                console.log(e);
            }
        });
    }, []);

    // Function để set bài post chính khi người dùng click vào bài post phụ
    const handleSetMainPost = (item) => {
        setDataItem(item);
    };

    return (
        <section className="list-new-container">
            <div className='list-new-row'>
                <header className="list-new-header">
                    <h4 className="list-new-title1">TIN TỨC NỔI BẬT</h4>
                    <Link to="/tin-tuc" className="list-new-link1">Xem Thêm</Link>
                </header>
            </div>
            <div className="list-new-grid">
                {/* Render 4 bài post ngang hàng */}
                {data.slice(0, 4).map((item, index) => (
                    <Link to={`tin-tuc/${item.slug}`} key={index} className="list-new-item">
                        <img src={imageURL + item.image_1} className="list-new-image" alt='img' />
                        <div className="list-new-body">
                            <p className="list-new-title">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default List_New;
