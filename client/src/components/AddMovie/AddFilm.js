import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styles } from './Styles';
import  {useState} from 'react'

const AddFilm = () => {
	const [ rates, setRates ] = useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const addRate = () => {
		setRates([ ...rates, { titleEpisode: '', attachThumbnail: '', linkFilm: '' } ]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...rates ];
		updateForm[event.target.dataset.id][event.target.className] = event.target.value;
		setRates(updateForm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} onChange={handleChange}>
			<div style={styles.container} className="mt-4 mb-4">
				<h4>Add Film</h4>
				<div className="form-group mb-2">
					<div 
						style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',	
						gridGap: '1rem'
						}}>
									
						<input
							type="text"
							name= "titlefilm"
							data-id=""
							id="titlefilm"
							className="titleFilm"
							placeholder="Title"
							style={styles.customInputTitle}
						/>
						<input
							type="file"
							name="attachfile"
							data-id=""
							id="attachfile"
							className="attachThumbnail"
							style={styles.customInputFile}
						/>
						<button
							className="btn-grey"
							onClick={() => {
								document
								.getElementsByName("attachfile")[0]
								.click();
							}}
							style={{
								width: '40%',
								height: '50px',
								fontSize: '15px',
								textAlign: 'left',
								float: 'right',
								justifySelf: 'right'
							}}
							>
							Attach Thumbnail{' '}
							<div
								style={{
									float: 'right',
									display: 'inline',
									fontSize: '20px'
								}}
							>
								<FontAwesomeIcon icon={faPaperclip} />
							</div>
						</button>
					</div>	
				</div>
				<div className="form-group mb-4">
					<div>
						<div className="form-group mb-2">
								<input
									type="text"
									name="linkfilm"
									data-id=""
									id="linkfilm"
									className="linkFilm"
									placeholder="Year"
									style={styles.customInput}
								/>
						</div>
						<div className="form-group mb-2">
							<select name="list" id="list" style={styles.customInput}>
								<option disabled selected>Category</option>
								<option value="tvSeries">TV Series</option>
								<option value="movie">Movie</option>
							</select>
						</div>
						<div className="form-group mb-0">
							<textarea style={styles.textarea} placeholder="Description" id="desc" name="desc" rows="4" cols="50">
							</textarea>
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
									display: 'grid',
									gridTemplateColumns: 'repeat(2, 1fr)',
									gridGap: '1rem'
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
										document
										.getElementsByName(attachThumbnailId)[0]
										.click();
									}}
									style={{
										width: '40%',
										height: '50px',
										fontSize: '15px',
										textAlign: 'left',
										float: 'right',
										justifySelf: 'right'
									}}
								>
									Attach Thumbnail{' '}
									<div
										style={{
											float: 'right',
											display: 'inline',
											fontSize: '20px'
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
									width: '100%',
									height: '50px',
									color: '#e50914',
									backgroundColor: 'rgba(210, 210, 210, 0.25)',
									border: "2px solid #d2d2d2"
								}}
								onClick={addRate}
							>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</div>
			<div className='d-flex form-group mb-4 justify-content-between' style={{marginLeft: "1070px"}}>
				<Button className="btn bg-danger text-white border-0 btn-regis px-5" as={Link} to='/list-film'>Save</Button>
			</div>
		</form>
	</div>
	);
};

export default AddFilm;
