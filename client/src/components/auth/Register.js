import { useMutation } from 'react-query';
import { API } from '../../config/api';
import React from 'react';
import { Alert } from 'react-bootstrap';

const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = useMutation(async (e) => {
    try{
        e.preventDefault();

        // Configuration content-type
        const config = {
            headers: {
                'Content-type' : 'application/json',
            },

        };

        // Data Body 
        const body = JSON.stringify(form);

        // Insert Data user to database
        const response = await API.post('/register', body, config);

        // Handling response here
    } catch (error) {
        const alert = (
            <Alert variant='danger' className="py-1">
            Failed 
            </Alert>
        );

        setMessage(alert);
        console.log(error)
    }
  })

export default Register;