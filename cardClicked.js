function cardClicked(card, column, lastCard, lastColumn) {
    if (card.reversed) {
        card.reversed = false;
        return;
    }

    if (lastCard == null) {
        card.selected = true;
        this.remember(card, column);
    }
    else {
        if (card.color == lastCard.color) {
            return;
        }

        if (lastCard.value + 1 != card.value) {
            return;
        }

        let cards = lastColumn.popFrom(lastCard);
        column.append(cards);
        this.forget();
        lastCard.selected = false;
    }
    //te shoe killed te clicky clicky
}
