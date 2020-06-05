import React from 'react';
import { getShortMonthNameByIdx } from '../../constants/utils';

const PerformanceStatus = {
	TICKETS_AVAILABLE: {
		cssClass: 'tickets_available',
		text: 'GET TICKETS',
	},
	EXPIRING: {
		cssClass: 'expiring',
		text: 'LAST FEW TICKETS',
	},
	SOLD_OUT: {
		cssClass: 'sold_out',
		text: 'SOLD OUT',
	},
	ON_SALE_SOON: {
		cssClass: 'on_sale_soon',
		text: 'ON SALE SOON',
	},
};

class Performance {
	constructor(date, country, city, location, status) {
		this.date = date;
		this.country = country;
		this.city = city;
		this.location = location;
		this.status = status;
	}
}

class Tour {
	constructor(tourTitle, schedule) {
		this.tourTitle = tourTitle;
		this.schedule = schedule;
	}
}

const PageLiveDates = () => {
	const tours = [
		new Tour('USA TOUR DATES 2023', [
			new Performance(
				new Date(2023, 1, 18),
				'USA',
				'Austin',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
			new Performance(
				new Date(2023, 1, 19),
				'USA',
				'Nashville',
				'Indoor Arena',
				PerformanceStatus.EXPIRING
			),
			new Performance(
				new Date(2023, 1, 21),
				'USA',
				'Tampa',
				'Indoor Arena',
				PerformanceStatus.SOLD_OUT
			),
			new Performance(
				new Date(2023, 1, 23),
				'USA',
				'New York',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
			new Performance(
				new Date(2023, 1, 25),
				'USA',
				'San Diego',
				'Indoor Arena',
				PerformanceStatus.SOLD_OUT
			),
			new Performance(
				new Date(2023, 1, 27),
				'USA',
				'San Francisco',
				'Indoor Arena',
				PerformanceStatus.ON_SALE_SOON
			),
		]),
		new Tour('EUROPEAN TOUR DATES 2023', [
			new Performance(
				new Date(2023, 2, 12),
				'UK',
				'Liverpool',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
			new Performance(
				new Date(2023, 2, 14),
				'UK',
				'Liverpool',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
			new Performance(
				new Date(2023, 2, 16),
				'UK',
				'Birmingham',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
			new Performance(
				new Date(2023, 2, 18),
				'UK',
				'Oxford',
				'Indoor Arena',
				PerformanceStatus.TICKETS_AVAILABLE
			),
		]),
	];

	return (
		<div className={'page'} id={'live_dates'}>
			<section className={'header'}>
				<span className={'name'}>John Silver</span>
				<div className="separator" />
				<span className={'live'}>Live</span>
			</section>

			{tours.map((tour, idx) => (
				<section className={'tour'} key={idx}>
					<span className={'title'}>{tour.tourTitle}</span>

					{tour.schedule.map((performance, idx) => (
						<div className={'performance'} key={idx}>
							<div className="cropper_first" />
							<div className="cropper_second" />

							<div className="date_holder">
								<span className="date">
									{performance.date.getDate()}
								</span>

								<div className="my">
									<span className="month">
										{getShortMonthNameByIdx(
											performance.date.getMonth()
										)}
									</span>

									<span className="year">
										{performance.date.getFullYear()}
									</span>
								</div>
							</div>

							<div className="info">
								<span className="country">
									{performance.country}
								</span>

								<span className="city">{performance.city}</span>

								<span className="location">
									{performance.location}
								</span>
							</div>

							<div
								className={`tickets_button ${performance.status.cssClass}`}
							>
								<span className={'status_text'}>
									{performance.status.text}
								</span>
							</div>
						</div>
					))}
				</section>
			))}
		</div>
	);
};

export default PageLiveDates;
