class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
}