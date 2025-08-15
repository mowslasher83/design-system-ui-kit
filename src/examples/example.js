import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Modal from '../components/Modal';

const App = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);

    return (
        <div>
            <h1>Ví dụ Bộ Công Cụ UI</h1>
            <Button label="Mở Modal" onClick={() => setModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Đây là Modal!</h2>
                <p>Nội dung của modal ở đây.</p>
            </Modal>
            <Form onSubmit={(e) => { e.preventDefault(); alert('Đã gửi!'); }} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));