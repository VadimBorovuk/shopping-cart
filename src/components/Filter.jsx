import React from 'react'
import { Input , Menu } from 'semantic-ui-react'

const Filter =({setFilter, filterBy, searchQuery, setSearchQuery})=> {
        return (
            <Menu vertical>
                <Menu.Item
                    name='all'
                    active={filterBy === 'all'}
                    onClick={setFilter.bind(this,'all')}
                >
                    All
                </Menu.Item>
                <Menu.Item
                    name='price_high'
                    active={filterBy === 'price_high'}
                    onClick={setFilter.bind(this,'price_high')}
                >
                    Price-high
                </Menu.Item>
                <Menu.Item
                    name='price_low'
                    active={filterBy === 'price_low'}
                    onClick={setFilter.bind(this,'price_low')}
                >
                    Price-low
                </Menu.Item>
                <Menu.Item
                    name='author'
                    active={filterBy === 'author'}
                    onClick={setFilter.bind(this,'author')}
                >
                    Author
                </Menu.Item>
                <Menu.Item>
                    <Input onChange={e=> setSearchQuery(e.target.value)} icon="search"  value={searchQuery} placeholder='Search book...' />
                </Menu.Item>
            </Menu>
        )
};

export default Filter;