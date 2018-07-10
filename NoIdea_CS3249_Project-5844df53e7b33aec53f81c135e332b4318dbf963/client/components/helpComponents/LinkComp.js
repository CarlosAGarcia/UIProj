import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @class LinkComp
 * @classdesc Base component for Link component
 * @param {string} url URL to link to
 * @param {object} row Clicked object
 */
const LinkComp = ({ url, row }) => (
 <Link to={url}> {row.name} </Link>
);

export default LinkComp;