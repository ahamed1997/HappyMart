import React from 'react'
import './Cart.css'
import './NavbarComponent.css'

function about() {
    return (
<div className="cards">
    <div >
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4"> 
                    <img top width="100%" alt="" src={ require('../images/logo1.jpg')} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                            <h4 className="text-center">
                             <i>HappyBuy</i></h4>
                            <p>
                            Happybuy is a global commerce and payments leader, providing a robust platform where merchants of all sizes can compete and win. 
                            Happybuy connects millions of buyers and sellers and enabled $205 billion.
                            We do so through happybuy, one of the world's largest online marketplaces, which allows users to buy and sell in nearly every country on earth; through PayPal, which enables individuals and businesses to securely, easily and quickly send and receive digital payments; and through happybuy Enterprise, which enables omnichannel commerce, multichannel retailing and digital marketing for global enterprises in the U.S. and internationally. 
                            We also reach millions through specialized marketplaces such as StubHub, the world's largest ticket marketplace, and happybuy classifieds sites, which together have a presence in more than 1,000 cities around the world.
                            </p>
                            <br/>
                            <br/>
                            <h6>HappyBuy India</h6>
                            <p>HappyBuy India (www.happybuy.in ),India’s leading eCommerce marketplace, is India’s largest online shopping website where thousands of Indian merchants list a wide range of products across Electronics, Lifestyle, Media and Collectibles categories. happybuy India has 2.1 million active users from 4,306 cities in India. eBay India is a 100% subsidiary of happybuy pvt ltd.</p>
                        </div>                                                        
                    </div>                  
                </div>               
            </div>
        </div>
    </div>


      
    )
}

export default about
 