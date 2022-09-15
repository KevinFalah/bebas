import React, { useEffect,useState } from "react";
import dummyPeaky from '../Images/peakyblindersCard.jfif'
import episode from '../Images/episode1-peaky.jfif'
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function VideoDetail() {

  const [isLogin, setIsLogin] =useState(false)

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if(user) setIsLogin(true)
    else {
      setIsLogin(false)
      navigate('/')
    }
  }, [user])

  return (
    <>
      <div className="d-flex justify-content-center">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/2nsT9uQPIrk?controls=0"
          title="Peaky Blinders"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

    <div className="d-flex justify-content-start sectionMain mt-5 flex-column flex-md-row">
      <div className="card mb-3 bg-black text-white" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={dummyPeaky} className="img-fluid rounded-start imgDummyDetail" alt="Series" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-2">Peaky Blinders</h5>
              <div className="mb-4 mt-2">
              <small className="text-muted">2013</small> 
              <small className='border border-secondary ms-2 px-1 ms-3 py-1 rounded text-muted tv-s shadow'>TV Series</small>
              </div>
              <p className="card-text pDetailMain">
              Peaky Blinders is an epic centred on a crime family of mixed Irish Catholic and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War in November 1918. A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardEpisode">
        {/* <div className="d-flex justify-content-end">
          <Button className="btn bg-danger text-white border-0 px-5 mt-2 mb-4" as={Link} to='/add-episode'>Add Episode</Button>
        </div> */}
        <img src={episode} alt="episode" className="imgEpisode" />
        <small className="text-light">Peaky Blinders : Episode 1</small>
      </div>
    </div>
    </>
  );
}

export default VideoDetail;
