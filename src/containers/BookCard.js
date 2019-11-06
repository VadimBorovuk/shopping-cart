import {connect} from "react-redux";
import * as cartActions from '../actions/cart'
import {bindActionCreators} from "redux";
import BookCard from '../components/BookCard.jsx'

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.reduce(
        (count,book) =>count + (book.id === id ? 1: 0), 0
    )
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard)