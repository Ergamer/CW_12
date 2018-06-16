import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";
import Album from "../../components/Album/Album";
import {fetchGetThisUserAlbums, getOneAlbum} from "../../store/actions/albums";

class OneAlbum extends Component{
    componentDidMount () {
        // this.props.fetchGetThisUserAlbums(this.props.match.params.id);
        this.props.getOneAlbum(this.props.match.params.id)
    }

    render () {
        return (
            <Panel>
                <Panel.Body>
                                <div>
                                <h1>{this.props.album.title}</h1>
                                    <img src={'http://localhost:8000/uploads/' + this.props.album.image} alt=""/>
                                </div>



                </Panel.Body>
            </Panel>
        );
    }

}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        album: state.albums.album,
        users: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetThisUserAlbums: (id) => dispatch(fetchGetThisUserAlbums(id)),
        getOneAlbum: (id) => dispatch(getOneAlbum(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneAlbum);