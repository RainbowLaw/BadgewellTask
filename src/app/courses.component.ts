import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ course.title | summary:10 }}
    `
})
export class CoursesComponent {
    course = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}