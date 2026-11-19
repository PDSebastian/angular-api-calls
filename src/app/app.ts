import { NgComponentOutlet } from '@angular/common';
import { Component, Type, signal } from '@angular/core';
import { Demo1HttpClick } from './demos/demo1-http-click/demo1-http-click';
import { Ex1aCount } from './exercitii/ex1a-count/ex1a-count';
import { Ex1bAverageAge } from './exercitii/ex1b-average-age/ex1b-average-age';
import { Ex1cTop3 } from './exercitii/ex1c-top3/ex1c-top3';
import { Ex1dEmails } from './exercitii/ex1d-emails/ex1d-emails';
import { Ex1eMinors } from './exercitii/ex1e-minors/ex1e-minors';
import { Demo2OnInit } from './demos/demo2-on-init/demo2-on-init';
import { Ex2aStartList } from './exercitii/ex2a-start-list/ex2a-start-list';
import { Ex2bStartAverage } from './exercitii/ex2b-start-average/ex2b-start-average';
import { Ex2cAdults } from './exercitii/ex2c-adults/ex2c-adults';
import { Ex2dYahoo } from './exercitii/ex2d-yahoo/ex2d-yahoo';
import { Ex2eFirstUser } from './exercitii/ex2e-first-user/ex2e-first-user';
import { Demo3LoadingError } from './demos/demo3-loading-error/demo3-loading-error';
import { Ex3aLoading } from './exercitii/ex3a-loading/ex3a-loading';
import { Ex3bServerDown } from './exercitii/ex3b-server-down/ex3b-server-down';
import { Ex3cNotFound } from './exercitii/ex3c-not-found/ex3c-not-found';
import { Ex3dRetry } from './exercitii/ex3d-retry/ex3d-retry';
import { Ex3eStatuses } from './exercitii/ex3e-statuses/ex3e-statuses';
import { Demo4Params } from './demos/demo4-params/demo4-params';
import { Ex4aOlderThan } from './exercitii/ex4a-older-than/ex4a-older-than';
import { Ex4bDomain } from './exercitii/ex4b-domain/ex4b-domain';
import { Ex4cBetweenAges } from './exercitii/ex4c-between-ages/ex4c-between-ages';
import { Ex4dEmailExists } from './exercitii/ex4d-email-exists/ex4d-email-exists';
import { Ex4ePages } from './exercitii/ex4e-pages/ex4e-pages';
import { Demo5Post } from './demos/demo5-post/demo5-post';
import { Ex5aCreate } from './exercitii/ex5a-create/ex5a-create';
import { Ex5bValidationErrors } from './exercitii/ex5b-validation-errors/ex5b-validation-errors';
import { Ex5cConflict } from './exercitii/ex5c-conflict/ex5c-conflict';
import { Ex5dAddToList } from './exercitii/ex5d-add-to-list/ex5d-add-to-list';
import { Ex5eClearOnSuccess } from './exercitii/ex5e-clear-on-success/ex5e-clear-on-success';
import { Demo6PatchDelete } from './demos/demo6-patch-delete/demo6-patch-delete';
import { Ex6aDelete } from './exercitii/ex6a-delete/ex6a-delete';
import { Ex6bYounger } from './exercitii/ex6b-younger/ex6b-younger';
import { Ex6cRename } from './exercitii/ex6c-rename/ex6c-rename';
import { Ex6dPassword } from './exercitii/ex6d-password/ex6d-password';
import { Ex6eDeleteTwice } from './exercitii/ex6e-delete-twice/ex6e-delete-twice';
import { Demo7JobQueue } from './demos/demo7-job-queue/demo7-job-queue';
import { Ex7aSendJob } from './exercitii/ex7a-send-job/ex7a-send-job';
import { Ex7bCheckStatus } from './exercitii/ex7b-check-status/ex7b-check-status';
import { Ex7cAllJobs } from './exercitii/ex7c-all-jobs/ex7c-all-jobs';
import { Ex7dAutoCheck } from './exercitii/ex7d-auto-check/ex7d-auto-check';
import { Ex7eThreeJobs } from './exercitii/ex7e-three-jobs/ex7e-three-jobs';
import { Demo8Login } from './demos/demo8-login/demo8-login';
import { Ex8aShopLogin } from './exercitii/ex8a-shop-login/ex8a-shop-login';
import { Ex8bProducts } from './exercitii/ex8b-products/ex8b-products';
import { Ex8cWrongPassword } from './exercitii/ex8c-wrong-password/ex8c-wrong-password';
import { Ex8dSchoolCourses } from './exercitii/ex8d-school-courses/ex8d-school-courses';
import { Ex8eLogout } from './exercitii/ex8e-logout/ex8e-logout';

interface Page {
  title: string;
  component: Type<unknown>;
}

interface Section {
  title: string;
  pages: Page[];
}

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly sections: Section[] = [
    {
      title: '1. HttpClient la click',
      pages: [
        { title: 'Demo', component: Demo1HttpClick },
        { title: '1a. Câți utilizatori', component: Ex1aCount },
        { title: '1b. Vârsta medie', component: Ex1bAverageAge },
        { title: '1c. Top 3 cei mai în vârstă', component: Ex1cTop3 },
        { title: '1d. Emailurile', component: Ex1dEmails },
        { title: '1e. Câți minori', component: Ex1eMinors },
      ],
    },
    {
      title: '2. ngOnInit la pornire',
      pages: [
        { title: 'Demo', component: Demo2OnInit },
        { title: '2a. Lista la pornire', component: Ex2aStartList },
        { title: '2b. Media la pornire', component: Ex2bStartAverage },
        { title: '2c. Adulții', component: Ex2cAdults },
        { title: '2d. Utilizatorii de pe yahoo', component: Ex2dYahoo },
        { title: '2e. Primul utilizator', component: Ex2eFirstUser },
      ],
    },
    {
      title: '3. Se încarcă / eroare',
      pages: [
        { title: 'Demo', component: Demo3LoadingError },
        { title: '3a. Se încarcă...', component: Ex3aLoading },
        { title: '3b. Serverul oprit', component: Ex3bServerDown },
        { title: '3c. Email inexistent', component: Ex3cNotFound },
        { title: '3d. Reîncearcă', component: Ex3dRetry },
        { title: '3e. Statusul pe ecran', component: Ex3eStatuses },
      ],
    },
    {
      title: '4. Parametri în URL',
      pages: [
        { title: 'Demo', component: Demo4Params },
        { title: '4a. Mai în vârstă decât', component: Ex4aOlderThan },
        { title: '4b. După domeniu', component: Ex4bDomain },
        { title: '4c. Între două vârste', component: Ex4cBetweenAges },
        { title: '4d. Emailul există?', component: Ex4dEmailExists },
        { title: '4e. Pagini de câte 2', component: Ex4ePages },
      ],
    },
    {
      title: '5. POST',
      pages: [
        { title: 'Demo', component: Demo5Post },
        { title: '5a. Creează un utilizator', component: Ex5aCreate },
        { title: '5b. Erorile 400', component: Ex5bValidationErrors },
        { title: '5c. Email deja folosit', component: Ex5cConflict },
        { title: '5d. Apare în listă', component: Ex5dAddToList },
        { title: '5e. Golește doar la succes', component: Ex5eClearOnSuccess },
      ],
    },
    {
      title: '6. PATCH și DELETE',
      pages: [
        { title: 'Demo', component: Demo6PatchDelete },
        { title: '6a. Șterge', component: Ex6aDelete },
        { title: '6b. −1 an', component: Ex6bYounger },
        { title: '6c. Redenumește', component: Ex6cRename },
        { title: '6d. Schimbă parola', component: Ex6dPassword },
        { title: '6e. Șterge de două ori', component: Ex6eDeleteTwice },
      ],
    },
    {
      title: '7. Job queue',
      pages: [
        { title: 'Demo', component: Demo7JobQueue },
        { title: '7a. Trimite un job', component: Ex7aSendJob },
        { title: '7b. Verifică statusul', component: Ex7bCheckStatus },
        { title: '7c. Toate joburile', component: Ex7cAllJobs },
        { title: '7d. Verifică singur până e gata', component: Ex7dAutoCheck },
        { title: '7e. Trei joburi deodată', component: Ex7eThreeJobs },
      ],
    },
    {
      title: '8. Login + token',
      pages: [
        { title: 'Demo', component: Demo8Login },
        { title: '8a. Login la shop', component: Ex8aShopLogin },
        { title: '8b. Produsele cu token', component: Ex8bProducts },
        { title: '8c. Parolă greșită', component: Ex8cWrongPassword },
        { title: '8d. Cursurile de la school', component: Ex8dSchoolCourses },
        { title: '8e. Logout', component: Ex8eLogout },
      ],
    },
  ];

  protected readonly selected = signal<Page>(this.sections[0].pages[0]);
}
