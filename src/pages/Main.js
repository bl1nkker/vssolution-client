import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import Features from '../components/features/Features';
import GameCatalog from '../components/GameCatalog/GameCatalog';
import Footer from '../components/Footer/Footer';
import React from 'react';
import ButtonChoise from '../components/buttons/ButtonChoise';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header 
          page="main"
          offer="Покупка Ваших виртуальных ценностей по самым выгодным ценам" 
          img="images/hero.png"
          blockClass="main"
        >
          <ButtonChoise 
            btnName="choise"
            href="#catalog"
            text="Выбрать игру"
          />
        </Header>
        <Features />
        <GameCatalog />
        <Footer />
      </div>
    )
  }
}

export default Main;
