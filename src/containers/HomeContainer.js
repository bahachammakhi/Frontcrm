import React, { useState, useEffect } from 'react';
import classes from './css/home.module.scss';
import art from './../img/lol.png';
import groupart from './../img/Groupe 5.png';
import ContactHome from '../components/ui/contactHome';
//mport Technologies from '../components/ui/Technologies';
import Services from './Services';
import DevProccess from './DevProccess';
//import CardProject from '../components/ui/CardProject';
import Typing from 'react-typing-animation';
import ContactSection from './ContactSection';
import { InterButtonOnHover } from './../components/ui/Inter2Button';
//import withApi from './../hoc/withApi';
//import { getAllPortfolios } from './../requests/requests';
import { useDidMount } from './../hooks/useLifeCycle';
import contentLoading from '../hoc/contentLoading';
import Logo from '../components/layout/Logo';



const HomeContainer = (match) => {
	const [ bo, changebo ] = useState(false);
	const [ state, setState ] = useState('Bienvenue');
	const [ state1, setState1 ] = useState('Vneuron');
	let width = '180px';
	if (window.innerWidth > 768) {
		width = '500px';
	}
	// useDidMount(() => {
	// 	getAllPortfolios.call();
	// });

	if (window.innerWidth < 768) {
		width = '300px';
	}
	useEffect(
		() => {
			if (window.innerWidth < 768) {
				setState('Vneuron');
				setState1('Vneuron');
			}
		},
		[ bo ]
	);
	window.onresize = () => changebo(!bo);
	return (
		<div className={classes.wrapper}>
			{
				// theback to top logo Go finish later
				/* <Logo /> */
			}
			<div className={`${classes.container}`}>
				<div className={classes.title}>
					<p className={classes.title1}>{state}</p>
					<p className={classes.title2}>
						<span className={classes.span}>{state1}</span>
					</p>
				</div>

				<div className={classes.description}>
					<Typing loop speed={200}>
						<span className={classes.title} style={{ color: 'black' }}>
						Créeons une bonne relation <br></br> avec nos clients
						</span>
						<Typing.Backspace count={20} />
					</Typing>
					
				</div>
			</div>
			
			<div className={classes.buttons}>
				
				<InterButtonOnHover link="#contact">Contact me</InterButtonOnHover>
			</div>

			<div className={` animated slideInRight ${classes.art}`}>
				<img src={art} alt="art" style={{ width: width, marginRight: '150px' }} />
				<div className={classes.groupart}>
					<img src={groupart} alt="art" style={{ width: width }} />
				</div>
			</div>

			<div className={classes.services}>
				<Services />
			</div>
			<div className={classes.process}>
				<DevProccess />
			</div>
			
			<div id="contact" style={{ overflow: 'hidden' }}>
				<ContactSection />
			</div>
		</div>
	);
};
export default HomeContainer;
