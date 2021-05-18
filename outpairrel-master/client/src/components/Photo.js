import React, { useState, useEffect, Component } from 'react';
import { Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { setImg, addPost, clearTag } from '../actions/post-actions';
import { createPost } from '../api/posts';
import './Photo.css';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            loading: false,
            change: false,
            upload: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { img } = this.props
        console.log('img: ' + img)
        if (img) {
            this.setState({
                image: img,
                change: true
            })
        }
    }

    render() {
        const { listTags } = this.props
        let r;
        var name = ''

        const uploadImage = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'project')
            // setLoading(true)
            // setChange(true)
            this.setState({
                loading: true,
                change: true
            })
            const res = await fetch(
                'https://api.cloudinary.com/v1_1/ddexbpc6j/image/upload',
                {
                    method: 'POST',
                    body: data
                }
            )
            const file = await res.json()

            // setImage(file.secure_url)
            // setLoading(false)
            this.setState({
                loading: false,
                image: file.secure_url
            })
            this.props.dispatch(setImg(file.secure_url))
        }


        if (this.state.change) {
            if (this.state.loading) {
                name = ''
                // console.log('here')
                r = <span> Loading </span>
            }
            else {
                name = '-change'
                r = <img src={this.state.image} style={{ width: '300px' }} />
            }
        }
        else {
            name = '';
            r = <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
            />
        }

        let children = (
            <ListGroupItem style={{ display: 'none' }}>
                <div className="empty-text"></div>
            </ListGroupItem>
        );

        if (listTags.length) {
            children = listTags.map(tags => (
                <ListGroupItem style={{ width: '25rem' }}>
                    <img src={tags[0].photo} alt={tags[0].id} style={{ width: '5px', height: '5px', paddingRight: '1rem' }} />
                    <span>{tags[0].name}</span>
                </ListGroupItem>
            ))
        }
        return (
            <div className="photo">
                <span className={`rec${name} align-items-center align-self-center`}>
                    <span style={{ margin: 'auto' }}>
                        {r}
                    </span>
                </span>
                <span className='search' style={{ width: '25rem' }}>
                    <Link to="/tags" style={{ textDecoration: 'none' }}>
                        Add tags
                    </Link>
                    <div className='tags'>
                        <ListGroup>{children}</ListGroup>
                    </div>
                </span>
                <Link to="/photo" style={{ display: 'block', height: '2.5rem', right: '1rem', marginTop: 'auto' }} onClick={this.handleClick}>Upload</Link>
            </div>

        )
    }
    
    handleClick() {
        const { listTags } = this.props;
        // this.props.dispatch(addPost(listTags, this.state.image));
        // this.props.dispatch(clearTag());
        // this.setState({
        //     image: '',
        //     loading: true,
        //     change: false
        // });
        createPost(listTags, this.state.image).then(() => {
            this.props.dispatch(clearTag());
            this.setState({
                image: '',
                loading: true,
                change: false
            });
            
        }).catch(err => {
            console.log('Error creating posts', err);
        })
    }

}

export default connect(state => ({
    listTags: state.listTags.item,
    img: state.listTags.img,
    upload: state.listTags.upload
}))(Photo);