import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { requireUser } from '~/server/session.server';

const content = '';

export const loader = async ({ request }: LoaderArgs) => {
	await requireUser(request);

	return json({});
};

export default function NewNote() {
	// const fetcher = useFetcher();
	// // let provider = typeof document !== "undefined" ? new WebrtcProvider(user.email, ydoc) : null
	// const ref = useRef<HTMLDivElement>(null);
	// const editor = useEditor({
	// 	extensions: [
	// 		StarterKit,
	// 		Underline,
	// 		Link,
	// 		Superscript,
	// 		SubScript,
	// 		Highlight,
	// 		TextStyle,
	// 		Color,
	// 		// Collaboration.configure({
	// 		//   document: ydoc,
	// 		// }),
	// 		// CollaborationCursor.configure({
	// 		//   provider: provider,
	// 		//   user: {
	// 		//     name: user.email,
	// 		//     color: '#f783ac',
	// 		//   },
	// 		// }),
	// 		// Placeholder.configure({
	// 		//   placeholder:
	// 		//     'Write something … It’ll be shared with everyone else looking at this example.',
	// 		// }),
	// 		TextAlign.configure({ types: ['heading', 'paragraph'] }),
	// 	],
	// 	content,
	// });
	//
	// const handleSaveNote = async () => {
	// 	if (ref.current === null) {
	// 		return;
	// 	}
	// 	const image = await toPng(ref.current, {
	// 		backgroundColor: 'white',
	// 		style: { width: '300px', padding: '10px 20px' },
	// 	});
	//
	// 	fetcher.submit(
	// 		{ note: editor?.getHTML() ?? '', intent: 'createNote', image },
	// 		{ method: 'post', action: '/notes' },
	// 	);
	// };

	return (
		<>
			WIP
			{/*<Tabs*/}
			{/*	defaultValue="editor"*/}
			{/*	color="dark"*/}
			{/*	variant="pills"*/}
			{/*>*/}
			{/*	<Tabs.List>*/}
			{/*		<Tabs.Tab value="editor">Editor</Tabs.Tab>*/}
			{/*		<Tabs.Tab*/}
			{/*			value="preview"*/}
			{/*			disabled={editor?.getHTML() === '<p></p>'}*/}
			{/*		>*/}
			{/*			Preview*/}
			{/*		</Tabs.Tab>*/}
			{/*	</Tabs.List>*/}
			{/*	<Tabs.Panel*/}
			{/*		value="editor"*/}
			{/*		pt="xs"*/}
			{/*	>*/}
			{/*		<ClientOnly fallback={<div>Loading</div>}>*/}
			{/*			{() => (*/}
			{/*				<RichTextEditor editor={editor}>*/}
			{/*					<RichTextEditor.Toolbar*/}
			{/*						sticky*/}
			{/*						stickyOffset={60}*/}
			{/*					>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.Bold />*/}
			{/*							<RichTextEditor.Italic />*/}
			{/*							<RichTextEditor.Underline />*/}
			{/*							<RichTextEditor.Strikethrough />*/}
			{/*							<RichTextEditor.ClearFormatting />*/}
			{/*							<RichTextEditor.Highlight />*/}
			{/*							<RichTextEditor.Code />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.H1 />*/}
			{/*							<RichTextEditor.H2 />*/}
			{/*							<RichTextEditor.H3 />*/}
			{/*							<RichTextEditor.H4 />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.Blockquote />*/}
			{/*							<RichTextEditor.Hr />*/}
			{/*							<RichTextEditor.BulletList />*/}
			{/*							<RichTextEditor.OrderedList />*/}
			{/*							<RichTextEditor.Subscript />*/}
			{/*							<RichTextEditor.Superscript />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.Link />*/}
			{/*							<RichTextEditor.Unlink />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.AlignLeft />*/}
			{/*							<RichTextEditor.AlignCenter />*/}
			{/*							<RichTextEditor.AlignJustify />*/}
			{/*							<RichTextEditor.AlignRight />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*						<RichTextEditor.ControlsGroup>*/}
			{/*							<RichTextEditor.ColorPicker*/}
			{/*								colors={[*/}
			{/*									'#25262b',*/}
			{/*									'#868e96',*/}
			{/*									'#fa5252',*/}
			{/*									'#e64980',*/}
			{/*									'#be4bdb',*/}
			{/*									'#7950f2',*/}
			{/*									'#4c6ef5',*/}
			{/*									'#228be6',*/}
			{/*									'#15aabf',*/}
			{/*									'#12b886',*/}
			{/*									'#40c057',*/}
			{/*									'#82c91e',*/}
			{/*									'#fab005',*/}
			{/*									'#fd7e14',*/}
			{/*								]}*/}
			{/*							/>*/}
			{/*							<RichTextEditor.Control interactive={false}>*/}
			{/*								<IconColorPicker*/}
			{/*									size={16}*/}
			{/*									stroke={1.5}*/}
			{/*								/>*/}
			{/*							</RichTextEditor.Control>*/}
			{/*							<RichTextEditor.Color color="#F03E3E" />*/}
			{/*							<RichTextEditor.Color color="#7048E8" />*/}
			{/*							<RichTextEditor.Color color="#1098AD" />*/}
			{/*							<RichTextEditor.Color color="#37B24D" />*/}
			{/*							<RichTextEditor.Color color="#F59F00" />*/}
			{/*							<RichTextEditor.UnsetColor />*/}
			{/*						</RichTextEditor.ControlsGroup>*/}
			{/*					</RichTextEditor.Toolbar>*/}
			{/*					<RichTextEditor.Content />*/}
			{/*				</RichTextEditor>*/}
			{/*			)}*/}
			{/*		</ClientOnly>*/}
			{/*	</Tabs.Panel>*/}
			{/*	<Tabs.Panel*/}
			{/*		value="preview"*/}
			{/*		pt="xs"*/}
			{/*	>*/}
			{/*		{editor?.getHTML() ? (*/}
			{/*			<TypographyStylesProvider>*/}
			{/*				<Paper*/}
			{/*					withBorder*/}
			{/*					p={'sm'}*/}
			{/*				>*/}
			{/*					<div ref={ref}>*/}
			{/*						<div dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />*/}
			{/*					</div>*/}
			{/*				</Paper>*/}
			{/*			</TypographyStylesProvider>*/}
			{/*		) : (*/}
			{/*			'Loading'*/}
			{/*		)}*/}
			{/*	</Tabs.Panel>*/}
			{/*	<Group*/}
			{/*		mt={24}*/}
			{/*		position={'right'}*/}
			{/*	>*/}
			{/*		<PrimaryButton onClick={handleSaveNote}>Save</PrimaryButton>*/}
			{/*	</Group>*/}
			{/*</Tabs>*/}
		</>
	);
}
