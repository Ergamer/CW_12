import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {albumCreated} from "../../store/actions/albums";



class NewAlbum extends Component {

    albumCreated = (albumData, token) => {
        this.props.albumCreated(albumData, token);
        console.log(this.props.users);
    };

    render() {
        console.log('asdfafsd');
        return (
            <Fragment>
                <PageHeader>New album</PageHeader>
                <AlbumForm
                    user={this.props.users}
                    createAlbum={this.props.createAlbum}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        createAlbum: (albumData, token) =>  dispatch(albumCreated(albumData, token))
    }
);

const mapStateToProps = state => ({
    users: state.users.user
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAlbum);