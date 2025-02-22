import React, {Component} from 'react'
import {Menu, Popup, List, Button, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const CartComponent = ({title, id, image, removeFromCart}) => (
    <List selection verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color="red">
                    Remove
                </Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);

const MenuAc = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item name="browse">Магазин книг</Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item name="signup">
                Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item name="help">
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => (
                    <CartComponent {...book} />
                ))}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
);

export default MenuAc;