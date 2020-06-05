import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const PageLanding = () => {
	return (
		<section className={"page"} id={"landing"}>
			<header>
				<a href="/" className={"link"} id={"home"}>
					JOHN SILVER
				</a>

				<nav>
					<a href="/" className={"link active"}>
						<span>About</span>
						<div className={"underline"} />
					</a>

					<a href="/" className={"link"}>
						<span>Live Dates</span>
						<div className={"underline"} />
					</a>

					<a href="/" className={"link"}>
						<span>Watch John</span>
						<div className={"underline"} />
					</a>

					<a href="/" className={"link"}>
						<span>Videos</span>
						<div className={"underline"} />
					</a>

					<a href="/" className={"link"}>
						<span>Follow John</span>
						<div className={"underline"} />
					</a>

					<a href="/" className={"link"}>
						<span>Contact</span>
						<div className={"underline"} />
					</a>
				</nav>
			</header>

			<div className="left">
				<div>
					<h1>John Silver</h1>
					<div className="separator" />
					<h2>
						Award-winning actor, comedian, presenter and writer.
					</h2>
				</div>

				<div className="form_container">
					<label>Sign up for latest news and live appearances</label>

					<div className="form">
						<div className="email_container">
							<input type="email" placeholder={"Email"} />
						</div>

						<div className="button">
							<span>
								SIGN UP{" "}
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="right" />

			<div className="circles">
				<div className="yellow" />
				<div className="green" />
				<div className="pink" />
			</div>
		</section>
	);
};

export default PageLanding;
