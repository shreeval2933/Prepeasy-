import "./SearchResult.css";

export const SearchResult = ({ result, setSearch }) => {
  const  thumbnailEmbed = (url) => {
    const regex = /youtu.be\/(\w+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return (
      videoId
    );
  }
  return (
    <div
     style={{ backgroundColor:"whitesmoke",  zIndex:"1300"}}
      className="search-result"
      onClick={(e) => {
        setSearch(result.title)
      }}
    >
      <div style={{display:"flex"}}>
        <div style={{marginRight:"8px"}}>
          <img style={{width:"100px"}} src={`https://i.ytimg.com/vi/${thumbnailEmbed(result.link)}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD00RlKLeyO9kPh4y4fD7gXtT-wFA`} alt="img" />
        </div>
        <div>
          <div> "{result.title}" </div>
          <div style={{color:"#8b8b8b", fontSize:"12px"}}>by: {result.owner}</div>
          <span style={{color:"#8b8b8b", fontSize:"12px"}}>{result.like} Likes:</span> 
          {/* <span style={{color:"#ff7c7c", fontSize:"12px"}}>{result.like} Likes:</span>  */}
        </div>
      </div>
    </div>
  );
};