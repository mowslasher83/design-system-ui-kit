import React from 'react';

const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nhập tên" />
            <button type="submit">Gửi</button>
        </form>
    );
};

export default Form;
