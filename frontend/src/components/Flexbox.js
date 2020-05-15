import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;

	padding-top: 56px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

class Flexbox extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default Flexbox;