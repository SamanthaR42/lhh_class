function shuffle() {
    for (let i = 0; i < 52; i++) {
        let j = random(i, 51);
        this.swap(i, j);
    }
}