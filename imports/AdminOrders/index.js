import React, { Component } from "react";
import NavbarAdminOrders from "./../Navbar/NavbarAdminOrders";
import AdminOrderList from "./AdminOrderList";
import AdminOrderHeader from "./AdminOrderHeader";
import Footer from "../Footer/Footer";
import history from "../History";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Cart, buildCartItems } from "../api/Cart";
import { Events } from "../api/events";
import { Mongo } from "meteor/mongo";
// import PaymentBtn from "./PaymentBtn";
// import PaymentBtnBottom from "./PaymentBtnBottom";

export default class AdminOrders extends React.Component {
  constructor() {
    debugger;
    super();
    this.state = {
      obj: []
    };
  }

  componentWillMount() {
    var that = this;
    Tracker.autorun(() => {
      var x = Events.find({}).fetch();
      debugger;
      var events = buildCartItems();
      debugger;
      if (events.events[0]) {
        that.setState({ events: events.events, total: events.total }, () => {
          debugger;
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="ui grid centered" id="cartAreaForm">
          <div className="sixteen wide column">
            <div className="">
              <NavbarAdminOrders />
            </div>
          </div>

          {/*          <div className="sixteen wide column">
            <PaymentBtn />
          </div>*/}
        </div>
        <h1
          id="bookerInfoPadding"
          className="ui sixteen wide column dividing header centered"
        >
          Admin Area Order Summary
        </h1>

        <div className="ui grid centered">
          <div className="sixteen wide column">
            <AdminOrderList obj={this.state.obj} />
          </div>

          <div className="sixteen wide column">
            <h1
              id="checkoutText"
              className="ui sixteen wide column dividing header centered"
            >
              #
            </h1>
            {/*<PaymentBtnBottom />*/}
          </div>
          <div className="sixteen wide column">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
// Total: €{this.state.total}
// <AdminOrderList orders={this.state.orders} />

// import React, { Component } from "react";
// import NavbarCart from "./../Navbar/NavbarCart";
// import CartList from "./CartList";
// import CartHeader from "./CartHeader";
// import Footer from "../Footer/Footer";
// import history from "../History";
// import { Link } from "react-router-dom";
// import { Button, Icon } from "semantic-ui-react";
// import { Cart } from "../api/Cart";
// import { Events } from "../api/events";
// import { Mongo } from "meteor/mongo";
// import PaymentBtn from "./PaymentBtn";
// import PaymentBtnBottom from "./PaymentBtnBottom";

// const buildCartItems = () => {
//   const items = Cart.find().fetch();

//   console.log(items);
//   return items.map(item => {
//     var event = Events.findOne({ _id: item.event });
//     // event.quantity = item.quantity;
//     if (event) {
//       event.quantity = item.quantity;
//     }

//     return event;
//   });
// };

// export default class ShoppingCart extends React.Component {
//   constructor() {
//     debugger;
//     super();
//     this.state = {
//       events: [],
//       total: ""
//     };
//   }
//   componentWillMount() {
//     const cartCursor = Cart.find();
//     this.getTotal();

//     Tracker.autorun(() => {
//       const eventCursor = Events.find();

//       if (eventCursor.count() < 1) {
//         return;
//       }

//       const events = buildCartItems();
//       console.log("item removed, new list of events", events);
//       this.setState({ events });
//     });
//   }

//   removeEvent(eventId) {
//     Cart.remove({ event: eventId }, e => console.log("here", e, "id", id));
//   }

//   getTotal() {
//     var cart = Cart.find({}).fetch();
//     var total = 0;
//     cart.map(ele => {
//       var event = Events.findOne({ _id: ele.event });

//       var quantity = ele.quantity;
//       debugger;
//       if (event) {
//         var eventTotal = event.price * quantity;
//         total += eventTotal;
//       }
//     });
//     this.setState({ total: total });
//     debugger;
//   }

//   render() {
//     return (
//       <div>
//         <div className="ui grid centered" id="cartAreaForm">
//           <div className="sixteen wide column">
//             <div className="">
//               <NavbarCart />
//             </div>
//           </div>

//           <div className="sixteen wide column">
//             <PaymentBtn />
//           </div>
//         </div>
//         <h1
//           id="bookerInfoPadding"
//           className="ui sixteen wide column dividing header centered"
//         >
//           Tickets
//         </h1>

//         <div className="ui grid centered">
//           <div className="sixteen wide column">
//             <CartList
//               cart={this.state.events}
//               removeEvent={this.removeEvent}
//               history={this.props.history}
//             />
//           </div>

//           <div className="sixteen wide column">
//             <h1
//               id="checkoutText"
//               className="ui sixteen wide column dividing header centered"
//             >
//               Total: €{this.state.total}
//             </h1>
//             <PaymentBtnBottom />
//           </div>
//           <div className="sixteen wide column">
//             <Footer />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// var event = Events.findOne({ _id: cart.event });
// debugger;
// console.log(cart);
// console.log(event);

// var x = event.price;

// return event.map(item => {
//   debugger;
//   var price = Events.findOne({ price: item.price });
//   // event.quantity = item.quantity;
//   if (event) {
//     event.quantity = item.quantity;
//   }

//   return event;
// });

// var x = cart.event;
// genre = Events.findOne({_id:id}).genre
// this.getEventPrice();

// cartCursor.observeChanges({
//   removed: () => {
//     const events = buildCartItems();
//     console.log("item removed, new list of events", events);
//     // this.setState({events});
//   }
// });
/*
    const subscription = Meteor.subscribe('events', (err) => {
      if (!err) {
        const events = buildCartItems();
      }
    });
    */
// const purchased_events_data = [
//   {
//     name: "My Glasgow Event",
//     city: "Glasgow",
//     venue: "Some Glasgow venue",
//     price: 50,
//     description:
//       "Lorem ipsum dolor sit amet, odio sumo eirmod eos no, cu vix veniam deseruisse scribentur, ius molestie ponderum inciderint id. Vis equidem vocibus copiosae ad, has an aperiam quaestio argumentum. Vis equidem vocibus copiosae ad, has an aperiam quaestio argumentum.",
//     image:
//       "https://res.cloudinary.com/db8xttzan/image/upload/t_media_lib_thumb/v1512733381/car1_wb15fe.jpg"
//   }
// ];
