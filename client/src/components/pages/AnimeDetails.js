import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import GetDetails from '../GetDetails';
import Anime from '../Anime';

export default function AnimeDetails({match}) {
    const {
        params: { title }
      } = match;
    const { data, setData } = GetDetails(title);
    return (
        <>
            <p onLoad={(e) => setData({ ...data})}> </p>
            <Container>
                {Object.keys(data.results).length > 0 ? <Anime anime={data.results} /> : null}
            </Container>
        </>
    );
}