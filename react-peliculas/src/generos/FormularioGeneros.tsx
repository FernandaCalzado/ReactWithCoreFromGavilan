import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./generos.model";
import * as Yup from 'yup'

export default function FormularioGeneros(props: formularioGenerosProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                        .required('Este campo es requerido')
                        .primeraLetraMayuscula()
                })
            }
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText
                        campo="nombre" label="Nombre" placeHolder="Nombre Genero" />
                    <Button disabled={formikProps.isSubmitting} type="submit" > Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos" >Cancelar</Link>

                </Form>
            )}

        </Formik>

    )
}

interface formularioGenerosProps {
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}
