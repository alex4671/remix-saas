import {
  ActionIcon,
  AspectRatio,
  Badge,
  Box,
  Card,
  Checkbox,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title
} from "@mantine/core";
import {formatBytes} from "~/utils/utils";
import {Form, useLoaderData, useTransition} from "@remix-run/react";
import {IconDownload, IconTrash} from "@tabler/icons";
import type {Dispatch, SetStateAction} from "react";
import type {loader} from "~/routes/media";

interface Props {
  setSelectedFiles: Dispatch<SetStateAction<string[]>>
  setSelectedFilesUrls: Dispatch<SetStateAction<string[]>>
  searchValue: string;
  filterTypeValue: string[];
  selectedFiles: string[];
}

export const FilesGrid = ({setSelectedFiles, setSelectedFilesUrls, searchValue, filterTypeValue, selectedFiles}: Props) => {
  const {userFiles} = useLoaderData<typeof loader>()
  const transition = useTransition();
  const isSubmitting = transition.submission


  const handlePickFile = (id: string, url: string) => {
    setSelectedFiles(prevState => prevState.includes(id) ? prevState.filter(el => el !== id) : [...prevState, id])
    setSelectedFilesUrls(prevState => prevState.includes(url) ? prevState.filter(el => el !== url) : [...prevState, url])

  }
  const filteredUserFiles = userFiles
    ?.filter(file => file.name.toLowerCase().includes(searchValue.toLowerCase()))
    ?.filter(file => filterTypeValue.length ? filterTypeValue.includes(file.type.split("/")[1]) : true)

  return (
    <Group grow mt={24}>
      {filteredUserFiles?.length ? (
        <SimpleGrid
          cols={4}
          breakpoints={[
            {maxWidth: 'md', cols: 3},
            {maxWidth: 'sm', cols: 2},
            {maxWidth: 'xs', cols: 1},
          ]}
        >
          {filteredUserFiles.map(file => (
            <Card
              p="lg"
              withBorder
              key={file.id}
              sx={(theme) => ({outline: selectedFiles.includes(file.id) ? `2px solid ${theme.colors.dark[6]}` : "none"})}
            >
              <Card.Section>
                <AspectRatio ratio={16 / 9}>
                  {file.type.includes("image") ? (
                    <Image
                      src={file.fileUrl}
                      alt={file.fileUrl}
                    />
                  ) : file.type.includes("video") ? (
                    <video controls preload="metadata">
                      <source src={`${file.fileUrl}#t=0.5`} type={file.type}/>
                    </video>
                  ) : (
                    <Box
                      sx={(theme) => ({background: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]})}>
                      <Text align={"center"}>{file.type}</Text>
                    </Box>
                  )}
                </AspectRatio>
              </Card.Section>

              <Card.Section py="lg" px={"md"}>
                <Group position={"apart"} align={"baseline"}>
                  <Group align={"flex-start"}>
                    <Checkbox color={"dark.6"} onClick={() => handlePickFile(file.id, file.fileUrl)}
                              defaultChecked={selectedFiles.includes(file.id)}/>
                    <Text color={"dimmed"} size={"sm"}>{formatBytes(file.size)}</Text>
                    <Badge color="dark" variant="outline">{file.type.split('/')[1]}</Badge>
                  </Group>
                  <Form method={"post"}>
                    <input type="hidden" name={"fileId"} value={file.id}/>
                    <Group spacing={0}>
                      <ActionIcon component={"a"} href={file.fileUrl} download target={"_blank"}>
                        <IconDownload size={18}/>
                      </ActionIcon>
                      <ActionIcon type={"submit"} name={"intent"} value={"deleteFile"}>
                        <IconTrash size={18}/>
                      </ActionIcon>
                    </Group>
                  </Form>
                </Group>
              </Card.Section>
            </Card>
          ))}
          {isSubmitting && filterTypeValue.length === 0 ? (
            (transition?.submission?.formData.getAll("file") as File[]).map((file) => (
              <Card p="lg" withBorder key={file.name} style={{opacity: "0.5"}}>
                <Card.Section>
                  <AspectRatio ratio={16 / 9}>

                    {file.type.includes("image") ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={"Test"}
                      />
                    ) : file.type.includes("video") ? (
                      <video controls={false} preload="metadata">
                        <source src={`${URL.createObjectURL(file)}#t=0.5`} type={file.type}/>
                      </video>
                    ) : (
                      <Box
                        sx={(theme) => ({background: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]})}>
                        <Text align={"center"}>{file.type}</Text>
                      </Box>
                    )}
                  </AspectRatio>
                </Card.Section>

                <Card.Section py="lg" px={"md"}>
                  <Group position={"apart"}>
                    <Group>
                      <Text color={"dimmed"} size={"sm"}>{formatBytes(file.size)}</Text>
                      <Text color={"dimmed"} size={"sm"}>{file.type}</Text>
                    </Group>
                    <ActionIcon disabled>
                      <IconTrash size={18}/>
                    </ActionIcon>
                  </Group>
                </Card.Section>
              </Card>
            ))

          ) : null}
        </SimpleGrid>
      ) : (
        <Title order={3} align={"center"}>Nothing found</Title>
      )}
    </Group>
  )
}
