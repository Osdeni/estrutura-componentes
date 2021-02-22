export declare class PromiseTracker {
    private activeCallback;
    private counter;
    private active;
    constructor(activeCallback: any);
    addPromise(promise: any): void;
    private updateActive;
}
