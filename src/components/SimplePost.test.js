import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import SimplePost from './SimplePost';
import { ROUTES } from '../config';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SimplePost id="sp-1093" title="Lazy Lion" thumbnail="lazy-lion.jpg" /> )
});

test('renders a title', () => {
    expect(wrapper.find('.simple-post__title').text()).toEqual('Lazy Lion')
})

test('renders a thumbnail', () => {
    expect(wrapper.find('.simple-post__thumbnail').exists()).toEqual(true)
});

test('renders a hidden image for crawlers', () => {
    expect(wrapper.find('.simple-post__thumbnail > img').props().src).toEqual('lazy-lion.jpg')
});

test('renders a Link to the post\'s detailed view', () => {
    expect(wrapper.find(Link).props().to).toEqual(`/${ROUTES.POSTS}/sp-1093`);
})