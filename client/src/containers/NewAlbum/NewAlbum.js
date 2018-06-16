import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {createAlbum} from "../../store/actions/albums";



class NewAlbum extends Component {
    // componentDidMount () {
    //   this.props.cocktailCreated();
    // }

    createCocktail = (cocktailData, token) => {
        this.props.cocktailCreated(cocktailData, token);
        console.log(this.props.users);
    };

    render() {
        console.log('asdfafsd');
        return (
            <Fragment>
                <PageHeader>New album</PageHeader>
                <AlbumForm
                    onSubmit={this.createCocktail}
                    user={this.props.users}
                    // categories={this.props.categories}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        cocktailCreated: (cocktailData, token) =>  dispatch(createCocktail(cocktailData, token))
    }
);

const mapStateToProps = state => ({
    users: state.users.user
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAlbum);