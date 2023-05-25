import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TituloFormulario from './TituloFormulario';

const Formulario = () => {
   const [nombre, setNombre] = useState("");
   const [apellido, setApellido] = useState("");
   const [email, setEmail] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()

        if (!nombre) {
        alert('El nombre es obligatorio');
        }
        
        if (!apellido) {
            alert('El apellido es obligatorio');
        }
        
        if (!email) {
            alert('El email es obligatorio');
        } else{
            console.log(nombre,apellido,email);
        }

    }
   
    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
            <TituloFormulario/>
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text"
                 placeholder="Escribe tu nombre"
                 onChange={(e)=>setNombre(e.target.value)}
                 value={nombre}
                />

                <Form.Label>Apellido:</Form.Label>
                <Form.Control type="text"
                 placeholder="Escribe tu apellido" 
                 onChange={(e)=>setApellido(e.target.value)}
                 value={apellido}
                />
                
                <Form.Label>Direccion de Email:</Form.Label>
                <Form.Control type="email"
                 placeholder="email@ejemplo.com"
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                />
                <div  className='mt-4 d-flex justify-content-end'>
                    <Button type='submit' className='px-5' >Enviar</Button>
                </div>
            </Form.Group>
        </Form>
    );
};

export default Formulario;