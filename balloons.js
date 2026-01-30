const bdayBallons = (function(){
    const density = 12;
    const colors = ['pink', 'purple', 'gold', 'coral', 'lavender', 'mint', 'rose', 'teal'];
    const sizes = ['small', 'medium', 'medium', 'large']; // mais médios

    const stringElement = document.createElement("div");
    stringElement.classList.add("string");

    for (let i = 0; i < density; i++) {
        const element = document.createElement("div");
        element.classList.add("balloon");
        element.classList.add(randomColor());
        element.classList.add(sizes[random(0, sizes.length)]);

        element.append(stringElement.cloneNode());
        document.body.append(element);

        setTimeout(() => {
            releaseBalloon(element);
        }, (i * 1200) + random(200, 600));
    }

    function randomColor() {
        return colors[random(0, colors.length)];
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function releaseBalloon(balloon) {
        const delay = random(50, 500);
        const x = random(-95, -35);
        const y = random(-95, -35);

        // Trocar cor e tamanho a cada release
        colors.forEach(c => balloon.classList.remove(c));
        sizes.forEach(s => balloon.classList.remove(s));
        balloon.classList.add(randomColor());
        balloon.classList.add(sizes[random(0, sizes.length)]);

        const sequence = [{
            offset: 0,
            transform: `rotateZ(45deg) translate(0, 0)`,
            opacity: 0.85
        }];

        // Movimento mais suave com curvas
        if (random(0, 2) === 0) {
            balloon.style.left = `${-1 * x}vw`;

            sequence.push({
                offset: 0.15,
                transform: `rotateZ(43deg) translate(${x * 0.3}vw, ${y * 0.1}vh)`,
                opacity: 0.9
            });
            sequence.push({
                offset: 0.4,
                transform: `rotateZ(47deg) translate(${x * 0.6}vw, ${y * 0.5}vh)`,
                opacity: 0.85
            });
            sequence.push({
                offset: 0.7,
                transform: `rotateZ(44deg) translate(${x}vw, ${y * 0.8}vh)`,
                opacity: 0.8
            });
            sequence.push({
                offset: 0.9,
                transform: `rotateZ(46deg) translate(${x * 1.1}vw, ${y}vh)`,
                opacity: 0.6
            });
        } else {
            sequence.push({
                offset: 0.2,
                transform: `rotateZ(47deg) translate(${x * 0.1}vw, ${y * 0.4}vh)`,
                opacity: 0.9
            });
            sequence.push({
                offset: 0.5,
                transform: `rotateZ(43deg) translate(${x * 0.4}vw, ${y * 0.7}vh)`,
                opacity: 0.85
            });
            sequence.push({
                offset: 0.75,
                transform: `rotateZ(46deg) translate(${x * 0.7}vw, ${y}vh)`,
                opacity: 0.75
            });
        }

        sequence.push({
            offset: 1,
            transform: `rotateZ(45deg) translate(-105vw, -105vh)`,
            opacity: 0.3
        });

        const balloonAnimation = balloon.animate(sequence, {
            duration: random(14000, 22000),
            delay: delay,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
    }
})();
