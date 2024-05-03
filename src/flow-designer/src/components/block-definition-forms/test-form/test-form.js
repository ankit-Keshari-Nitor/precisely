import { Form, TextInput, Grid, Column, TextArea, Button } from '@carbon/react';
import React from 'react'
import { useForm } from "react-hook-form"

export default function TestForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch
    } = useForm({
        mode: 'onChange', defaultValues: {
            userId: "",
            description: "",
        },
    });

    const onSubmit = (data) => console.log(data)

    return (
        <Form data-testid="loginForm" name="login" onSubmit={handleSubmit(onSubmit)}>
            <Grid>
                <Column className="col-margin" lg={16}>
                    <TextInput
                        id="userId"
                        data-testid="userId"
                        labelText="User Id"
                        invalidText={errors.userId?.message}
                        invalid={errors.userId ? true : false}
                        placeholder=""
                        {...register('userId',
                            {
                                required: "User Id Address is required",
                                minLength: { value: 3, message: "Min 3 char required required" },
                                maxLength: { value: 50, message: "Max 50 char required required" }
                            })}
                    />
                </Column>
                <Column className="col-margin" lg={16}>
                    <TextArea
                        id="description"
                        data-testid="description"
                        labelText="Description"
                        invalidText={errors.description?.message}
                        invalid={errors.description ? true : false}
                        placeholder=""
                        {...register('description',
                            {
                                required: "Description Address is required",
                                minLength: { value: 3, message: "Min 3 char required required" },
                                maxLength: { value: 50, message: "Max 50 char required required" }
                            })} />
                </Column>
            </Grid>
            <Grid className="buttons-wrapper-grid">

                <Column lg={8}>
                    <Button data-testid="save" name="save" kind="primary" type="submit">
                        Save
                    </Button>

                </Column>
            </Grid>
        </Form>
    )
}
