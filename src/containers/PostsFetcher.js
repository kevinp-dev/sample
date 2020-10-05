import React from 'react';
import axios from 'axios';
import { massageResponse } from '../utils/formatters'
import { REDDIT_URL } from '../config'
import PropTypes from 'prop-types';

// fetches JSON data for a given subreddit's posts
class PostsFetcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isReady: false,
            hasError: false,
            errorMessage: null
        }
    }
    componentDidMount() {
        const url = `${REDDIT_URL}/r/${this.props.subreddit}/.json?jsonp=`
        axios.get(url)
            .then(resp => { 
                const data = massageResponse(resp);
                if (!data.length) {
                    throw Error('Could not load any data.')
                }
                this.setState({ data, isReady: true })
             })
            .catch(err => { 
                this.setState({ 
                    hasError: true,
                    errorMessage: err
                })
            })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}

PostsFetcher.propTypes = {
    subreddit: PropTypes.string.isRequired
}

export default PostsFetcher