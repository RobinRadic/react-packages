"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class When {
    constructor(_ask, opts) {
        this._ask = _ask;
        this.opts = opts;
    }
    get ask() { return this._ask; }
    when(...args) {
        this.opts.when = args.length === 1 ? args[0] : (answers) => answers[args[0]] === args[1];
        return this;
    }
    whenNot(name, value) {
        this.opts.when = answers => answers[name] === value;
        return this;
    }
    whenHas(name, value) {
        this.opts.when = answers => answers[name].includes(value);
        return this;
    }
    whenNotHas(name, value) {
        this.opts.when = answers => answers[name].includes(value) === false;
        return this;
    }
}
exports.When = When;
class Ask {
    constructor(gen) {
        this.gen = gen;
        this.questions = [];
    }
    input(name, message, def, opts = {}) {
        opts = Object.assign({ type: 'input', name, message, default: def }, opts);
        this.questions.push(opts);
        return new When(this, opts);
    }
    confirm(name, message, def, opts = {}) {
        opts = Object.assign({ type: 'confirm', name, message, default: def }, opts);
        this.questions.push(opts);
        return new When(this, opts);
    }
    list(name, message, choices, def, opts = {}) {
        opts = Object.assign({ type: 'list', name, message, choices, default: def }, opts);
        this.questions.push(opts);
        return new When(this, opts);
    }
    checkbox(name, message, choices, def, opts = {}) {
        opts = Object.assign({ type: 'checkbox', name, message, choices, default: def }, opts);
        this.questions.push(opts);
        return new When(this, opts);
    }
    get(reset = true) {
        let questions = this.questions;
        if (reset) {
            this.questions = [];
        }
        return questions;
    }
    prompt(reset = true) {
        return this.gen.prompt(this.get(reset));
    }
}
exports.Ask = Ask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi9Bc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFhLElBQUk7SUFDYixZQUFzQixJQUFTLEVBQVksSUFBYztRQUFuQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBVTtJQUFHLENBQUM7SUFFN0QsSUFBSSxHQUFHLEtBQVMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUEsQ0FBQztJQUlqQyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUYsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLEtBQUssS0FBSyxDQUFBO1FBQ3JELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQTtRQUNyRSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7Q0FDSjtBQTFCRCxvQkEwQkM7QUFFRCxNQUFhLEdBQUc7SUFHWixZQUFzQixHQUFjO1FBQWQsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUZwQyxjQUFTLEdBQWUsRUFBRSxDQUFBO0lBRWEsQ0FBQztJQUV4QyxLQUFLLENBQUMsSUFBc0IsRUFBRSxPQUE0QixFQUFFLEdBQXlCLEVBQUUsT0FBaUIsRUFBRTtRQUN0RyxJQUFJLG1CQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFLLElBQUksQ0FBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBc0IsRUFBRSxPQUE0QixFQUFFLEdBQXlCLEVBQUUsT0FBaUIsRUFBRTtRQUN4RyxJQUFJLG1CQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFLLElBQUksQ0FBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBc0IsRUFBRSxPQUE0QixFQUFFLE9BQTRCLEVBQUUsR0FBeUIsRUFBRSxPQUFpQixFQUFFO1FBQ25JLElBQUksbUJBQUssSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFLLElBQUksQ0FBRSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBc0IsRUFBRSxPQUE0QixFQUFFLE9BQTRCLEVBQUUsR0FBeUIsRUFBRSxPQUFpQixFQUFFO1FBQ3ZJLElBQUksbUJBQUssSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFLLElBQUksQ0FBRSxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUk7UUFDWixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUssS0FBSyxFQUFHO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFDRCxPQUFPLFNBQVMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1FBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBeENELGtCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAneWVvbWFuLWdlbmVyYXRvcic7XG5pbXBvcnQgR2VuZXJhdG9yIGZyb20gJy4vR2VuZXJhdG9yJztcblxuZXhwb3J0IGNsYXNzIFdoZW4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfYXNrOiBBc2ssIHByb3RlY3RlZCBvcHRzOiBRdWVzdGlvbikge31cblxuICAgIGdldCBhc2soKTogQXNrIHtyZXR1cm4gdGhpcy5fYXNrfVxuXG4gICAgd2hlbihmbjogKGFuc3dlcnM6YW55KSA9PiBib29sZWFuKSA6IHRoaXNcbiAgICB3aGVuKG5hbWU6c3RyaW5nLCB2YWx1ZTphbnkpIDogdGhpc1xuICAgIHdoZW4oLi4uYXJncykgOiB0aGlzIHtcbiAgICAgICAgdGhpcy5vcHRzLndoZW4gPSBhcmdzLmxlbmd0aCA9PT0gMSA/IGFyZ3NbMF0gOiAoYW5zd2VycykgPT4gYW5zd2Vyc1sgYXJnc1swXSBdID09PSBhcmdzWzFdXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgd2hlbk5vdChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm9wdHMud2hlbiA9IGFuc3dlcnMgPT4gYW5zd2Vyc1sgbmFtZSBdID09PSB2YWx1ZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHdoZW5IYXMobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5vcHRzLndoZW4gPSBhbnN3ZXJzID0+IGFuc3dlcnNbIG5hbWUgXS5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB3aGVuTm90SGFzKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMub3B0cy53aGVuID0gYW5zd2VycyA9PiBhbnN3ZXJzWyBuYW1lIF0uaW5jbHVkZXModmFsdWUpID09PSBmYWxzZVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzayB7XG4gICAgcXVlc3Rpb25zOiBRdWVzdGlvbltdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnZW46IEdlbmVyYXRvcikge31cblxuICAgIGlucHV0KG5hbWU6IFF1ZXN0aW9uWyduYW1lJ10sIG1lc3NhZ2U6IFF1ZXN0aW9uWydtZXNzYWdlJ10sIGRlZj86IFF1ZXN0aW9uWydkZWZhdWx0J10sIG9wdHM6IFF1ZXN0aW9uID0ge30pIHtcbiAgICAgICAgb3B0cyA9IHsgdHlwZTogJ2lucHV0JywgbmFtZSwgbWVzc2FnZSwgZGVmYXVsdDogZGVmLCAuLi5vcHRzIH07XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2gob3B0cylcbiAgICAgICAgcmV0dXJuIG5ldyBXaGVuKHRoaXMsIG9wdHMpO1xuICAgIH1cblxuICAgIGNvbmZpcm0obmFtZTogUXVlc3Rpb25bJ25hbWUnXSwgbWVzc2FnZTogUXVlc3Rpb25bJ21lc3NhZ2UnXSwgZGVmPzogUXVlc3Rpb25bJ2RlZmF1bHQnXSwgb3B0czogUXVlc3Rpb24gPSB7fSkge1xuICAgICAgICBvcHRzID0geyB0eXBlOiAnY29uZmlybScsIG5hbWUsIG1lc3NhZ2UsIGRlZmF1bHQ6IGRlZiwgLi4ub3B0cyB9O1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKG9wdHMpXG4gICAgICAgIHJldHVybiBuZXcgV2hlbih0aGlzLCBvcHRzKTtcbiAgICB9XG5cbiAgICBsaXN0KG5hbWU6IFF1ZXN0aW9uWyduYW1lJ10sIG1lc3NhZ2U6IFF1ZXN0aW9uWydtZXNzYWdlJ10sIGNob2ljZXM6IFF1ZXN0aW9uWydjaG9pY2VzJ10sIGRlZj86IFF1ZXN0aW9uWydkZWZhdWx0J10sIG9wdHM6IFF1ZXN0aW9uID0ge30pIHtcbiAgICAgICAgb3B0cyA9IHsgdHlwZTogJ2xpc3QnLCBuYW1lLCBtZXNzYWdlLCBjaG9pY2VzLCBkZWZhdWx0OiBkZWYsIC4uLm9wdHMgfTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaChvcHRzKVxuICAgICAgICByZXR1cm4gbmV3IFdoZW4odGhpcywgb3B0cyk7XG4gICAgfVxuXG4gICAgY2hlY2tib3gobmFtZTogUXVlc3Rpb25bJ25hbWUnXSwgbWVzc2FnZTogUXVlc3Rpb25bJ21lc3NhZ2UnXSwgY2hvaWNlczogUXVlc3Rpb25bJ2Nob2ljZXMnXSwgZGVmPzogUXVlc3Rpb25bJ2RlZmF1bHQnXSwgb3B0czogUXVlc3Rpb24gPSB7fSkge1xuICAgICAgICBvcHRzID0geyB0eXBlOiAnY2hlY2tib3gnLCBuYW1lLCBtZXNzYWdlLCBjaG9pY2VzLCBkZWZhdWx0OiBkZWYsIC4uLm9wdHMgfTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaChvcHRzKVxuICAgICAgICByZXR1cm4gbmV3IFdoZW4odGhpcywgb3B0cyk7XG4gICAgfVxuXG4gICAgZ2V0KHJlc2V0ID0gdHJ1ZSk6IFF1ZXN0aW9uW10ge1xuICAgICAgICBsZXQgcXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnM7XG4gICAgICAgIGlmICggcmVzZXQgKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVzdGlvbnNcbiAgICB9XG5cbiAgICBwcm9tcHQocmVzZXQgPSB0cnVlKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbi5wcm9tcHQodGhpcy5nZXQocmVzZXQpKTtcbiAgICB9XG59Il19