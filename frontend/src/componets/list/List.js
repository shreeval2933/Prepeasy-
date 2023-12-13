import st from "./List.module.css";
import ii3 from "./up.png";
import ii4 from "./down.png";
import ii5 from "./th.jpg";
import "../popup.css";

function List() {
  return (
    <>
      <div className={st.pq}>
        <h3 className={st.q1}> Topic : </h3>
        <div className={st.wrapper}>
          <div className="tabs">
            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-1"
                defaultChecked="tab1"
                className="tab-switch"
              />
              <label htmlFor="tab-1" className="tab-label">
                Videos
              </label>
              <div className="tab-content">
                <textfield>
                  <div className={st.main}>
                    Tags :
                    <div>
                      <iframe
                        className={st.yt}
                        src="https://www.youtube.com/embed/bpGuEIW3dJI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <div className={st.icon}>
                        <a href="#">
                          <img
                            className={st.ic}
                            height="25"
                            width="25"
                            src={ii3}
                            alt="img"
                          ></img>
                        </a>
                        <div className={st.nm}>500</div>

                        <a href="#">
                          <img
                            className={st.ic}
                            height="25"
                            width="25"
                            src={ii4}
                            alt="img"
                          ></img>
                        </a>
                        <div className={st.nm}>2</div>

                        <div className={st.sg}>Suggested By Harsh Mavani</div>
                      </div>
                    </div>
                  </div>
                </textfield>

                <textfield>
                  <div className="main4">
                    Tags :
                    <div>
                      <iframe
                        className="yt"
                        src="https://www.youtube.com/embed/bpGuEIW3dJI"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>

                      <div className="icon">
                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii3}
                            alt="img"
                          ></img>
                        </a>
                        <div className="nm">500</div>

                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii4}
                            alt="img"
                          ></img>
                        </a>
                        <div className="nm">2</div>

                        <div className="sg">By Harsh Mavani</div>
                      </div>
                    </div>
                  </div>
                </textfield>
              </div>
            </div>

            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-2"
                className="tab-switch"
              />
              <label htmlFor="tab-2" className="tab-label">
                PDF Notes
              </label>
              <div className="tab-content">
                <textfield>
                  <div className="main4">
                    Tags :
                    <div>
                      <div className="icon">
                        <div className="vw">
                          <a href="#">
                            <img
                              className="ic"
                              height="30"
                              width="30"
                              src={ii5}
                              alt="img"
                            ></img>
                          </a>
                          <h3 className="ic1">View</h3>
                        </div>

                        <div>
                          <button className="btn" name="button" type="submit">
                            Download
                          </button>
                        </div>

                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii3}
                            alt="img"
                          ></img>
                        </a>
                        <h4 className="nm">500</h4>

                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii4}
                            alt="img"
                          ></img>
                        </a>
                        <h4 className="nm">2</h4>

                        <h3 className="sg"> Suggested By : A BC</h3>
                      </div>
                    </div>
                  </div>
                </textfield>
              </div>
            </div>

            <div className="tab">
              <input
                type="radio"
                name="css-tabs"
                id="tab-3"
                className="tab-switch"
              />
              <label htmlFor="tab-3" className="tab-label">
                Handwritten Notes
              </label>
              <div className="tab-content">
                <textfield>
                  <div className="main4">
                    Tags :
                    <div>
                      <div className="icon">
                        <div className="vw">
                          <a href="#">
                            <img
                              className="ic"
                              height="30"
                              width="30"
                              src={ii5}
                              alt="img"
                            ></img>
                          </a>
                          <h3 className="ic1">View</h3>
                        </div>

                        <div>
                          <button className="btn" name="button" type="submit">
                            Download
                          </button>
                        </div>

                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii3}
                            alt="img"
                          ></img>
                        </a>
                        <h4 className="nm">500</h4>

                        <a href="#">
                          <img
                            className="ic"
                            height="25"
                            width="25"
                            src={ii4}
                            alt="img"
                          ></img>
                        </a>
                        <h4 className="nm">2</h4>

                        <h3 className="sg"> Suggested By : A BC</h3>
                      </div>
                    </div>
                  </div>
                </textfield>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
