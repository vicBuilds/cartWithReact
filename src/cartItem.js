import React from 'react';

class CartItem extends React.Component{
    constructor(){
         super();
        this.state={
            price:999,
            title: 'Phone',
            qty: 1,
            img: 'https://www.hilaptop.com/userdata/public/gfx/22150.jpg'
        }

         this.testing();
    }

    handleIncrease= ()=>{
        //Process: 01
    //    this.setState({
    //     qty:this.state.qty+1
    //    })
         
    // Process: 02
         this.setState((prevState)=>{
            return {
                qty: prevState.qty+1,
            }
         })
    }

    handleDecrease= ()=>{
        if(this.state.qty>0){
            this.setState({
            qty:this.state.qty-1
        })
       }
    }

    testing(){
    //     let promise= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve("Done");
    //         },5000)
    //     })

    //     promise.then(()=>{
    //         this.setState((prevstate)=>{
    //             return{
    //                 qty:prevstate.qty+50
    //             }
    //         })

    //     })

                this.setState(
                    prevState => {
                        return {
                            qty: prevState.qty + 2
                        };
                    },
                    () => {
                        console.log(this.state.qty);
                    }
                );

                this.setState(
                    prevState => {
                        return {
                            qty: prevState.qty + 3
                        };
                    },
                    () => {
                        console.log(this.state.qty);
                    }
                );
     }


    render(){
        const {price ,title, qty, img}=this.state;

        // this.setState({
        //     qty:this.state.qty+1
        // })

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={this.state.img}/>

                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'grey'}}>Price:{price}</div>
                    <div style={{color: 'grey'}}>Qty:{qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            className='action-icons' 
                            alt='increase' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                            onClick={this.handleIncrease}
                        />
                        <img 
                            className='action-icons' 
                            alt='decrease' src='https://cdn-icons-png.flaticon.com/512/2569/2569198.png' 
                            onClick={this.handleDecrease}
                        />
                        <img 
                            className='action-icons' 
                            alt='delete' 
                            src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// Decorating using objects
const styles= {
    image:{
        height:110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc',
    }
}

export default CartItem;


