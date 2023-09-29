import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface IEditorProps {
  value: string;
  onChange: (value: string) => void;
}
export function Editor({ value, onChange }: IEditorProps) {
  const uploadAdapter = (loader: any) => {
    return {
      upload() {
        return new Promise((resolve) => {
          loader.file.then(async (file: any) => {
            const formData = new FormData();
            formData.append("file", file);

            // const response = await uploadPublicFile({ data: formData });

            resolve({
              default:
                "https://i.namu.wiki/i/ggmF443wfFsXPlT94RW2JHmdrIy3Q03pTmIHjUIeTEu5G3Hd73SmbWCsq7diU2COU7YFkP0Zi-cCEBgHw4bT3g.webp",
              // `/api/v1/files/public/${response}?preview=true`,
            });
          });
        });
      },
    };
  };

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
      }}
      onReady={(editor: any) => editor.data.set(value || "")}
      onChange={(_, editor) => onChange(editor.getData())}
    />
  );
}
