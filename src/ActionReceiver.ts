export class ActionReceiver {
    numbers: Array<string> = [];

    public actionNumber(x: number) {
        this.numbers.push(x.toString());
    }

    public getStateNumber():string {
        return this.numbers.join('');
    }

}

export default ActionReceiver;