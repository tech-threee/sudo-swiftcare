"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
interface Props {
    letter: string;
    onChange: (richText: string) => void;
}
export default function Tiptap({ letter, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: letter,
        editorProps: {
            // attributes: {
            //     class: "   p-4"
            // }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        }
    });
    return (
        <div className="flex flex-col  gap-4 justify-stretch min-h-[250px]">
            {
                editor && <Toolbar editor={editor} />
            }
            <div className="w-full h-full border min-h-[230px] p-4 rounded-lg">

                <EditorContent editor={editor} />
            </div>
        </div>
    );
}