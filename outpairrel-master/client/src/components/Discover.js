import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';
import { useSelector } from 'react-redux';
import { listPosts } from '../api/posts';
import { updatePosts } from '../actions/post-actions';

export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            posts: []
        }
    }

    componentDidMount() {
        listPosts().then(posts => {
            this.setState({
                posts: posts
            })
            this.props.store.dispatch(updatePosts(posts));
        })
    }

    render() {
        // let filters = [this.state.term];
        let post = this.state.posts;
        if (this.state.posts.length > 0 && this.state.term) {
            if(this.state.term.split(' ').length > 1){
                post = this.state.posts.filter(p => {
                    if(p.tags.length > 0){
                        return (p.tags.filter( q => {
                            return q[0].name.toLowerCase() === this.state.term.toLowerCase()
                        })).length > 0
                    }
                    else return false
                });
            }
            else {
                post = this.state.posts.filter(p => {
                    if(p.tags.length > 0){
                        return (p.tags.filter( q => {
                            return q[0].tags.includes(this.state.term.toLowerCase())
                        })).length > 0
                    }
                    else return false
                });
            }

            // p.filter(q => {
            //     return(q.tags.filter( z => {
            // return z[0].tags.includes("hoodie")}
            // )).length > 0
            // })
        }
        return (
            <div className="container mx-auto">
                <ImageSearch searchText={(text) => this.setState({term: text})} />

                {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

                {/* {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading ... </h1> : } */}
                <div className="grid grid-cols-3 gap-4">
                    {post.map(post => (
                        <ImageCard store={this.props.store} id={post.id} photo={post.photo} like={post.likes} /> //id={post.id} photo={post.photo} like={post.like}
                    ))}
                </div>

                <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
            </div>
        )
    }
}
