"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { 
        values:{
            email:"",
            password:"",
        }
     }
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
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
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.email && (
          <Text color="ruby" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
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
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>

        {errors.password && (
          <Text color="ruby" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" mt="4">Sign In</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
