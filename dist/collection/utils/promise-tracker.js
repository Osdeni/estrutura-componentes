export class PromiseTracker {
    constructor(activeCallback) {
        this.activeCallback = activeCallback;
        this.counter = 0;
        this.active = false;
    }
    addPromise(promise) {
        this.counter++;
        this.updateActive();
        promise.then(() => {
            this.counter--;
            this.updateActive();
        }).catch(() => {
            this.counter--;
            this.updateActive();
        });
    }
    updateActive() {
        const active = this.counter > 0;
        if (active !== this.active) {
            this.active = active;
            this.activeCallback(this.active);
        }
    }
}
