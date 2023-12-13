import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Utube = () => {
  const useremail = "harshmavani06@gmail.com";
  const history = useNavigate();

  const [title, setTitle] = useState("");
  const handelTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const [discription, setDiscription] = useState("");
  const handelDiscription = (e) => {
    setDiscription(e.target.value);
    console.log(discription);
  };
  const [ytlink, setYtlink] = useState("");
  const handelYtlink = (e) => {
    setYtlink(e.target.value);
    console.log(ytlink);
  };

  const videoUpload = async (e) => {
    console.log("function callled");
    e.preventDefault();

    const res = await fetch("http://localhost:5000/ytvideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: useremail,
        title: title,
        discription: discription,
        ytlink: ytlink,
        isYT: true,
        isPDF: false,
        like: 0,
        dislike: 0,
      }),
    });
    const data = res.json();
    if (res.status === 200) {
      history("/listpage");
    } else {
      alert("something went wrong");
    }
    console.log(data);
  };

  return (
    <div style={{height: "760px"}}>
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <div style={{ flex: "1", "padding-top": "10px", border:"0px solid black", margin:"50px 0 0 60px" }}>
          <div style={{ padding: "48px" }}>
            <div>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                What's {" "}
                <span style={{ "font-weight": "900", color: "#b91c1c" }}>
                  new
                </span>{" "}
                today?
              </h1>
            </div>
            <div>
              <h5
                style={{
                  "font-weight": "500",
                  "padding-left": "1rem",
                  "padding-top": "0.5rem",
                  fontFamily:"inherit",
                  letterSpacing:"0.3px",
                }}
              >
                Share the clear and 'to-the-point' content to community of students just like us. Because we know today's content ocean is very huge and we suffer getting 'to-the-point' content that really helps.
              </h5>
            </div>
            <div style={{ "padding-top": "25px" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  paddingLeft: "1rem",
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
              <div>
              <h5
                style={{
                  // "font-size": "1.125rem",
                  "font-weight": "500",
                  "padding-left": "1rem",
                  "padding-top": "2rem",
                  fontFamily:"inherit",
                  letterSpacing:"0.3px",
                }}
              >
                You'll earn according to engagement on content that you share.
              </h5>
            </div>
              <hr style={{ border: "1px solid #000000" }} />
            </div>
          </div>
        </div>
        <div style={{ flex: "1", "padding-top": "1rem" }}>
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
                        <label
                          style={{
                            fontWeight:"600", 
                            fontSize:"18px",
                            color: "#000000",
                            marginLeft: "0px",
                            marginBottom: "2px",
                          }}
                          >
                          Add Title of your content 
                        </label>
                        <input                          
                          onChange={handelTitle}
                          id="desc"
                          name="desc"
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
                            fontWeight:"600", 
                            fontSize:"18px",
                            color: "#000000",
                            marginLeft: "0px",
                            marginBottom: "2px",
                          }}
                        >
                          Description 
                        </label>
                        <textarea
                          onChange={handelDiscription}
                          id="desc"
                          name="desc"
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
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontWeight:"600", 
                            fontSize:"18px",
                          }}
                        >
                          Add Tags 
                        </label>
                        <input
                          id="tags"
                          name="tags"
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

                        <label
                          style={{
                            color: "#000000",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "14px",
                            fontWeight:"600", 
                            fontSize:"18px",
                          }}
                        >
                          Add YouTube Link :
                        </label>
                        <input
                          onChange={handelYtlink}
                          id="tags"
                          name="tags"
                          style={{
                            backgroundColor:"white",
                            border:"none",   
                            borderRadius: "0.2rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                          }}
                          placeholder="Add YouTube Link"
                        />
                      </div>

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
                          onClick={videoUpload}
                          style={{
                            backgroundColor: "yellow",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            marginTop: "2rem",
                            cursor: "pointer",
                            height: "fit-content",
                            width: "22rem",
                            padding: "10px",
                            boxShadow:
                    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
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

export default Utube;