import React from "react";
// import { Radio } from 'semantic-ui-react'
import { Button } from "semantic-ui-react";
import Checkout from "./Checkout";
import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
import { Cart } from "../api/Cart";

export default class CartItem extends React.Component {
  // var total = this.props.price * this.props.quantity;
  constructor() {
    super();
    this.state = {
      data: ""
      // display: "none"
    };
  }

  render() {
    return (
      <div>
        <div className="ui internally celled grid" id="bookerContainerInfo">
          <div className="row" id="eventPad">
            <div className="two wide centered column">
              <img
                id="imgCheckout"
                src={
                  "http://res.cloudinary.com/db8xttzan/image/upload/v1513019646/profile-icon_q3pcew.png"
                }
              />
            </div>

            <div className="fourteen wide column">
              <div className="ui padded grid">
                {/*<h1 id="checkoutText" className="ui sixteen wide column dividing header">Booker Info</h1>*/}
                <div className="row">
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Full Name
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Address
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    E-mail
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui two wide column dividing header"
                  >
                    Telephone
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                  <h2
                    id="formText"
                    className="ui one wide column dividing header"
                  >
                    Total
                  </h2>
                </div>

                <div className="row">
                  <h2 id="formText" className="ui two wide column">
                    {this.props.firstName} {this.props.lastName}
                  </h2>
                  <h2 id="formText" className="ui four wide column">
                    {this.props.number} {this.props.address} {this.props.city}
                  </h2>

                  <h2 id="formText" className="ui three wide column">
                    {this.props.email}
                  </h2>

                  <h2 id="formText" className="ui three wide column">
                    {this.props.telephone}
                  </h2>
                  <h2 id="formText" className="ui two wide column">
                    € 200
                  </h2>
                  <h2 id="formText" className="ui one wide column" />
                </div>

                <div className="row">
                  <div id="checkoutEditBtn">
                    <Checkout email={this.props.email} amount={20000} />
                    {/*<Button className="ui orange button" type="submit">
                      Edit Ticket Info
                    </Button>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// id={test._id}
//           firstName={test.buyer.firstName}
//           lastName={test.buyer.lastName}
//           email={test.buyer.email}
//           telephone={test.buyer.telephone}
//           number={test.buyer.number}
//           address={test.buyer.address}
//           city={test.buyer.city}

// getId(id) {
//   debugger;
//   this.props.removeEvent(id);
// }

// setEvent() {
//   this.props.updateEvent(this.props.id, this.state.data);
// }

// increaseQty() {
//   Cart.update({ event: this.props.id }, { $inc: { quantity: 1 } });
// }

// decreaseQty() {
//   if (this.props.quantity > 1)
//     Cart.update({ event: this.props.id }, { $inc: { quantity: -1 } });
// }

// redirect() {
//   this.props.history.push({
//     pathname: "/admin/edit/event",
//     query: { id: this.props.id }
//   });
// }

// <Button
//                   onClick={this.redirect.bind(this)}
//                   id="btnText"
//                   className="ui large green button"
//                   floated="right"
//                 >
//                   <Icon name="edit" />
//                 </Button>
//     key={i}
// id={ele._id}
// quantity={ele.quantity}
// // image={ele.image}
// title={ele.title}
// artist={ele.artist}
// venueName={ele.venueName}
// description={ele.description}
// price={ele.price}

// import React from "react";
// import TicketDropdown from "./TicketDropdown";
// import { Item, Label } from "semantic-ui-react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
// import { Cart } from "../api/Cart";

// export default class CartItem extends React.Component {
//   render() {
//     debugger;
//     return (
//       <div className="container eventBox">
//         <Item.Group divided>
//           <Item>
//             <Item.Image size="small" src={this.props.image} />
//             <Item.Content>
//               <Item.Header as="a">{this.props.title}</Item.Header>
//               <Item.Meta>
//                 <span className="cinema">{this.props.artist}</span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">{this.props.venueName}</span>
//               </Item.Meta>
//               <Item.Description>{this.props.description}</Item.Description>
//               <Item.Description>
//                 Ticket Price: €{this.props.price}
//               </Item.Description>
//               <Item.Description>
//                 Ticket Price: €{this.props.quantity}
//                 {/*No. of tickets: {this.props.quantity}*/}
//               </Item.Description>
//               <Item.Extra>
//                 <div>{/*<TicketDropdown />*/}</div>
//                 {/*                <Label>Limited Availability</Label>*/}
//               </Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//         <div className="ui inverted divider" />
//       </div>
//     );
//   }
// }

// import React from "react";
// import { Button, Icon, Item, Label } from "semantic-ui-react";
// import { Router, Route, IndexRoute, browserHistory } from "react-router-dom";
// import { Events } from "../api/events";

// export default class AdminEventItem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: ""
//       // display: "none"
//     };
//   }

//   getId(id) {
//     debugger;
//     this.props.removeEvent(id);
//   }

//   setEvent() {
//     this.props.updateEvent(this.props.id, this.state.data);
//   }
//   redirect() {
//     this.props.history.push({
//       pathname: "/admin/edit/event",
//       query: { id: this.props.id }
//     });
//   }

//   render() {
//     return (
//       <div className="container eventBox">
//         <Item.Group divided>
//           <Item>
//             <Item.Image size="medium" src={this.props.image} />
//             <Item.Content>
//               <Item.Header as="a">Event: {this.props.title}</Item.Header>
//               {/*              <Item.Meta>
//                 <span className="cinema">Artist: {this.props.artist}</span>
//               </Item.Meta>*/}
//               <Item.Meta>
//                 <span className="cinema">
//                   Event info: {this.props.startDate} @ {this.props.startTime}{" "}
//                   until {this.props.finishDate} @ {this.props.finishTime}
//                 </span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">
//                   Description : {this.props.description}
//                 </span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">Venue: {this.props.venueName}</span>
//               </Item.Meta>
//               <Item.Description>
//                 Address: {this.props.number} {this.props.address}, City:
//                 {this.props.city}
//               </Item.Description>
//               <Item.Meta>
//                 <span className="cinema">Artist: {this.props.artist}</span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">Genre: </span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">Type: </span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">
//                   Main Contact Details. Name:{this.props.firstName}{" "}
//                   {this.props.lastName}, Telephone Number:{" "}
//                   {this.props.telephone}, E-mail: {this.props.email}
//                 </span>
//               </Item.Meta>
//               <Item.Extra>
//                 <Button
//                   onClick={this.redirect.bind(this)}
//                   id="btnText"
//                   className="ui large green button"
//                   floated="right"
//                 >
//                   <Icon name="edit" />
//                 </Button>

//                 <Button
//                   className="ui large red button"
//                   floated="right"
//                   onClick={this.getId.bind(this, this.props.id)}
//                 >
//                   Delete Event &nbsp;
//                   <i className="trash icon" />
//                 </Button>
//                 <Label className="ui orange large">
//                   total tickets: ,
//                   <p className="ui grey header centered massive">
//                     {this.props.tickets} @ €{this.props.price}
//                   </p>
//                 </Label>
//                 <Label className="ui yellow large">
//                   tickets remaining:{" "}
//                   <p className="ui red header centered massive">
//                     {this.props.tickets}
//                   </p>
//                 </Label>
//               </Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//         <div className="ui inverted divider" />
//       </div>
//     );
//   }
// }

// import React from "react";
// import TicketDropdown from "./TicketDropdown";
// import { Item, Label } from "semantic-ui-react";

// export default class CartItem extends React.Component {
//   render() {
//     debugger;
//     return (
//       <div className="container eventBox">
//         <Item.Group divided>
//           <Item>
//             <Item.Image height={100} size="medium" src={this.props.image} />
//             <Item.Content>
//               <Item.Header as="a">{this.props.name}</Item.Header>
//               <Item.Meta>
//                 <span className="cinema">{this.props.city}</span>
//               </Item.Meta>
//               <Item.Meta>
//                 <span className="cinema">{this.props.venue}</span>
//               </Item.Meta>
//               <Item.Description>{this.props.description}</Item.Description>

//               <Item.Description>
//                 Ticket Price: €{this.props.price}
//               </Item.Description>
//               <Item.Extra>
//                 <div>
//                   <TicketDropdown />
//                 </div>
//                 {/*                <Label>Limited Availability</Label>*/}
//               </Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//         <div className="ui inverted divider" />
//       </div>
//     );
//   }
// }
