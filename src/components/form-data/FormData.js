import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';

import { addRow } from '../../helpers/spreadSheet';

import './form-data.scss';

const FormData = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneValidateMessage, setPhoneValidateMessage] = useState('');
  const [address, setAddress] = useState('');
  const [submited, setSubmited] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhone = (phone) => {
    const regex = new RegExp('^\\d{11}$', 'g');
    const is11PhoneNumber = regex.test(phone);
    if (!is11PhoneNumber) {
      setPhoneValidateMessage('*Please enter 11 numbers');
    } else {
      setPhoneValidateMessage('');
    }
    setPhone(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidateForm = phoneValidateMessage === '' ? true : false;
    if (isValidateForm) {
      const data = { name, phone_number: phone, address };
      setIsSubmitting(true);
      addRow(data).then(
        () => {
          setSubmited(true);
          setIsSubmitting(false);
        },
        () => {
          alert('some thing went wrong');
        }
      );
    }
  };
  return (
    <div className="Contact_form px-2">
      {!submited ? (
        <Form onSubmit={handleSubmit}>
          <h3 className="Contact_form-title">
            Order form Shiva Lucky Charm by Hanz Cua for
          </h3>
          <Form.Group controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="userPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Label className="text-danger Contact_form-phoneValidate">
              {phoneValidateMessage}
            </Form.Label>
            <Form.Control
              onChange={(e) => handlePhone(e.target.value)}
              value={phone}
              type="text"
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>
          <Form.Group controlId="userAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Enter your address"
              required
            />
          </Form.Group>

          <Button
            className="btn-rounded"
            style={{ width: '100%', padding: '10px' }}
            variant="success"
            type="submit"
          >
            {isSubmitting ? (
              <ClipLoader color="#fff" loading={true} size={35} />
            ) : (
              'Order'
            )}
          </Button>
        </Form>
      ) : (
        <div>
          <h5 className="text-success">Thank you for your order</h5>
        </div>
      )}
    </div>
  );
};
export default FormData;
