const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    emailAddress: {
        type: String,
        required: [true, "Email Address is required"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile Number is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    userCart: [
        {
            _id: false,
            cartNumber: {
                type: String,
                default: () => {
                    let cartNumber = [];
                    for (let i = 1; i <= 6; i++) {
                        let randomNumber = Math.floor(Math.random() * 10);
                        cartNumber.push(randomNumber);
                    }
                    return cartNumber.join("");
                }
            },
            productId: {
                type: String,
                required: [true, "Product Id is required"]
            },
            productName: {
                type: String,
                required: [true, "Product Id is required"]
            },
            quantity: {
                type: Number,
                required: [true, "Quantity of 1 is required"]
            },
            totalPrice: {
                type: Number,
                required: [true, "Total Price is required"]
            },
            addedOn: {
                type: Date,
                default: new Date()
            }
        }
    ],
    userOrders: [
        {
            _id: false,
            orderId: {
                type: String,
                default: () => {
                    let orderNumber = [];
                    for (let i = 1; i <= 17; i++) {
                        let randomNumber = Math.floor(Math.random() * 10);
                        orderNumber.push(randomNumber);
                    }
                    return "OD" + orderNumber.join("");
                }
            },
            productId: {
                type: String,
                required: [true, "Product Id is required"]
            },
            productName: {
                type: String,
                required: [true, "Product Id is required"]
            },
            quantity: {
                type: Number,
                required: [true, "Quantity is required"]
            },
            address: {
                type: String,
                required: [true, "Address is required"]
            },
            totalPrice: {
                type: Number,
                required: [true, "Total Price is required"]
            },
            orderedOn: {
                type: Date,
                default: new Date()
            }
        }
    ],
    addresses: [
        {
            _id: false,
            street: String,
            city: String,
            state: String,
            zip: Number,
            country: String,
        }
    ],
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;