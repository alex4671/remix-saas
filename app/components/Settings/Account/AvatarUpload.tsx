import {Avatar, Box, Button, FileButton, Group, Paper, Stack, Text, Title} from "@mantine/core";
import {Form} from "@remix-run/react";
import {IconUpload} from "@tabler/icons";
import {useUser} from "~/utils/utils";
import {useState} from "react";

export const AvatarUpload = () => {
  const user = useUser()
  const [_, setFile] = useState<File | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatarUrl)

  const handleSelectFile = (file: File) => {
    setFile(file)
    setSelectedAvatar(URL.createObjectURL(file))
  }

  const handleRemoveAvatar = () => {
    setSelectedAvatar(null)
  }

  return (
    <Paper shadow="0" withBorder mb={12}>
      <Form method={"post"} encType={"multipart/form-data"}>
        <Box p={"lg"}>
          <Title order={2}>Avatar</Title>
          <Text color={"dimmed"}>Set or remove avatar</Text>
          <Box my={12}>
            <Stack align="flex-start">
              <Avatar src={selectedAvatar} alt="it's me" radius="xl" size={72}/>
              <FileButton onChange={handleSelectFile} accept="image/png,image/jpeg" name={"file"}>
                {(props) =>
                  <Button
                    variant="outline"
                    color={"gray"}
                    leftIcon={<IconUpload size={"14"}/>}
                    {...props}
                  >
                    Select avatar
                  </Button>}
              </FileButton>
            </Stack>
          </Box>
          <Box py={12}>
            <Group>
              <Button
                type={"submit"}
                color={"emerald"}
                name={"intent"}
                value={"uploadAvatar"}
              >
                Upload
              </Button>
              <Button
                type={"submit"}
                color={"red"}
                name={"intent"}
                value={"deleteAvatar"}
                onClick={handleRemoveAvatar}
              >
                Delete
              </Button>
            </Group>
          </Box>
        </Box>
      </Form>
    </Paper>
  )
}
