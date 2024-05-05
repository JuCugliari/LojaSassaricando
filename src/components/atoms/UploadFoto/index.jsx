import { Grid } from "@mui/material";
import { useState } from "react";
import Dropzone from "react-dropzone";
import "./index.css";

const UploadFile = () => {
 const [file, setFile] = useState(null);

 const handleUpload = (acceptedFiles) => {
  console.log("logging drop/selected file", acceptedFiles);
  // fake request to upload file
  const url = "https://api.escuelajs.co/api/v1/files/upload";
  const formData = new FormData();
  formData.append("file", acceptedFiles[0]); // Assuming you only accept one file

  fetch(url, {
   method: "POST",
   body: formData
  })
   .then((response) => {
    if (response.ok) {
     // File uploaded successfully
     setFile(acceptedFiles[0]);
    } else {
     // File upload failed
     console.error(response);
    }
   })
   .catch((error) => {
    console.error(error);
   });
 };

 return (
  <Grid className="containerUpload">
   <Dropzone
    onDrop={handleUpload}
    accept="image/*"
    minSize={1024}
    maxSize={3072000}>
    {({
     getRootProps,
     getInputProps,

     isDragAccept,
     isDragReject
    }) => {
     const additionalClass = isDragAccept
      ? "accept"
      : isDragReject
      ? "reject"
      : "";

     return (
      <Grid
       {...getRootProps({
        className: `dropzone ${additionalClass}`
       })}>
       <input {...getInputProps()} />
       <p>Arraste a imagem ou clique aqui para fazer o upload</p>
       {file && (
        <Grid className="containerImagem">
         {console.log(file)}
         <img
          src={URL.createObjectURL(file)}
          className="img-container"
          alt="Uploaded file"
         />
        </Grid>
       )}
      </Grid>
     );
    }}
   </Dropzone>
  </Grid>
 );
};

export default UploadFile;
