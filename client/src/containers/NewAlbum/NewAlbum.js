import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {albumCreated} from "../../store/actions/albums";



class NewAlbum extends Component {
    // componentDidMount () {
    //   this.props.albumCreated();
    // }

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
                    onSubmit={this.createAlbum}
                    user={this.props.users}
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