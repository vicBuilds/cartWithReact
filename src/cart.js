import React from 'react';
import CartItem from './cartItem';

class Cart extends React.Component{ 
    render(){
        const {products}= this.props;
        const{handleIncrease, handleDecrease, handleDelete}=this.props;

        return(
            <div className='cart'>
                {
                    products.map((item)=>{
                       return (
                       <CartItem 
                       product={item} 
                       key={item.id} 
                       handleIncrease={handleIncrease}
                       handleDecrease={handleDecrease}
                       handleDelete={handleDelete}
                       />
                       );
                    })
                }


            </div>
        )
    }
}

// Decorating using objects
export default Cart;


