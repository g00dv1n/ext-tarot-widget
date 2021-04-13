import './mo-tarot-widget_index.min@1.0.0.js';
import render from './actions/render.js'

const Widget = TarotWidget.default;

new Widget('ext-widget-container', undefined, render);