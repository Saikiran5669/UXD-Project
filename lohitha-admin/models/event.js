/** 
*  Order model
*  Describes the characteristics of each attribute in an order resource.
*
* @author Lohitha Bhethalam <S533975@nwmissouri.edu>
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    default: 123456789
  },
  state:{
    type: String,
    required: true
  },
  stadium:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true,
    default: Date.now()
  }
  
})
module.exports = mongoose.model('Event', EventSchema)
