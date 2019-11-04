import React, { Component } from 'react';
import './sideBar.scss';

export class SideBar extends Component {
    render() {
        return (
            <div class="card">
            <div class="card-header">Categories</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Italian</li>
    <li class="list-group-item">French</li>
    <li class="list-group-item">Irish</li>
    <li class="list-group-item">Animal</li>
    <li class="list-group-item">Flower</li>
    <li class="list-group-item">Christmas</li>
    <li class="list-group-item">Valentine's</li>
  </ul>
</div>
        )
    }
}