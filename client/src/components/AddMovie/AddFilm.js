import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styles } from "./Styles";
import { useState } from "react";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import {RiAttachmentFill} from 'react-icons/ri'


const AddFilm = () => {
  const [rates, setRates] = useState([
    { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
  ]);

  const addRate = () => {
    setRates([
      ...rates,
      { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
    ]);
  };

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    thumbnailfilm: "",
    year: "",
    description: "",
    category_id: 0,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: [event.target.value],
    });
    console.log(form);
  };

  useEffect(() => {
	console.log(form)
  }, [form.thumbnailfilm])
  

  const { title, thumbnailfilm, year, description, category_id } = form;

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });



  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit.mutate(e);
        }}
      >
        <div style={styles.container} className="mt-4 mb-4">
          <h4>Add Film</h4>
          <div className="form-group mb-2">
            <div
              style={{
                display: "flex",
				gap: "10px"
              }}
            >
              <input
                type="text"
                name="title"
                data-id=""
                id="titlefilm"
                className="titleFilm"
                placeholder="Title"
                style={styles.customInputTitle}
                onChange={handleChange}
              />
              <Form.Group controlId="formBasicAttache">
                <Form.Label htmlFor="attachThumbnail" className="labelThumbnail rounded">
                  Attach{" "}
                  <span>
                    <RiAttachmentFill style={{ fontSize: "30px" }} />
                  </span>
                </Form.Label>
                <input id="attachThumbnail" type="file" onChange={(e) => {
					setForm({ ...form, thumbnailfilm: e.target.files[0] })
					
				}} name="thumbnailfilm"/>
				</Form.Group>
            </div>
          </div>
          <div className="form-group mb-4">
            <div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  name="year"
                  data-id=""
                  id="year"
                  className="linkFilm"
                  placeholder="Year"
                  style={styles.customInput}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <select name="list" id="list" style={styles.customInput}>
                  <option disabled selected>
                    Category
                  </option>
                  <option value="tvSeries">TV Series</option>
                  <option value="movie">Movie</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <textarea
                  style={styles.textarea}
                  placeholder="Description"
                  id="desc"
                  name="desc"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {rates.map((row, index) => {
          const titleEpisodeId = `title-${index}`,
            attachThumbnailId = `attach-${index}`,
            linkFilmId = `link-${index}`;

          return (
            <div key={index} style={styles.container} className="mt-3">
              <div className="form-group mb-2">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridGap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    name={titleEpisodeId}
                    data-id={index}
                    id={titleEpisodeId}
                    className="titleEpisode"
                    placeholder="Title Episode"
                    style={styles.customInputTitle}
                  />
                  <input
                    type="file"
                    name={attachThumbnailId}
                    data-id={index}
                    id={attachThumbnailId}
                    className="attachThumbnail"
                    style={styles.customInputFile}
                  />
                  <button
                    className="btn-grey"
                    onClick={() => {
                      document.getElementsByName(attachThumbnailId)[0].click();
                    }}
                    style={{
                      width: "40%",
                      height: "50px",
                      fontSize: "15px",
                      textAlign: "left",
                      float: "right",
                      justifySelf: "right",
                    }}
                  >
                    Attach Thumbnail{" "}
                    <div
                      style={{
                        float: "right",
                        display: "inline",
                        fontSize: "20px",
                      }}
                    >
                      <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  name={linkFilmId}
                  data-id={index}
                  id={linkFilmId}
                  className="linkFilm"
                  placeholder="Link Film"
                  style={styles.customInput}
                />
              </div>
            </div>
          );
        })}
        <div className="form-group mb-2" style={styles.container}>
          <button
            className="btn-grey"
            style={{
              width: "100%",
              height: "50px",
              color: "#e50914",
              backgroundColor: "rgba(210, 210, 210, 0.25)",
              border: "2px solid #d2d2d2",
            }}
            onClick={addRate}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div
          className="d-flex form-group mb-4 justify-content-between"
          style={{ marginLeft: "1070px" }}
        >
          <Button
            className="btn bg-danger text-white border-0 btn-regis px-5"
            as={Link}
            to="/list-film"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFilm;
