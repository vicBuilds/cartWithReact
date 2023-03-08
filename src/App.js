import Cart from './cart';
import Navbar from './navbar';
import React from 'react';
import TotalItems from './totalPrice';

class App extends React.Component{

    constructor(){
      super();
      this.state={
              products:[

              {
                  price:999,
                  title: 'Phone',
                  qty: 1,
                  img: 'https://www.hilaptop.com/userdata/public/gfx/22150.jpg',
                  id:1
              },

              {
                  price:1999,
                  title: 'Laptop',
                  qty: 1,
                  img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K9C3PA-1_T1656565304.png',
                  id:2
              },

              {
                  price:1800,
                  title: 'LED TV',
                  qty: 1,
                  img: 'https://m.media-amazon.com/images/I/81I5oICiIzL._SX679_.jpg',
                  id:3
              },

              {
                  price:1100,
                  title: 'Amazon Echo',
                  qty: 1,
                  img: 'https://m.media-amazon.com/images/I/61JhG2HKMCL._SX679_.jpg',
                  id:4
              },
          ]        
          
  }

}

      handleIncrease=(product)=>{

        const {products}=this.state;

        let index=products.indexOf(product);

        products[index].qty+=1;

        this.setState({
            products:products 
        })

      }

      handleDecrease=(product)=>{
            const {products}=this.state;
            let index=products.indexOf(product);

            if(products[index].qty===0){
                return;
            }

            products[index].qty-=1;
            this.setState({
            products:products 
            })
      }

      handleDelete=(id)=>{
            const {products}= this.state;
            let newProducts=products.filter((item)=>{
                return item.id!==id;
            })
            this.setState({
                products:newProducts
            })

      }

      getCartCount=()=>{
        const {products}=this.state;
        let count=0;
        products.forEach((item)=>{
          count+=item.qty;
        })

        return count;
      }

      getTotalPrice=()=>{
        
        const {products}=this.state;
        
        let total=0;

        products.forEach((item)=>{
          total+=(item.qty*item.price);
        })

        return total;

      }



    render(){
      return (
        <div className="App">
          
          <Navbar 
                count={this.getCartCount()}
              />

          <div className='main-container'>

              <div className='left-block'>

                  <Cart 
                    products={this.state.products}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                    handleDelete={this.handleDelete}
                  />

              </div>

              <div className='right-block'>
                
                  <TotalItems total={this.getTotalPrice()}/>

            </div>

         </div>

        </div>
      );
    }
}

export default App;