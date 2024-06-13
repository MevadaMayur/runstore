const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/images', express.static('uploads'));


app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello from express")
})

app.use('/urls', express.static('urls'));

const adminRoutes = require('./routes/admin_routes');
app.use('/admin', adminRoutes);
const sendotpRoutes = require('./routes/sendotp_routes');
app.use('/sendotp', sendotpRoutes);
const categoryRoutes = require('./routes/category_routes');
app.use('/category', categoryRoutes);
const sub_categoryRoutes = require('./routes/sub_category_routes');
app.use('/sub_category', sub_categoryRoutes);
const productRoutes = require('./routes/product_routes');
app.use('/product', productRoutes);
const cartRoutes = require('./routes/cart_routes');
app.use('/cart', cartRoutes);
const addressRoutes = require('./routes/address_routes');
app.use('/address', addressRoutes);

app.listen(PORT, () => console.log('Server is running on', PORT));
