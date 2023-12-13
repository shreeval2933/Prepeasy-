import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { node, number } from "prop-types";
import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button"
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import staticContent from "../../config/ytContentDummy.js";
// import pdfContent from "../../config/pdfContent.js";
import pdfContent from "../../config/pdfContentDummy.js";
import { Tab, Tabs, Typography } from "@mui/material";
// import Search from '../search/index.jsx';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { SearchBar } from "../search/SearchBar.jsx";
import { SearchResultsList } from "../search/SearchResultsList.jsx";
import imgsvg from "../pages/chart-line-solid.svg";
import imgsvg1 from "../pages/user-solid.svg";
import imgsvg2 from "../pages/user-plus-solid.svg";
import zIndex from "@mui/material/styles/zIndex.js";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: node,
  index: number.isRequired,
  value: number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const base_url = "http://localhost:5000/ytcontent";

function YTpanel(search, setSearch) {
  const [allContent, setAllContent] = useState([]);
  const [likes, setLikes] = useState();
  useEffect(() => {
    const getYtContent = async () => {
      try {
        console.log("search:::", search);
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        console.log("from useEffect<-ListPage.js:-", data);
        setAllContent(data.SearchedYTContent);
      } catch (error) {
        console.log("error from useEffect<-ListPage.js :- ", error);
      }
    };
    getYtContent();
  }, [search]);

  const handleUpVote = async () => {};

  const thumbnailEmbed = (url) => {
    const regex = /youtu.be\/(\w+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return videoId;
  };

  return (
    <div
      style={{
        justifyItems: "center",
        alignItems: "center",
        margin: "auto",
        width: "fit-content",
        padding: "10px",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "15px",
          marginLeft: "-50px",
        }}
      >
        <Row xs={1} md={3} style={{ marginLeft: "25px" }}>
          {allContent.map((content) => (
            <li
              className="main-card"
              key={content._id}
              style={{ listStyleType: "none", marginBottom: "30px" }}
            >
              <Col md={12}>
                <Card
                  style={{
                    width: "377px",
                    height: "437px",
                    boxShadow:
                      "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                  }}
                >
                  <Link
                    to={`/detailedcontent/${content._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1em" }}>
                        {content.title.length > 31
                          ? content.title.slice(0, 31) + "..."
                          : content.title}
                      </Card.Title>
                      <div style={{ marginLeft: "auto", paddingRight: "15px" }}>
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "rgba(119, 119, 119, 0.7)",
                            textAlign: "left",
                          }}
                        >
                          post by:{" "}
                          {content.owner.length > 16
                            ? content.owner.slice(0, 15) + "..."
                            : content.owner.slice(0, 15)}
                        </p>
                      </div>
                      <iframe
                        width="335px"
                        height="189px"
                        src={`https://www.youtube.com/embed/${thumbnailEmbed(
                          content.link
                        )}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <Card.Text style={{ marginTop: "10px", height: "50px" }}>
                        {content.description.length > 63
                          ? content.description.slice(0, 63) + "..."
                          : content.description}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                  <Card.Footer>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton aria-label="up vote">
                          <ThumbUpSharpIcon />
                        </IconButton>
                        <IconButton aria-label="down vote button">
                          <ThumbDownAltSharpIcon />
                        </IconButton>
                      </div>
                      <div style={{}}>
                        <p
                          style={{
                            margin: "1px 10px 5px 3px",
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "rgba(119, 119, 119, 0.7)",
                            textAlign: "right",
                          }}
                        >
                          likes: {content.like}
                        </p>
                      </div>
                    </Box>
                  </Card.Footer>
                </Card>
              </Col>
            </li>
          ))}
        </Row>
      </ul>
    </div>
  );
}

function PDFpanel(search, setSearch) {
  const [pdfContent, setPdfContent] = useState([]);
  useEffect(() => {
    const fetchPdfContent = async () => {
      try {
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        console.log("from useEffect<-PDFpanel.js:-", data);
        setPdfContent(data.SearchedPDFContent);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPdfContent();
  }, [pdfContent]);

  return (
    <div style={{ justifyItems: "center" }}>
      <ul
        style={{
          marginLeft: "23%",
          width: "850px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {pdfContent &&
          pdfContent.map((content) => (
            <li className="main-card" key={content._id}>
              <Col>
                <Card style={{ width: "377px", height: "430px" }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1em" }}>
                      {content.title}
                    </Card.Title>
                    <div style={{ marginLeft: "auto", paddingRight: "15px" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "rgba(119, 119, 119, 0.7)",
                          textAlign: "left",
                        }}
                      >
                        post by:{" "}
                        {content.owner.length > 16
                          ? content.owner.slice(0, 15) + "..."
                          : content.owner.slice(0, 15)}
                      </p>
                      <h2>DOWNLOAD BUTTON HERE</h2>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton aria-label="up vote">
                          <ThumbUpSharpIcon />
                        </IconButton>
                        <IconButton aria-label="down vote button">
                          <ThumbDownAltSharpIcon />
                        </IconButton>
                      </div>
                      <div style={{}}>
                        <p
                          style={{
                            margin: "1px 10px 5px 3px",
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "rgba(119, 119, 119, 0.7)",
                            textAlign: "right",
                          }}
                        >
                          likes: {content.like}
                        </p>
                      </div>
                    </Box>
                  </Card.Footer>
                  <div>
                    <h2>DOWNLOAD BUTTON HERE</h2>
                  </div>

                  <div>
                    <p className="instructions">{content.description}</p>
                  </div>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "#0000002b",
                        borderTopLeftRadius: "10px 10px",
                        borderTopRightRadius: "10px 10px",
                        borderBottomLeftRadius: "10px 10px",
                        borderBottomRightRadius: "10px 10px",
                      }}
                    >
                      <IconButton aria-label="up vote">
                        <ThumbUpSharpIcon />
                      </IconButton>
                      <IconButton aria-label="down vote button">
                        <ThumbDownAltSharpIcon />
                      </IconButton>
                    </div>
                    <div style={{ marginLeft: "auto", paddingRight: "12px" }}>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          color: "rgba(119, 119, 119, 0.7)",
                          textAlign: "right",
                        }}
                      >
                        post by: {content.postBy}
                      </p>
                    </div>
                  </Box>
                  <p
                    style={{
                      margin: "1px 0 5px 3px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "rgba(119, 119, 119, 0.7)",
                    }}
                  >
                    liiikes:{content.like}
                    {/* D:{contnent.downVotes}*/}
                  </p>
                </Card>
              </Col>
            </li>
          ))}
      </ul>
    </div>
  );
}

function ListPage() {
  const [value, setValue] = React.useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [obj, setObj] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getYtContent = async () => {
      try {
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        // console.log("from useEffect<-ListPage.js:-",data);
        setObj(data);
      } catch (error) {
        console.log("error from useEffect<-ListPage.js :- ", error);
      }
    };
    getYtContent();
  }, [search]);

  const [results, setResults] = useState([]);

  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div
          className="floating-container"
          style={{ "margin-right": "0px", "z-index": "1" }}
        >
          <div
            className="floating-button"
            style={{ "margin-right": "15px", backgroundColor: "#f9a825" }}
          >
            +
          </div>
          <span className="float-element"></span>
          <div className="element-container">
            <Link to={"/utube"}>
              <span className="float-element" style={{ cursor: "pointer" }}>
                <i className="material-icons" style={{ color: "white" }}>
                  smart_display
                </i>
              </span>
            </Link>
            <Link to={"/dropzone"}>
              <span className="float-element" style={{ cursor: "pointer", backgroundColor:"green" }}>
                <i className="material-icons" style={{ color: "white" }}>
                  edit_square
                </i>
              </span>
            </Link>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand">
            Prep <span className="text-danger">Easy</span>
          </a>
          <ul className="navbar-nav ms-auto" style={{ marginRight: "-30px" }}>
            <li type="" className="nav-item">
              <a className="nav-link click-scroll" href="#section_5">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  About us
                </Link>
              </a>
            </li>
            {/* if authenticate ? dashboard */}
            <li type="" className="nav-item">
              <a className="nav-link click-scroll">
                <Link to={"/profile"}>
                  <img
                    src={imgsvg}
                    alt="profile"
                    style={{
                      height: "20px",
                      width: "20px",
                      cursor: "pointer",
                      marginTop: "-3px",
                    }}
                  />
                </Link>
              </a>
            </li>
            {/* if authenticate ? user-profile : login?signup */}
            <li type="" className="nav-item">
              <a className="nav-link click-scroll">
                <Link to={"/login"}>
                  <img
                    src={imgsvg2}
                    alt="profile"
                    style={{
                      height: "20px",
                      width: "20px",
                      cursor: "pointer",
                      marginTop: "-3px",
                    }}
                  />
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          // className="search-bar-container"
          style={{
            width: "800px",
            height: "70px",
            borderRadius: "15px",
            background: "white",
            margin: "30px",
            marginTop: "30px",
          }}
        >
          <SearchBar setResults={setResults} style={{ height: "70px" }} />
          {results && results.length > 0 && (
            <SearchResultsList results={results} setSearch={setSearch} />
          )}
        </div>

        <div className="body">
          <div className="table_container">
            <Box sx={{ width: "96%", zIndex: "1500" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Box sx={{ borderBottom: "1", borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    style={{ width: "400px" }}
                  >
                    <Tab
                      style={{ backgroundColor: "white" }}
                      label="YouTube videos"
                      {...a11yProps(0)}
                    />
                    <Tab
                      style={{ backgroundColor: "white" }}
                      label="PDF section"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
              </Box>

              <div>
                <TabPanel
                  className="YTclass"
                  value={value}
                  index={0}
                  style={{ width: "25px" }}
                >
                  {YTpanel(search, setSearch)}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {PDFpanel()}
                </TabPanel>
              </div>
            </Box>
          </div>
        </div>
      </div>
      <div style={{ justifyContent: "center" }}>
        <footer className="site-footer" style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row">
              <div style={{ marginLeft: "435px" }}>
                <div className="site-footer-wrap d-flex align-items-center">
                  <ul className="social-icon">
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://facebook.com/tooplate"
                        className="social-icon-link bi-facebook"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://pinterest.com/tooplate"
                        className="social-icon-link bi-pinterest"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://twitter.com/minthu"
                        className="social-icon-link bi-twitter"
                      />
                    </li>
                    <li style={{ paddingRight: "30px" }}>
                      <a
                        href="https://www.youtube.com/tooplate"
                        className="social-icon-link bi-youtube"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "20px",
                }}
              >
                <p className="copyright-text mb-0 me-4">
                  Copyright © 2023 PrepEasy
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ListPage;
