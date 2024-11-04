import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiCustomer from '../../../api/apiCustomer';

function RegisterForm() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name !== '' && phone !== '' && email !== '' && password !== '' && repeat_password !== '') {
            if (password === repeat_password) {
                const data = {
                    name: name,
                    phone: phone,
                    user_name: '',
                    email: email,
                    password: password,
                    roles: 'customer',
                    status: 1
                };
                console.log(data);

                await apiCustomer.createCustomer(data).then((res) => {
                    if (res.data != null) {
                        alert('Bạn đã đăng ký thành công !');
                        navigate('/login');

                    }
                    else {
                        alert('Đăng ký không thành công !');
                    }
                })
            }
            else {
                alert('Mật khẩu không khớp với nhau !');
            }
        }
        else {
            alert('Vui lòng nhập đầy đủ thông tin !');
        }
    }

    const styles = {
        sectionContent: {
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        },
        card: {
            maxWidth: '520px',
            margin: '40px auto',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
        },
        cardTitleContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '15px',
        },
        cardTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
        },
        cardBody: {
            padding: '20px',
        },
        formRow: {
            display: 'flex',
            gap: '20px',
        },
        formGroup: {
            marginBottom: '15px',
        },
        formGroupLabel: {
            fontWeight: 'bold',
        },
        formControl: {
            width: '100%',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        btnBlock: {
            width: '100%',
            padding: '10px',
            backgroundColor: 'orange',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '4px',
        },
        textCenter: {
            textAlign: 'center',
        },
        mt4: {
            marginTop: '20px',
        }
    };

    return (
        <section style={styles.sectionContent} className="section-content padding-y">
            <div style={styles.card} className="card mx-auto">
                <div style={styles.cardTitleContainer}>
                    <label style={styles.cardTitle} className="card-title">Đăng ký</label>
                </div>
                <article style={styles.cardBody} className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formRow} className="form-row">
                            <div className="col form-group">
                                <label style={styles.formGroupLabel}>Họ tên *</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="" style={styles.formControl} />
                            </div>
                            <div className="col form-group">
                                <label style={styles.formGroupLabel}>Số điện thoại *</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder=""
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    title="Vui lòng nhập số điện thoại gồm 10 chữ số."
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    style={styles.formControl}
                                />
                            </div>
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <label style={styles.formGroupLabel}>Email *</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="" style={styles.formControl} />
                        </div>
                        <div style={styles.formRow} className="form-row">
                            <div className="form-group col-md-6">
                                <label style={styles.formGroupLabel}>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" style={styles.formControl} />
                            </div>
                            <div className="form-group col-md-6">
                                <label style={styles.formGroupLabel}>Repeat password</label>
                                <input value={repeat_password} onChange={(e) => setRepeatPassword(e.target.value)} className="form-control" type="password" style={styles.formControl} />
                            </div>
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <button type="submit" className="btn btn-primary btn-block" style={styles.btnBlock}> Đăng ký </button>
                        </div>
                        <p style={{ ...styles.textCenter, ...styles.mt4 }}>Have an account? <Link to="/login">Log In</Link></p>
                    </form>
                </article>
            </div>
        </section>
    );
}

export default RegisterForm;
