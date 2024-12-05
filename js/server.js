// Route to create the payment link
app.post('/create-payment-link', async (req, res) => {
    try {
      const { amount, description, successUrl, failedUrl } = req.body;
  
      const response = await axios.post(
        'https://api.paymongo.com/v1/payment_links',
        {
          data: {
            attributes: {
              amount: amount, // e.g., 10000 for PHP 100.00
              description: description,
              redirect: {
                success: successUrl,  // Your success URL
                failed: failedUrl     // Your failure URL
              },
              payment_method_allowed: ["gcash"],  // Allow GCash payment method
              currency: "PHP"  // Currency in PHP
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYMONGO_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      // The checkout URL returned by PayMongo
      const checkoutUrl = response.data.data.attributes.checkout_url;
  
      // Send the checkout URL back to the frontend
      res.json({ checkoutUrl });
  
    } catch (error) {
      console.error('Error creating payment link:', error);
      res.status(500).send('Error creating payment link');
    }
  });
  
  const cors = require('cors');
app.use(cors());  // Allow cross-origin requests
