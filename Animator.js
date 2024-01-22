class Animator {
    constructor(spritesheet, xStart, yStart, width, height, framCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, framCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = framCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();


        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame,
            this.yStart,
            this.width,
            this.height,
            x,
            y,
            this.width * 2,
            this.height * 2);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };


}