import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DropZone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      console.log(acceptedFiles);
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": ["pdf"],
    },
    maxFiles: 1,
    maxSize: 1000 * 1024,
  });

  return (
    <div
      style={{
        // background: "linear-gradient(to right, #fde047, #fb923c)",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", "flex-direction": "row" }}>
        
        <div style={{ flex: "1","padding-top": "10px", }}>
          <div style={{ padding: "48px" }}>
            <div>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  "padding-left": "2.5rem","paddingTop":"2.5rem"
                }}
              >
                Get your new{" "}
                <span style={{ "font-weight": "900", color: "#b91c1c" }}>
                  Income
                </span>{" "}
                source!!!
              </h1>
            </div>
            <div>
              <h5
                style={{
                  "font-weight": "500",
                  "padding-left": "2.8rem",
                  "padding-top": "0.5rem",
                  fontFamily:"inherit",
                  letterSpacing:"0.3px",
                }}
              >Share the clear and 'to-the-point' content to community of students just like us. Because we know today's content ocean is very huge and we suffer getting 'to-the-point' content that really helps.
              
              </h5>
            </div>
            <div style={{ "padding-top": "75px" }}>
              
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  paddingLeft: "2.7rem",
                }}
              >
                Upload content Here and,{` `}
              {/* <span style={{ borderRadius:"10px", backgroundColor:"green",color: "#f9a825" }}> ‎ Earn Money ‎</span> */} <br />
              <div style={{ 
                borderRadius:"10px", 
                backgroundColor:"#f9a825",
                color: "green",
                marginTop:"3px",
                paddingBottom:"5px",
                width:"fit-content"
              }}> ‎ Earn Money! ‎</div>
              </h1>
              <h5
                style={{
                  // "font-size": "1.125rem",
                  "font-weight": "500",
                  "padding-left": "2.7rem",
                  "padding-top": "2rem",
                  fontFamily:"inherit",
                  letterSpacing:"0.3px",
                }}
              >
                You'll earn according to engagement on content that you share.
              </h5>
              <hr style={{ marginLeft:"40px",border: "1px solid #000000" }} />
            </div>
          </div>
        </div>

        <div style={{ flex: "1", "padding-top": "1rem", position: "relative" }}>
          <div>
            <div
              style={{
                "justify-content": "center",
                "align-items": "center",
                display: "flex",
                "flex-direction": "column",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "#f9a825",
                  // border: "2px solid #6B7280",
                  boxShadow:
                    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                  borderRadius: "0.5rem",
                  height: "fit-content",
                  padding: "2rem",
                  marginTop: "2em",
                }}
              >
                <section>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "-55px",
                    }}
                  >
                    <form action="" style={{fontWeight:"500", fontSize:"large"}}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        {/*<label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "-15px",
                            fontSize: "16px",
                          }}
                        >
                          Add Title of your content :
                        </label>
                        <input
                          onChange={handelTitle}
                          style={{
                            border: "2px solid #1F2937",
                            "border-radius": "0.5rem",
                            fontSize: "16px",
                            padding: "0.5rem",
                            height: "2.5rem",
                            width: "24rem",
                            marginBottom: "-35px",
                          }}
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Add Title"
                        />*/}

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "600",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "18px",
                          }}
                        >
                          Add Title of your content 
                        </label>
                        <textarea
                          id="desc"
                          name="desc"
                          rows={1}
                          cols={30}
                          style={{
                            backgroundColor:"white",
                            border:"none",   
                            borderRadius: "0.2rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                            marginBottom: "-35px",
                          }}
                          placeholder="Add Title"
                        />

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "600",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "18px",
                          }}
                        >
                          Description 
                        </label>
                        <textarea
                          id="desc"
                          name="desc"
                          rows={3}
                          cols={30}
                          style={{
                            border:"none",                            
                            borderRadius: "0.2rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                            marginBottom: "-35px",
                          }}
                          placeholder="Add Description"
                        />

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "600",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "18px",
                          }}
                        >
                          Add Tags 
                        </label>
                        <textarea
                          id="tags"
                          name="tags"
                          rows={1}
                          cols={30}
                          style={{
                            backgroundColor:"white",
                            border:"none",   
                            borderRadius: "0.2rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                          }}
                          placeholder="Add Tags"
                        />

                        {/*<label className="pt-2 font-medium pb-2 text-base">
                        Add YouTube link :
                      </label>
                      <input
                      type="text"
                        id="YTlink"
                        name="YTlink"
                        className="border border-slate-950 rounded-xl text-base p-2 w-96"
                        placeholder="Add YouTube link"
                      />*/}
                      </div>

                      <div
                        style={{
                          justifyContent: "center",
                          marginTop: "1rem",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                          border: "1px dashed #B0BAC9",
                          borderRadius: "0.75rem",
                          padding: "0.25rem",
                          backgroundColor: "#FDE047",
                        }}
                      >
                        <div
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                            width: "8rem",
                          }}
                          {...getRootProps({})}
                        >
                          <h1
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              margin: "0.5rem",
                            }}
                          >
                            
                          </h1>

                          <FontAwesomeIcon
                            style={{ height: "30px" }}
                            icon={faFileUpload}
                          />
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p
                              style={{
                                margin: "0.25rem",
                                fontSize: "12px",
                                width: "22rem",
                                padding: "0.5rem",
                                color: "#000000",
                                marginLeft: "65px",
                              }}
                            >
                              Drop the files here ...
                            </p>
                          ) : (
                            <p
                              style={{
                                margin: "0.25rem",
                                fontSize: "12px",
                                width: "22rem",
                                padding: "0.5rem",
                                color: "#000000",
                                marginLeft: "90px",
                              }}
                            >
                              Drag & drop some files here, or click to select
                              files
                            </p>
                          )}
                        </div>
                      </div>

                      <section style={{ marginTop: "0.75rem" }}>
                        <h3
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#000000",
                            marginTop: "0.5rem",
                            borderBottom: "1px solid #1F2937",
                            paddingBottom: "0.5rem",
                          }}
                        >
                          Accepted Files
                        </h3>
                        <ul
                          style={{
                            marginTop: "2rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                            gridGap: "2.5rem",

                            "@media (min-width: 640px)": {
                              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            },

                            "@media (min-width: 768px)": {
                              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            },

                            "@media (min-width: 1024px)": {
                              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            },

                            "@media (min-width: 1280px)": {
                              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                            },
                          }}
                        >
                          {files.map((file) => (
                            <li
                              key={file.name}
                              style={{
                                position: "relative",
                                height: "1.5rem",
                                borderRadius: "0.375rem",
                                color: "#000000",
                                fontSize: "0.875rem",
                              }}
                            >
                              <button
                                type="button"
                                style={{
                                  border: "1px solid #CBD5E0",
                                  borderRadius: "500px",
                                  display: "flex",
                                  height: "22px",
                                  width: "22px",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  position: "absolute",
                                  top: "-17px",
                                  right: "0",
                                  transitionProperty: "background-color",
                                  transitionDuration: "0.2s",
                                  boxShadow:
                    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                       
                                }}
                                onClick={() => removeFile(file.name)}
                              >
                                <XMarkIcon
                                  style={{
                                    width: "1.25rem",
                                    height: "1.25rem",
                                    transitionProperty: "colors",
                                  }}
                                />
                              </button>
                              <p
                                style={{
                                  marginTop: "0.25rem",
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                {file.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </section>
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <input
                          type="submit"
                          id="submit"
                          name="submit"
                          style={{
                            backgroundColor: "yellow",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            marginTop: "0.25rem",
                            cursor: "pointer",
                            boxShadow:
                    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                       
                            height: "fit-content",
                            width: "22rem",
                            padding: "10px",
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
