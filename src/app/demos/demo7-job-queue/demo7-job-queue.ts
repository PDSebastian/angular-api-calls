import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface JobCreated {
  jobId: string;
}

interface Job {
  id: string;
  type: string;
  status: number;
}

@Component({
  selector: 'app-demo7-job-queue',
  templateUrl: './demo7-job-queue.html',
})
export class Demo7JobQueue {
  private readonly http = inject(HttpClient);

  protected readonly statusText: string[] = ['În coadă', 'Rulează', 'Gata', 'Eșuat'];

  protected readonly jobId = signal<string>('');
  protected readonly job = signal<Job | null>(null);

  protected send(): void {
    this.http.post<JobCreated>('/jobs-api/jobs', { type: 'email', payload: 'Salut' }).subscribe({
      next: (data) => {
        this.jobId.set(data.jobId);
        this.job.set(null);
      },
    });
  }

  protected check(): void {
    this.http.get<Job>(`/jobs-api/jobs/${this.jobId()}`).subscribe({
      next: (data) => this.job.set(data),
    });
  }
}
