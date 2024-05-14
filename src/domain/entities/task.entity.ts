import { User } from './user.entity';

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  WONT_DO = 'WONT_DO',
  TO_DO = 'TO_DO'
}

type TaskAtt = {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
  authorId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export class Task {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
  authorId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  authorData?: User;

  constructor({ id, title, description, authorId, dueDate, status, createdAt, deletedAt, updatedAt }: TaskAtt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authorId = authorId;
    this.status = status || TaskStatus.OPEN;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  toDto() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      status: this.status,
      due_date: this.dueDate,
      author_id: this.authorId,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
      deleted_at: this.deletedAt
    };
  }

  static fromDto(dto: object) {
    return new Task({
      title: dto['title'],
      description: dto['description'],
      status: dto['status'],
      authorId: dto['author_id'],
      dueDate: dto['due_date'],
      createdAt: dto['created_at'],
      deletedAt: dto['deleted_at'],
      updatedAt: dto['updated_at']
    });
  }
}
