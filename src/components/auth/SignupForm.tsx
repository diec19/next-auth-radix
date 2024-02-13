"use client"
import { Flex, TextField, Button } from "@radix-ui/themes"
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons"

function SignupForm() {
  return (
    <Flex direction="column" gap="2">

        <label htmlFor="name">Nombre</label>
        <TextField.Root>

            <TextField.Slot>
                <PersonIcon height="16" width="16"/>
            </TextField.Slot>

            <TextField.Input
               type="text"
               placeholder="nombre"
            />
        </TextField.Root>

        <label htmlFor="email">Email</label>
        <TextField.Root>

            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"/>
            </TextField.Slot>

            <TextField.Input
               type="email"
               placeholder="juan@email.com"
            />
        </TextField.Root>

        <label htmlFor="password">Password</label>
        <TextField.Root>

            <TextField.Slot>
                <LockClosedIcon height="16" width="16"/>
            </TextField.Slot>

            <TextField.Input
               type="password"
               placeholder="**********"
            />
            
        </TextField.Root>

        <Button>Sign Up</Button> 
    </Flex>
  )
}

export default SignupForm