import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";

import {fetchGetThisUserAlbums} from "../../store/actions/albums";
import AlbumList from '../../components/AlbumList/AlbumList';

class Albums extends Component {
    componentDidMount() {
        this.props.fetchGetThisUserAlbums(this.props.match.params.id);
    }

    render() {
        console.log(this.props, '*********');
        return (
            <Fragment>
                <PageHeader>
                    Albums
                    {this.props.user && this.props.user.role === 'admin' &&
                    <Link to="/albums/new">
                        <Button bsStyle="primary" className="pull-right">
                            Add album
                        </Button>
                    </Link>
                    }
                </PageHeader>

                {this.props.albums.map(album => (
                    <AlbumList
                        key={album._id}
                        id={album._id}
                        title={album.title}
                        user={album.user}
                        image={album.image}
                    />
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetThisUserAlbums: (id) => dispatch(fetchGetThisUserAlbums(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);