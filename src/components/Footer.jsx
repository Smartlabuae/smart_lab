import React from "react";
import "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleMap from "./maps";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer_wrapper">
			<div className="background-image">
				<div className="footer">
					<div className="contacts ">
						<h3>Contact Us</h3>
						<form id="contact-form" method="post">
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Full Name"
								required
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your Email Address"
								required
							/>
							<textarea
								rows="1"
								placeholder="Your Message"
								id="message"
								name="message"
								required
							></textarea>
						</form>
						<button
							className="contact-btn"
							type="submit"
							id="submit"
							name="submit"
						>
							Send
						</button>
					</div>
					<div className="pages ">
						<h3>Quick Links</h3>
						<p className="mt">
							<Link to="/">Home</Link>
						</p>
						<p>
							<Link to="/aboutpage">About Us</Link>
						</p>
						<p>
							<Link to="/servicepage">Products</Link>
						</p>
						<p>
							<Link to="/projectpage">Projects</Link>
						</p>
						<p>
							<Link to="/contactpage">Contact Us</Link>
						</p>
					</div>

					<div className="info ">
						<h3>Contact Info</h3>
						<p className="mt">Musaffah MW-05,</p>
						<p>Abu Dhabi, U.A.E</p>
						<p>+971 (0) 2 6395055</p>
					</div>
					<div className="mapped">
						<h3>Our Location</h3>
						<GoogleMap />
					</div>
				</div>
				<div className="copyrights ">
					<p>SmartLab&copy;2023 All Right Reserved.</p>
					<Link to="https://alkatefitsolutions.com/">
						Designed by AL KATEF IT SOLUTIONS
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
