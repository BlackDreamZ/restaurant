import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {restaurants} from "./mocks/mock.js";

createRoot(document.getElementById('root')).render(
    React.createElement('div', {className: 'rests', children: [
            React.createElement('h2', {children: restaurants[0].name}),
            React.createElement('h3', {children: 'Меню'}),
            React.createElement('ul', {children: [
                React.createElement('li', {children: restaurants[0].menu[0].name}),
                React.createElement('li', {children: restaurants[0].menu[1].name}),
                React.createElement('li', {children: restaurants[0].menu[2].name}),
            ]}),
            React.createElement('h3', {children: 'Отзывы'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[0].reviews[0].text}),
                    React.createElement('li', {children: restaurants[0].reviews[1].text}),
                ]}),

            React.createElement('h2', {children: restaurants[1].name}),
            React.createElement('h3', {children: 'Меню'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[1].menu[0].name}),
                    React.createElement('li', {children: restaurants[1].menu[1].name}),
                ]}),
            React.createElement('h3', {children: 'Отзывы'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[1].reviews[0].text}),
                    React.createElement('li', {children: restaurants[1].reviews[1].text}),
                    React.createElement('li', {children: restaurants[1].reviews[2].text}),
                ]}),

            React.createElement('h2', {children: restaurants[2].name}),
            React.createElement('h3', {children: 'Меню'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[2].menu[0].name}),
                    React.createElement('li', {children: restaurants[2].menu[1].name}),
                    React.createElement('li', {children: restaurants[2].menu[2].name}),
                ]}),
            React.createElement('h3', {children: 'Отзывы'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[2].reviews[0].text}),
                ]}),

            React.createElement('h2', {children: restaurants[3].name}),
            React.createElement('h3', {children: 'Меню'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[3].menu[0].name}),
                    React.createElement('li', {children: restaurants[3].menu[1].name}),
                ]}),
            React.createElement('h3', {children: 'Отзывы'}),
            React.createElement('ul', {children: [
                    React.createElement('li', {children: restaurants[3].reviews[0].text}),
                    React.createElement('li', {children: restaurants[3].reviews[1].text}),
                ]}),
    ]}),

)
