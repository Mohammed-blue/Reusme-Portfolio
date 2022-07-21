import HFitness from '../../assets/imgs/HFitness.PNG'
import ToDoList from '../../assets/imgs/Simple-to-do-list.PNG'
import ComplexCalculator from '../../assets/imgs/Complex-Calculator.PNG'
import SmileyFaces from '../../assets/imgs/Matching-smileyfaces.PNG'
import DatingForm from '../../assets/imgs/DatingForm.PNG'
import InvoiceCreator from '../../assets/imgs/InvoiceCreator.PNG'
import PasswordGenerator from '../../assets/imgs/PasswordGenerator.PNG'
import TicTacToe from '../../assets/imgs/TicTackToe.PNG'
import AirbnbClone from '../../assets/imgs/AirbnbClone.PNG'
import Loader from 'react-loaders'
import './index.scss'

export const MyWork = (props) => {
    return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
    </div>
  );

}

export const MyWorkCard = () => {

    return (
        <>
          <div className="wrapper">
            <a href="https://github.com/Mohammed-blue/https---github.com-Mohammed-blue-Create-React-App">
              <MyWork
                img={HFitness}
                title="Fitness App" class
              />
            </a>
            <a href="https://github.com/Mohammed-blue/Simple-ToDo-List">
              <MyWork
                img={ToDoList}
                title="Simple ToDoList"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/Fancy-Calculator">
              <MyWork
                img={ComplexCalculator}
                title="Complex Calculator"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/MatchingSmileyfaces/blob/master/smileyfaces.html">
              <MyWork
                img={SmileyFaces}
                title="Matching Game"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/MatchingSmileyfaces/blob/master/datingform.html">
              <MyWork
                img={DatingForm}
                title="Dating Form"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/Invoice-Creator/blob/master/app.js">
              <MyWork
                img={InvoiceCreator}
                title="Invoice Creator"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/Password-Generator">
              <MyWork
                img={PasswordGenerator}
                title="Password Generator"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/TIcTacToe">
              <MyWork
                img={TicTacToe}
                title="TicTacToe Game"
              />
            </a>
            <a href="https://github.com/Mohammed-blue/AirbnbClone">
              <MyWork
                img={AirbnbClone}
                title="Airbnb Clone"
              />
            </a>
          </div>
            <Loader type='pacman' />
        </>
    )
}

// export default MyWork