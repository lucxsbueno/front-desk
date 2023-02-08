import React, {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from "react";

import { Folder } from "lucide-react";
import { useDropzone } from "react-dropzone";

import "./styles.css";

const DocDropzone = forwardRef((props, ref) => {
  const [loading] = useState(false);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      var reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setFiles((files) => [
          ...files,
          {
            name: file.name,
            type: file.type,
            body: reader.result,
            blob: URL.createObjectURL(file),
            format: file.name.split(".").pop(),
            mime_type: file.type,
          },
        ]);
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "application/pdf": [],
    },
    disabled: props.disabled,
  });

  useImperativeHandle(ref, () => ({
    openFiles() {
      open();
    },
  }));

  const sendArquives = () => {
    // files.forEach(file => {
    //   axiosFetch({
    //     axiosInstance,
    //     method: "POST",
    //     url: "/users/documents/" + props.user.id,
    //     redirect_to: "",
    //     data: file
    //   });
    // });

    setFiles([]);
  };

  const cleanFiles = () => setFiles([]);

  const hasFiles = files?.length > 0;

  const classes = isDragActive
    ? "my-dropzone my-dropzone--ondrop"
    : "my-dropzone";

  const label = hasFiles
    ? "Você selecionou " + files?.length + " arquivos."
    : props.user.files
    ? props.user.files.length +
      (props.user.files.length > 1 ? " documentos." : " documento.")
    : "Nenhum arquivo selecionado.";

  const sendBtnLabel = loading ? "Carregando..." : "Enviar arquivos";

  const hasDocs = props.user.documents ? (
    <span className="my-dropzone__title">Documentos enviados!</span>
  ) : (
    <span className="my-dropzone__title">
      Arraste o arquivo<span className="my-dropzone__link">aqui.</span>
    </span>
  );

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <div className={classes}>
          <Folder className="my-dropzone__icon" />
          {hasDocs}
          <span className="my-dropzone__accepted-files">{label}</span>
        </div>
      </div>

      {hasFiles && (
        <div className="mb-10 d-flex flex-row">
          <button className="btn__upload" onClick={sendArquives}>
            {sendBtnLabel}
          </button>
          {!loading && (
            <button className="btn__upload" onClick={cleanFiles}>
              Limpar
            </button>
          )}
        </div>
      )}
    </div>
  );
});

DocDropzone.displayName = "DocDropzone";

DocDropzone.defaultProps = {
  disabled: false,
};

export default DocDropzone;
