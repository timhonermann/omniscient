import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Fact {
    id: string;
    text: string;
    source: string;
    language: string;

    constructor() {
        this.id = '';
        this.text = '';
        this.source = '';
        this.language = '';
    }
}

@Injectable()
export class FactsService {
    private readonly BASE_API = 'https://uselessfacts.jsph.pl';

    constructor(private httpClient: HttpClient) {
    }

    getRandomFact(): Observable<Fact> {
        const url = `${this.BASE_API}/random.json?language=en`;
        return this.httpClient.get<Fact>(url);
    }

    getTodayFact(): Observable<Fact> {
        const urL = `${this.BASE_API}/today.json?language=en`;
        return this.httpClient.get<Fact>(urL);
    }
}
