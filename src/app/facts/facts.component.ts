import { Component, OnInit } from '@angular/core';
import { Fact, FactsService } from 'src/app/facts/facts.service';

@Component({
    selector: 'app-facts',
    templateUrl: './facts.component.html',
    styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

    randomFact: Fact = new Fact();
    todayFact: Fact = new Fact();

    constructor(private factsService: FactsService) {
    }

    ngOnInit(): void {
        this.getRandomFact();
        this.getTodayFact();
    }

    private getRandomFact(): void {
        this.factsService.getRandomFact().subscribe((fact: Fact) => {
            fact = this.checkHttpPrefix(fact);
            this.randomFact = fact;
        });
    }

    private getTodayFact(): void {
        this.factsService.getTodayFact().subscribe((fact: Fact) => {
            fact = this.checkHttpPrefix(fact);
            this.todayFact = fact;
        });
    }

    private checkHttpPrefix(fact: Fact): Fact {
        if (!fact.source.startsWith('http')) {
            fact.source = `https://${fact.source}`;
        }
        return fact;
    }

}
