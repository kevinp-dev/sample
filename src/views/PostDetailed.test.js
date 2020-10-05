import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostDetailed from './PostDetailed';
import { ROUTES } from '../config';

const post = {
    name: 'Skeletor',
    ups: 9210,
    url: 'https://i.redd.it/5da82kfmm5r51.jpg',
    thumbnail: 'https://b.thumbs.redditmedia.com/plantain9.jpg',
    title: 'Everything is Dandy',
    not_allowed_attr: 'here'
};

let wrapper;

beforeEach(() => {
    wrapper = shallow(<PostDetailed post={post} /> );
});

test('renders a title', () => {
    expect(wrapper.find('h2').text()).toEqual(post.title);
});

test('renders an image', () => {
    expect(wrapper.find('img').props().src).toEqual(post.thumbnail);
});

test('renders a link back to /posts', () => {
    expect(wrapper.find(Link).props().to).toEqual(`/${ROUTES.POSTS}`);
});

test('renders a whitelisted attribute', () => {
    expect(wrapper.find('li[data-testid="ups"]').exists()).toEqual(true);
});

test('does not render a non-whitelisted attribute', () => {
    expect(wrapper.find('li[data-testid="not_allowed_attr"]').exists()).toEqual(false);
});