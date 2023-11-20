// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
require("dotenv").config();
const router = express.Router()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

router.get("/",(req,res)=>{
    res.send("payment received")
}) 

router.post('/create-checkout-session', async(req,res)=>{
     
    const line_items = req.body.cartItems.map((item)=>{
        return {
            price_data: {
                currency: 'inr', // Before it usd than we cahnged it into indian inr
                product_data: {
                  name: item.name,
                  images:[item.image],
                  description:item.description,
                  metadata:{
                    id:item._id
                  },
                },
                unit_amount: item.price * 100,
              },
              quantity: item.qty,
        }
    })





    const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
            allowed_countries: ['US', 'CA','IN'],
          },
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'inr',
                },
                display_name: 'shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'hour',
                    value: 1,
                  },
                  maximum: {
                    unit: 'hour',
                    value: 2,
                  },
                },
              },
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 55 * 100,
                  currency: 'inr',
                },
                display_name: 'Local Delivery Services',
                delivery_estimate: {
                  minimum: {
                    unit: 'hour',
                    value: 1,
                  },
                  maximum: {
                    unit: 'hour',
                    value: 1,
                  },
                },
              },
            },
          ],
          phone_number_collection:{
            enabled:true,
          },
       line_items,
        mode:'payment',
        success_url:"http://localhost:5173/checkout_success",
        cancel_url:"http://localhost:5173/checkout_cancel"
    });
  
    res.send({url:session.url})

})

module.exports = router



// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
    //   {
    //     price_data: {
    //       currency: 'usd',
    //       product_data: {
    //         name: 'T-shirt',
    //       },
    //       unit_amount: 2000,
    //     },
    //     quantity: 1,
    //   },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:4242/success',
//     cancel_url: 'http://localhost:4242/cancel',
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));




















/*


This code snippet appears to be a server-side implementation using Node.js and Express framework with Stripe's API for creating a checkout session.

Let's break it down:

javascript

app.post('/create-checkout-session', async (req, res) => {

    This is defining a route '/create-checkout-session' using the HTTP POST method.
    When a POST request is made to this endpoint, the following code will execute.

javascript

const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: 'http://localhost:4242/success',
  cancel_url: 'http://localhost:4242/cancel',
});

    This block creates a new checkout session using Stripe's API.
    stripe.checkout.sessions.create is an asynchronous function used to create a new checkout session.
    The session configuration includes:
        line_items: An array of items being purchased. In this case, it's a single T-shirt with a unit price of $20.00 (in cents).
        mode: The mode of the checkout session, set to 'payment'.
        success_url: The URL where the customer will be redirected after a successful payment.
        cancel_url: The URL where the customer will be redirected if they choose to cancel the payment.

javascript

res.redirect(303, session.url);

    Once the session is created successfully, it redirects the client to the URL provided in the session.url.
    The status code 303 indicates a "See Other" HTTP response status, indicating that the client should redirect to the specified URL.

In this context, the session variable holds the information about the created checkout session, including its URL, which is used to redirect the user to Stripe's checkout page for payment processing.


*/