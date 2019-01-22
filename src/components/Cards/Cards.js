import React, {Component} from 'react';
import Card from './Card/Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classes from './Cards.css'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.identity = 0;
        this.state = {cards: []};
        this.state.display = false;
    }

    onAddClicked = () => {
        const cardsCopy = [...this.state.cards];
        cardsCopy.push(this.createCard());
        cardsCopy.push(this.createCard());
        cardsCopy.push(this.createCard());
        cardsCopy.push(this.createCard());
        this.setState({cards: cardsCopy})
    }

    onDeleteClicked = (id) => {
        const cardsCopy = [...this.state.cards];
        const index = cardsCopy.findIndex(c => c.id === id)
        cardsCopy.splice(index, 1)
        this.setState({cards: cardsCopy});
    }

    createCard = () => {
        const number = ++this.identity
        const card = {title: "Card " + number}
        card.id = number;
        return card;
    }

    render = () => {
        const cards = this.state.cards.map(
            c => {
                return (
                    <CSSTransition key={c.id}
                        classNames={{
                            enter: classes.fadeEnter,
                            enterActive: classes.fadeEnterActive,
                            exit: classes.fadeExit,
                            exitActive: classes.fadeExitActive
                        }}
                        timeout={400}>
                        <Card 
                            click={this.onDeleteClicked.bind(this, c.id)}
                            id={c.id}
                            title={c.title} />
                    </CSSTransition>)
            });

        return (
            <div>
                <button className={classes.addButton} onClick={this.onAddClicked}>Add a card</button>
                <button className={classes.addButton} onClick={this.onDeleteClicked}>Delete last</button>
                <TransitionGroup className={classes.cardContainer}>
                    {cards}
                </TransitionGroup>
            </div>
        );
    }
}

export default Cards;