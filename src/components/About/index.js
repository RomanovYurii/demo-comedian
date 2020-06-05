import React from "react";
import { ReactComponent as FirstTriangle } from "../../assets/images/about_triangle_first.svg";
import { ReactComponent as SecondTriangle } from "../../assets/images/about_triangle_second.svg";

const PageAbout = () => {
	return (
		<div className={"page"} id={"about"}>
			<img
				src={
					"https://source.unsplash.com/653x930/?man,smile,dark," +
					new Date().getMilliseconds()
				}
				alt={"man"}
				loading={"lazy"}
				className={"big_image"}
			/>

			<img
				src={
					"https://source.unsplash.com/250x332/?man,smile,dark," +
					new Date().getMilliseconds()
				}
				alt={"man"}
				loading={"lazy"}
				className={"small_image"}
			/>

			<div className={"page_content"}>
				<h2>About</h2>

				<div className="separator" />

				<p>
					An acclaimed comedian who loves the stage, Paul is currently
					back on the road for his biggest-ever stand-up tour, John
					Silver: Live. He previously sold out arenas across the
					globe.
				</p>

				<div className="button">
					<span>SEE JOHN LIVE</span>
				</div>
			</div>

			<div className="big_text">
				<span className={"first_name"}>John</span>
				<span className={"last_name"}>Silver</span>
			</div>

			<div className="decoration">
				<div className="circle first" />
				<div className="circle second" />
				<div className="circle third" />
				<div className="circle fourth" />
				<div className="circle fifth" />
				<div className="circle sixth" />

				<FirstTriangle className={"triangle first"} />
				<SecondTriangle className={"triangle second"} />
			</div>
		</div>
	);
};

export default PageAbout;
