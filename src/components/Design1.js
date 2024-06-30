import React from 'react';
import './styles.css';

function Design1() {
  return (
    <div className="main">
  <header>
        <h1>Classic Header</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <div class="banner">
        <h2>Welcome to our website</h2>
    </div>

    <footer>
        <p>Classic Footer &copy; 2024</p>
    </footer>
    </div>
  );
}

export default Design1;