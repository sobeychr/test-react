import React from 'react';
import { Link } from 'react-router-dom';
import './../../scss/components/indexlink.scss';

const IndexLink = ({ name }) => (
    <Link to={'/' + name} className="index_link">
        <img
            src={'img/icon/' + name + '.png'}
            alt={name}
            className="index_link__img"
        />
    </Link>
);

export default IndexLink;