import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



const DetailedContent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [feedback, setFeedback] = useState();
  const [like, setLike] = useState(false)
  const [dislike, setDisLike] = useState(false)
  // let like = false;
  // let dislike = false;

  const  thumbnailEmbed = (url) => {
    const regex = /youtu.be\/(\w+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return (
      videoId
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base_url = "http://localhost:5000/detailedcontent";
        const url = `${base_url}?id=${id}`;
        const response = await axios.get(url);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleUpVote = async () => {
    if(!like){
      setLike(true);
      setDisLike(false);
      try {
        const response = await axios.put(`http://localhost:5000/detailedcontent/like/${data._id}`, {
          action: 'upvote',
        });
        setData({ ...data, like: response.data.like });
      } catch (error) {
        console.error("Error upvoting:", error);
      }
    }
  };

  const handleDownVote = async () => {
    if(!dislike){
      setDisLike(true);
      setLike(false);
      try {
        const response = await axios.put(`http://localhost:5000/detailedcontent/like/${data._id}`, {
          action: 'downvote',
        });
        setData({ ...data, like: response.data.like });
      } catch (error) {
        console.error("Error downvoting:", error);
      }
    }
  };

  return (
    <div style={{width: "100%", display:"flex", justifyContent:"center"}}>
     <Card style={{ width: '65rem', marginTop:"1.5rem", marginBottom:"3rem" }}>
      <Card.Body>
        <Card.Title style={{fontSize:"2rem"}}>{data.title}</Card.Title>
        <Card.Text>
        <iframe width="1000px" height="500px"  src={`https://www.youtube.com/embed/${thumbnailEmbed(data.link)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        {data.description}
        </Card.Text>  
      </Card.Body>
      <Card.Footer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width:"100%",alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!like&&!dislike?
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton aria-label="up vote" onClick={handleUpVote}>
                <ThumbUpOffAltIcon /> 
              </IconButton>
              <IconButton aria-label="down vote button" onClick={handleDownVote}>
                <ThumbDownOffAltIcon />
              </IconButton>
            </div>:
              like&&!dislike? 
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton aria-label="up vote" onClick={handleUpVote}>
                    <ThumbUpSharpIcon /> 
                  </IconButton>
                  <IconButton aria-label="down vote button" onClick={handleDownVote}>
                    <ThumbDownOffAltIcon />
                  </IconButton>
                </div> : 
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton aria-label="up vote" onClick={handleUpVote}>
                    <ThumbUpOffAltIcon />
                  </IconButton>
                  <IconButton aria-label="down vote button" onClick={handleDownVote}>
                    <ThumbDownAltSharpIcon />
                  </IconButton>
                </div>
            }
              {/* {like&&!dislike? 
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton aria-label="up vote" onClick={handleUpVote}>
                    <ThumbUpSharpIcon /> 
                  </IconButton>
                  <IconButton aria-label="down vote button" onClick={handleDownVote}>
                    <ThumbDownOffAltIcon />
                  </IconButton>
                </div> : 
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton aria-label="up vote" onClick={handleUpVote}>
                    <ThumbUpOffAltIcon />
                  </IconButton>
                  <IconButton aria-label="down vote button" onClick={handleDownVote}>
                    <ThumbDownAltSharpIcon />
                  </IconButton>
                </div>} */}
              {/* <ThumbUpOffAltIcon /> */}
              {/* <ThumbUpSharpIcon /> */}
              {/* {dislike&&!like? <ThumbDownAltSharpIcon /> : <ThumbDownOffAltIcon />} */}
              {/* <ThumbDownOffAltIcon /> */}
              {/* <ThumbDownAltSharpIcon /> */}
          </div>
          <div style={{ }}>
            <p style={{ margin:"1px 10px 5px 3px", fontSize:"15px", fontWeight:"500", color:"rgba(119, 119, 119, 0.7)", textAlign:'right' }}>
              likes: {data.like}
            </p>
          </div>
        </Box>
      </Card.Footer>
    </Card>
    {/* </Box> */}
  </div>
  );
};

export default DetailedContent;