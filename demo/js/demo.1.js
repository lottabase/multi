/* eslint no-console: 0 */
// eslint-disable-next-line import/no-extraneous-dependencies
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "../../src";

import "../../src/css/fancy-example.css";
class Item extends React.Component {
    renderTitle(){
        if (!this.props.children){
        return (
            <AccordionItemTitle>>
            { this.props.name }
            </AccordionItemTitle>
          );

        }
    }
    renderBody(){
        if (!this.props.children){
        return (
            <AccordionItemTitle>>
            { this.props.name }
            </AccordionItemTitle>
          );

        }
    }
	render() {
  	return <AccordionItem>
      { this.renderTitle() }
      { this.renderBody() }
    </AccordionItem>
  }
}

class List extends React.Component {
	constructor() {
  	super();
  }
  
  list(contacts) {
  	const children = (contacts) => {
    	if (contacts) {
            
      	return <ul>{ this.list(contacts) }</ul>
      }
    }
    
    return contacts.map((node, index) => {
      return <Item key={ node.id } name={ node.name }>
        { children(node.contacts) }
      </Item>
    })
  }
  
  render() {
  	return <Accordion accordion={false}>
    	{ this.list(this.props.contacts) }
    </Accordion>
  }
}

const contacts = [
    {
        id:1,
        name: "Friends",
        type: "Group",
        contacts: [
            {id:2, name: "Udi", type: "Contact"},
            {id:3, name: "Tommy", type: "Contact"},
            {
                id:6,
                name: "Old Friends",
                type: "Group",
                contacts: [
                    {id:7, name: "Itay", type: "Contact"},
                ]
            },
        ]
    },
    {
        id:4,
        name: "Family",
        type: "Group",
        contacts: [
            {id:5, name: "Roni", type: "Contact"},
        ]
    },
    {id: 8, name: "Ori", type: "Contact"},
];

const Example = () => (
 
  <div className="container">
    <List contacts = { contacts } />
    <h2 className="u-margin-top">Contacts Tree</h2>

  </div>
);

ReactDOM.render(<Example />, document.getElementById("app-root"));
