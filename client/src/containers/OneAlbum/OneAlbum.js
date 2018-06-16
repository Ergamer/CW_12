import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";
import Album from "../../components/Album/Album";

class OneAlbum extends Component{
    componentDidMount () {
    }

    render () {
        return (
            <Panel>
                <Panel.Body>
                    <h1>Albums</h1>
                    {this.props.albums.map(album => {
                        return <Album onClick={this.props.users ? () => this.props.fetchPostThisTrackInfo(album._id, this.props.users.token) : null}
                                  key={album._id}>{album.title}</Album>
                    })}
                </Panel.Body>
            </Panel>
        );
    }

}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        users: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        
    };

export default connect(mapStateToProps, mapDispatchToProps)(OneAlbum);