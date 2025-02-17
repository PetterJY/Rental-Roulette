import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
		<section id="contact">
			<h3>Contact</h3>
			<address>
				<ul class="footer-item">
					<li><a href="mailto:Ålesund@rental.com">Ålesund@rental.com</a></li>
				</ul>
			</address>
		</section>
		
		<nav id="links">
			<h3>Links</h3>
			<ul class="footer-item">
				<li><a href="https://github.com/">GitHub</a></li>
			</ul>
		</nav>
		
		<section id="creators">
			<h3>Creators</h3>
			<ul class="footer-item">
				<li>Mathias Løvnes</li>
				<li>Marcus Skaue</li>
				<li>Petter Ytterdahl</li>
			</ul>
		</section>
	</footer>
  );
};

export default Footer;