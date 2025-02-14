import PropTypes from 'prop-types';

const HelloUser = (props) => {
    return (
        <>
            <h1>Hello {props.userName} !</h1>
        </>
    )
}

HelloUser.propTypes = {
    userName: PropTypes.string.isRequired
};

export default HelloUser;