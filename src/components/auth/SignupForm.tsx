"use client"
import { Flex, TextField, Button } from "@radix-ui/themes"
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons"
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function SignupForm() {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm(
        { 
            values:{
                name:"",
                email:"",
                password:"",
            }
         }
      );

      const onSubmit = handleSubmit(async(data) => {
        console.log(data);

       const res = await axios.post('/api/auth/register',data)

       console.log(res)
      });
  return (
    <form onSubmit={onSubmit}>
    <Flex direction="column" gap="2">

        <label htmlFor="name">Nombre</label>
        <TextField.Root>

            <TextField.Slot>
                <PersonIcon height="16" width="16"/>
            </TextField.Slot>

            <Controller
            name="name"
            control={control}
            rules={{
              required: {
                message: "Email es requerido",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="nombre"
                  
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root>

            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"/>
            </TextField.Slot>

            <Controller
            name="email"
            control={control}
            rules={{
              required: {
                message: "Email es requerido",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="juan@email.com"
                 
                  {...field}
                />
              );
            }}
          />
          
        </TextField.Root>

        <label htmlFor="password">Password</label>
        <TextField.Root>

            <TextField.Slot>
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>

            <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "La contrseña es requerido",
                value: true,
              },
              minLength:{
                message: "El Password debe tener mas de 8 caracteres",
                value:8,
              }
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="*********"
                 
                  {...field}
                />
              );
            }}
          />

        </TextField.Root>

        <Button type="submit" mt="4">Sign Up</Button> 
    </Flex>
    </form>
  )
}

export default SignupForm