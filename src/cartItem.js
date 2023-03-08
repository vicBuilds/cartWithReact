import React from 'react';

class CartItem extends React.Component{

    // handleIncrease= ()=>{
    //     //Process: 01
    // //    this.setState({
    // //     qty:this.state.qty+1
    // //    })
         
    // // Process: 02
    //      this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty+1,
    //         }
    //      })
    // }

    // handleDecrease= ()=>{
    //     if(this.state.qty>0){
    //         this.setState({
    //         qty:this.state.qty-1
    //     })
    //    }
    // }

    // testing(){
    // //     let promise= new Promise((resolve,reject)=>{
    // //         setTimeout(()=>{
    // //             resolve("Done");
    // //         },5000)
    // //     })

    // //     promise.then(()=>{
    // //         this.setState((prevstate)=>{
    // //             return{
    // //                 qty:prevstate.qty+50
    // //             }
    // //         })

    // //     })

    //             this.setState(
    //                 prevState => {
    //                     return {
    //                         qty: prevState.qty + 2
    //                     };
    //                 },
    //                 () => {
    //                     console.log(this.state.qty);
    //                 }
    //             );

    //             this.setState(
    //                 prevState => {
    //                     return {
    //                         qty: prevState.qty + 3
    //                     };
    //                 },
    //                 () => {
    //                     console.log(this.state.qty);
    //                 }
    //             );
    //  }


    render(){
        const {price ,title, qty, img}=this.props.product;

        // {console.log(this.props);}
        // this.setState({
        //     qty:this.state.qty+1
        // })

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    
                    <img style={styles.image} src={img}/>

                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'grey'}}>Price:${price}</div>
                    <div style={{color: 'grey'}}>Qty:{qty}</div>
                    {}
                    <div className='cart-item-actions'>
                        
                        <img 
                            className='action-icons' 
                            alt='increase' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                            onClick={()=>{this.props.handleIncrease(this.props.product)}}
                        />
                        <img 
                            className='action-icons' 
                            alt='decrease' src='https://cdn-icons-png.flaticon.com/512/2569/2569198.png' 
                            onClick={()=>{this.props.handleDecrease(this.props.product)}}
                        />
                        <img 
                            className='action-icons' 
                            alt='delete' 
                            src='https://cdn-icons-png.flaticon.com/512/484/484662.png'
                            onClick={()=>{this.props.handleDelete(this.props.product.id)}}
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


