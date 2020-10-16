import React from 'react';
import { TweeterBird, MagnifyingGlass, People, Bubble } from './svg';
import styles from './styles.module.css';
import cx from 'classnames';

const SectionLeft = () => {
	const sectionLeftDetails = [
		{ icon: <MagnifyingGlass />, text: 'Follow your interests.' },
		{ icon: <People />, text: 'Hear what people are talking about.' },
		{ icon: <Bubble />, text: 'Join the conversation.' },
	];
	return (
		<div className={cx(styles.sectionLeft, styles.section)}>
			<TweeterBird />

			<div className={styles.sectionLeftDetails}>
				{sectionLeftDetails.map((detail, i) => (
					<div className={styles.sectionLeftDetail} key={`${detail}${i}`}>
						<div>{detail.icon}</div>
						<span className={styles.sectionLeftText}>{detail.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionLeft;
