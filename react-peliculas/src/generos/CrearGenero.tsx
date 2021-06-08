import React from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../utils/Button";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
export default function CrearGenero() {
    const history = useHistory();
    return (
        <>
            <h3>Crear Genero</h3>

            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string().required('Este campo es requerido')
                    })
                }
            >

                <Form>
                    <div className="form-group"  >
                        <label htmlFor="nombre">Nombre</label>
                        <Field name="nombre" className="form-control" />
                        <ErrorMessage name="nombre" >
                            {mensaje =>
                                <div className="text-danger">
                                    {mensaje}
                                </div>
                            }  </ErrorMessage>
                    </div>
                    <Button type="submit" > Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos" >Cancelar</Link>

                </Form>
            </Formik>
        </>
    )
}