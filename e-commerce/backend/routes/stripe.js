const express = require("express")
const router = express.Router()
const Stripe =  require("stripe")
const stripe = Stripe(process.env.Stripe_key)
require("dotenv").config()

router.post('/create-checkout-session', async (req, res) => {   

    line_items = req.body.item.map((item)=>{
        return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount:item.price * 100,
            },
            quantity: item.qty,
          }
   })


    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-successful`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.send({url: session.url});  
});

  module.exports = router;